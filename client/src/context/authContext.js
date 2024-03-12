import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [currentUser, setCurrentUser] = useState(null);

  const login = async (inputs) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${BASE_URL}/api/auth/logout`);
      setCurrentUser(null);
      // window.location.href = '/login'; // Replace '/login' with the desired redirect path
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (error) {
        console.log("Error parsing stored user:", error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } catch (error) {
      console.log("Error storing user in localStorage:", error);
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
