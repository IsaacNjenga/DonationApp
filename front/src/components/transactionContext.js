import React, { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [orderTrackingId, setOrderTrackingId] = useState(null);

  return (
    <TransactionContext.Provider
      value={{ orderTrackingId, setOrderTrackingId }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);
