import React, { createContext, useState } from "react";

export const userContext = createContext();

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteUsers, setDeleteUsers] = useState(false);

  return (
    <userContext.Provider
      value={{
        allUsers,
        setAllUsers,
        loading,
        setLoading,
        deleteUsers,
        setDeleteUsers,
        count,
        setCount,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
