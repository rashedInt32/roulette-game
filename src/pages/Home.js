import React from "react";

import Layout from "../hoc/Layout";
import Stats from "../containers/Stats";
import GameBoard from "../containers/GameBoard";
import Events from "../containers/Events";

function Home() {
  return (
    <Layout>
      <Stats />
      <div className="d-flex">
        <GameBoard />
        <Events />
      </div>
    </Layout>
  );
}

export default Home;
