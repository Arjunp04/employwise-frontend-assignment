import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchUserById, fetchUsers } from "../services/apiFunctions";

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
    localStorage.clear();
  };

  const fetchAllUsers = async (pageNum) => {
    const localKey = `users-page-${pageNum}`;

    // Check if users for this page are in localStorage
    const localData = localStorage.getItem(localKey);
    if (localData) {
      const parsed = JSON.parse(localData);
      setUsers(parsed.data);
      setTotalPages(parsed.total_pages);
      return;
    }

    // If not, fetch from API and save in localStorage
    try {
      const response = await fetchUsers(pageNum);
      setUsers(response.data);
      setTotalPages(response.total_pages);

      // Save to localStorage
      localStorage.setItem(
        localKey,
        JSON.stringify({
          data: response.data,
          total_pages: response.total_pages,
        })
      );
    } catch (error) {
      toast.error("Failed to fetch users", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  const deleteUserFromStorage = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);

      // Update localStorage for the current page
      const localKey = `users-page-${page}`;
      const localData = localStorage.getItem(localKey);

      if (localData) {
        const parsed = JSON.parse(localData);
        const filteredUsers = parsed.data.filter((user) => user.id !== userId);

        localStorage.setItem(
          localKey,
          JSON.stringify({
            data: filteredUsers,
            total_pages: parsed.total_pages,
          })
        );
      }

      return updatedUsers;
    });
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
        deleteUserFromStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
