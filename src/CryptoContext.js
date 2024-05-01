import React, { createContext, useState } from "react";

// Create context
export const CryptoContext = createContext();

// Create provider component
export const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);

  return (
    <CryptoContext.Provider value={{ cryptos, setCryptos }}>
      {children}
    </CryptoContext.Provider>
  );
};
