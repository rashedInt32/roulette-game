import React, { useState, useContext, useEffect } from "react";
import _ from "lodash";

import { GameContext } from "../context/GameContext";
import { ResultContext } from "../context/ResultContext";

import { getNextGame, getGame } from "../api";

import EventList from "../components/EventList";
import Spinner from "../components/Spinner";

function Events() {
  const { nextGame, updateGame } = useContext(GameContext);
  const { gameResult, updateResult } = useContext(ResultContext);

  const [events, setEvents] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(nextGame.startDelta);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    updateEvent(nextGame.id, remainingSeconds, null, false);
    const interval = setInterval(() => {
      updateSeconds();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameResult]);

  useEffect(() => {
    if (remainingSeconds === 0) {
      fetchResultAndNextgame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSeconds]);

  // Update remainingSeconds state with interval
  const updateSeconds = () => {
    setRemainingSeconds(remainingSeconds =>
      remainingSeconds > 0 ? remainingSeconds - 1 : 0
    );
  };

  const updateEvent = (id, time, result, isFinished) => {
    const newEvent = {
      id,
      time,
      result,
      isFinished
    };

    setEvents([...events, newEvent]);
  };

  /**
   * fetchResultAndNextgame
   * Start spinning before api call
   * Call getNextGame and getGame apis
   * * to populate ResultContext, GameContext
   * * Modify events State isFinished status
   * Call updateEvent fucntion to push nextGame data
   * to events state
   */
  const fetchResultAndNextgame = async () => {
    setSpinning(true);
    const [e, newGame] = await getNextGame();
    const [err, game] = await getGame(nextGame.uuid);
    setSpinning(false);
    if (err || e) return;

    const { id, startDelta } = newGame.data;
    const { result } = game.data;

    updateResult(result);
    updateGame(newGame.data);
    setRemainingSeconds(startDelta);

    modifyEvents(result);
    updateEvent(id, startDelta, null, false);
  };

  /**
   * modifyEvents
   * @desc update last indexed event result and isFinished property
   */
  const modifyEvents = result => {
    let eventsState = [...events];
    const lastIndex = _.findLastIndex(eventsState);

    eventsState[lastIndex].result = result;
    eventsState[lastIndex].isFinished = true;

    setEvents(eventsState);
  };

  return (
    <div className="events">
      <h4 className="title">Events</h4>
      <Spinner isSpin={spinning} />
      {events &&
        events.map((event, i) => (
          <EventList key={i} event={event} time={remainingSeconds} />
        ))}
    </div>
  );
}

export default Events;
