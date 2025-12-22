import axios from "axios";
const BASE_URL = "";

export const axiosBase = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
