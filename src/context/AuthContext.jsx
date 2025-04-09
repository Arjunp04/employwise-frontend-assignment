import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const fetchAllUsers = async (pageNum) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${pageNum}`
      );
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchAllUsers(page);
  }, [page]);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        users,
        setUsers,
        fetchAllUsers,
        page,
        setPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
