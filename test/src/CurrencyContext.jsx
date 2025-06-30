import React, { createContext, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(0);

  const addCurrency = (amount) => {
    setCurrency((prevCurrency) => prevCurrency + amount);
  };

  return (
    <CurrencyContext.Provider value={{ currency, addCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
