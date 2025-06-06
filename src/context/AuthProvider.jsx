// AuthProvider.jsx

import { createContext, React, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage.jsx';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem("loggedInUser");
    // console.log("savedUserData on page refresh:", savedUserData); // Debug log
  
    if (savedUserData) {
      const data = getLocalStorage();
      console.log("Data from LocalStorage:", data); // Debugging
      setUserData(data); // Update state with fetched data
    } else {
      setLocalStorage(); // Initialize localStorage if it's empty
      const data = getLocalStorage();
      console.log("Data from LocalStorage:", data); // Debugging
      setUserData(data);
    }
  }, []);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
