import React, { useState, useEffect, useContext } from "react";

import { ConfigContext } from "../context/ConfigContext";
import { ResultContext } from "../context/ResultContext";
import { mutateArray } from "../utils";
import { getStats } from "../api";

import BoardCell from "../components/BoardCell";
import Table from "../components/Table";

const LIMITS = 200;

function Stats() {
  const [stats, setStats] = useState([]);
  const { config } = useContext(ConfigContext);
  const { gameResult } = useContext(ResultContext);

  useEffect(() => {
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameResult]);

  const fetchStats = async () => {
    const [err, response] = await getStats(LIMITS);
    if (err) return;

    const modifiedArray = response.data.map(item =>
      mutateArray(item, config, item.result, "color")
    );

    setStats(modifiedArray);
  };

  const renderStats = (stats, name) => {
    const renderItems = stats.map((item, i) => {
      if (name === "slot") {
        return (
          <th key={item.result}>
            <BoardCell value={item.result} color={item.color} size="small" />
          </th>
        );
      }

      return (
        <th key={item.result} className={i < 5 ? "cold" : i > 31 ? "hot" : ""}>
          <span>{item.count}</span>
        </th>
      );
    });

    return renderItems;
  };

  return (
    <div className="stats">
      <h4 className="title">Stats(last 200)</h4>
      <Table
        slot={renderStats(stats, "slot")}
        hits={renderStats(stats, "hits")}
      />
    </div>
  );
}

export default Stats;
