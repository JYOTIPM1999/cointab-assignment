import React, { createContext, useState } from "react";

export const userContext = createContext();

const ContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  return (
    <userContext.Provider value={{ allUsers, setAllUsers }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
