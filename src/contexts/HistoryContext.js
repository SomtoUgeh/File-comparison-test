import React, { createContext, useState, useCallback } from "react";
import handleError from "utils/handleError";
import { getApi, postApi } from "api/requestHandlers";

export const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
  const [comparisonHistory, setComparisonHistory] = useState([]);

  const getAllHistory = useCallback(async () => {
    try {
      const {
        success,
        data: { history }
      } = await getApi("history");

      if (success) setComparisonHistory(history);
    } catch (error) {
      handleError(error);
    }
  }, []);

  const handleAddHistory = useCallback(async newItem => {
    try {
      const { success, data: history } = await postApi("history", newItem);

      if (success) {
        /**
         * Using the response from the backend on success
         * Add new updates to the setComparisonHistory state object
         * setComparisonHistory(oldHistory => [history, ...oldHistory]);
         */

        setComparisonHistory(oldHistory => [newItem, ...oldHistory]);
      }
    } catch (error) {
      handleError(error);
    }
  }, []);

  return (
    <HistoryContext.Provider value={{ getAllHistory, handleAddHistory, comparisonHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
