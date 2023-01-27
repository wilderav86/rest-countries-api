import React, { useState, createContext } from "react";

export const AllCountryContext = createContext();

export const AllCountryContextProvider = ({ children }) => {
  const [allCountryData, setAllCountryData] = useState({});

  return (
    <AllCountryContext.Provider value={[allCountryData, setAllCountryData]}>
      {children}
    </AllCountryContext.Provider>
  );
};
