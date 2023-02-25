import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteUsers, setDeleteUsers] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/users/getusers").then((res) => {
      setAllUsers(res.data.User);
      setCount(res.data.User.length);
    });
  }, []);
  console.log(allUsers);
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
