import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [loading, setLoading] = useState(true);
   const location = useLocation();

   // This function is to prevent losing login status on refresh
   useEffect(() => {
      const fetchData = async () => {
         const loggedIn = await fetch(`${apiURL}/userLoggedIn`)
         setIsAuthenticated(loggedIn.ok);
         setLoading(false);
      }
      fetchData();
   }, []);

   useEffect(() => {
      // Check user is authenticated when url changes
      // Don't check if create account is accessed
      const checkAuth = () => {
         console.log(location);
         if (location.pathname !== '/create_account') {
         // Check authorization 
            console.log(isAuthenticated);
            if (!isAuthenticated) { 
               console.log("Not authenticated");
            }
         }
      };
      checkAuth();
   }, [location]);

   // useEffect(async () => {
   //    const response = await fetch(`${apiURL}/userLoggedIn`);

   //    if (response.ok) {
   //       setIsAuthenticated(true);
   //       setLoading(false);
   //    }
   //    else {
   //       setIsAuthenticated(false);
   //       setLoading(false);
   //    }
   // }, []);

   const login = async (username, password) => {
      try {
         const response = await fetch(`${apiURL}/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            //credentials: 'include',
            body: JSON.stringify({ username, password }),
         });

         if (response.ok) {
            setIsAuthenticated(true);
            // Set sessionStorage to store usage details
            const data = await response.json();
            console.log(data);
            sessionStorage.setItem('user.name', data.name);
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
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, loading, setLoading }}>
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

