import React, { createContext, useState, useCallback } from "react";

export const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
  const [comparisonHistory, setComparisonHistory] = useState([]);

  const handleAddHistory = useCallback(newItem => {
    setComparisonHistory(oldHistory => [newItem, ...oldHistory]);
  }, []);

  return (
    <HistoryContext.Provider value={{ handleAddHistory, comparisonHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
