import React, { createContext, useState } from "react";

export const userDataContext = createContext();
const UserContext = ({ children }) => {
  const [user, setuser] = useState({
    email: "",
    fullName: { firstname: '', lastname: '' },
  });
  return (
    <div>
      <userDataContext.Provider value={[user,setuser]}>{children}</userDataContext.Provider>
    </div>
  );
};

export default UserContext;
