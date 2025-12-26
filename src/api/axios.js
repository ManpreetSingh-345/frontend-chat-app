import axios from "axios";
const BASE_URL = "http://localhost:8080";

// Implement axios interceptors
export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-type": "application/json" }, // Include this specific header for obtaining a new access token (for protected routes)
});
