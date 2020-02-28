import React, { createContext, useState, useEffect } from "react";
import { getConfiguration } from "../api";

export const ConfigContext = createContext();

const ConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useState([]);
  const [loadingConfig, setLoadingConfig] = useState(true);

  useEffect(() => {
    fetchConfiguration();
  }, []);

  const fetchConfiguration = async () => {
    const arrayOfObject = [];
    const [err, config] = await getConfiguration();
    if (err) return;

    const { colors, positionToId } = config.data;
    // Merge colors and positionToId to sing array of object
    positionToId.map((item, i) =>
      arrayOfObject.push({ color: colors[i], position: item })
    );

    setConfig(arrayOfObject);
    setLoadingConfig(false);
  };

  return (
    <ConfigContext.Provider value={{ config }}>
      {!loadingConfig ? children : null}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
