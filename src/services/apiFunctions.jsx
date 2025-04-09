import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// LOGIN API
export const loginUser = async (email, password) => {
  const response = await api.post("/api/login", { email, password });
  return response.data;
};

//get all users api
export const fetchUsers = async (pageNum = 1) => {
  const response = await api.get(`/api/users?page=${pageNum}`);
  return response.data;
};

//get user by id api
export const fetchUserById = async (userId) => {
  const response = await api.get(`/api/users/${userId}`);
  console.log(response);
  return response.data.data;
};

// Update user by ID api
export const updateUserById = async (userId, editForm) => {
  const response = await api.put(`/api/users/${userId}`, editForm);
  return response.data;
};
