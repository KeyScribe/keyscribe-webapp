import React, { createContext, useContext, useState, useEffect } from 'react';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [loading, setLoading] = useState(true);

   // const checkLogin = async () => {
   //    const response = await fetch(`${apiURL}/userLoggedIn`);

   //    if (response.ok) {
   //       setIsAuthenticated(true);
   //       setLoading(false);
   //    }
   //    else {
   //       setIsAuthenticated(false);
   //       setLoading(false);
   //    }
   // };
   // This function is to prevent losing login status on referesh
   useEffect(async () => {
      const response = await fetch(`${apiURL}/userLoggedIn`);

      if (response.ok) {
         setIsAuthenticated(true);
         setLoading(false);
      }
      else {
         setIsAuthenticated(false);
         setLoading(false);
      }
   }, []);

   const login = async (username, password) => {
      try {
         const response = await fetch(`${apiURL}/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
         });

         if (response.ok) {
            setIsAuthenticated(true);
            return true;
         }
         else {
            console.error('Invalid credentials');
            return false;
         }
      }
      catch (error) {
         console.error(error);
      }
      
   };

   const logout = () => {
      setIsAuthenticated(false);
   };

   return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, loading }}>
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

