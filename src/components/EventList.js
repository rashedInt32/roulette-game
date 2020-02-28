import React from 'react';

const EventList = ({ event, time }) => (
  <div className="event-list">
    <p>
      Game {event.id}{" "}
      {event.isFinished
        ? `ended, result is ${event.result}`
        : `will start in ${time} sec`}
    </p>
  </div>
);

export default EventList;
