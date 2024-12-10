import { createContext, useContext, useState } from "react";

export const CaptainDataContext = createContext();

// Custom hook to use captain context
// export const useCaptain = () => {
//   const context = useContext(CaptainContext);
//   if (!context) {
//     throw new Error("useCaptain must be used within a CaptainContext");
//   }
//   return context;
// };

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // // Login captain
  // const loginCaptain = async (credentials) => {
  //     setIsLoading(true);
  //     try {
  //         // Add your login API call here
  //         setError(null);
  //     } catch (err) {
  //         setError(err.message);
  //     } finally {
  //         setIsLoading(false);
  //     }
  // };

  // // Logout captain
  // const logoutCaptain = () => {
  //     setCaptain(null);
  // };
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    isLoading,
    error,
    // loginCaptain,
    // logoutCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
