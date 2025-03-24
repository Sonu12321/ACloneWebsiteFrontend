import { createContext, useState } from "react";

export const captainDataContext = createContext();

 const CaptainContext = ({ children }) => {
  const [captaininfo, setcaptaininfo] = useState(null);  // ✅ Ensure this is defined

  return (
    <captainDataContext.Provider value={{ captaininfo, setcaptaininfo }}>
      {children}
    </captainDataContext.Provider>
  );
};

export default CaptainContext
