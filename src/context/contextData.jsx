import React, { createContext } from "react";

const DataContext = createContext();
const AvailableData = (props) => {
  const message = "hello world";
  return (
    <DataContext.Provider value={{ message }}>
      {props.children}
    </DataContext.Provider>
  );
};
export { AvailableData, DataContext };
