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
