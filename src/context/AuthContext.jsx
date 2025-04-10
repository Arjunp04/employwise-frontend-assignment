import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getValidToken } from "../utils/validateToken.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => getValidToken());
  const [sessionExpired, setSessionExpired] = useState(false);

  const login = (newToken) => {
    const expiry = new Date().getTime() + 60 * 60 * 1000; // 1 hour
    const authData = { token: newToken, expiry };
    localStorage.setItem("authData", JSON.stringify(authData));
    localStorage.setItem("wasLoggedIn", "true");
    setToken(newToken);
    setSessionExpired(false);
  };

  const logout = () => {
    setToken(null);
    const wasLoggedIn = localStorage.getItem("wasLoggedIn");

    localStorage.clear();
    sessionStorage.clear();

    // Restore return-flag
    if (wasLoggedIn) {
      localStorage.setItem("wasLoggedIn", "true");
    }
  };

  // ✅ Function to check token immediately and on interval
  const checkSession = () => {
    const saved = JSON.parse(localStorage.getItem("authData"));
    const isExpired = !saved || Date.now() > saved.expiry;
    const wasLoggedIn = localStorage.getItem("wasLoggedIn");

    if (isExpired && !sessionExpired) {
      logout();
      setSessionExpired(true); // prevent multiple toasts
      // Notify only returning users
      if (wasLoggedIn) {
        toast.info("Session expired. Please login again.", {
          position: "top-center",
          autoClose: 1000,
        });
      }
      navigate("/login");
    }
  };

  useEffect(() => {
    
    // ✅ One-time delayed check after 3 seconds
    const timeout = setTimeout(() => {
      checkSession();
    }, 2000);

    // ✅ Regular interval every 5 minutes (300,000ms)
    const interval = setInterval(() => {
      checkSession();
    }, 300000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [navigate, sessionExpired]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
