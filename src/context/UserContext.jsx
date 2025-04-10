import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUsers } from "../services/apiFunctions";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchAllUsers = async (pageNum) => {
    const localKey = `users-page-${pageNum}`;
    const localData = sessionStorage.getItem(localKey);

    if (localData) {
      const parsed = JSON.parse(localData);
      setUsers(parsed.data);
      setTotalPages(parsed.total_pages);
      return;
    }

    try {
      const response = await fetchUsers(pageNum);
      setUsers(response.data);
      setTotalPages(response.total_pages);

      sessionStorage.setItem(
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
      const localKey = `users-page-${page}`;
      const localData = sessionStorage.getItem(localKey);

      if (localData) {
        const parsed = JSON.parse(localData);
        const filteredUsers = parsed.data.filter((user) => user.id !== userId);

        sessionStorage.setItem(
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
    <UserContext.Provider
      value={{
        users,
        setUsers,
        fetchAllUsers,
        page,
        setPage,
        totalPages,
        setTotalPages,
        deleteUserFromStorage,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
