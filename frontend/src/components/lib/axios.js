import axios from "axios";

//in production, the frontend will be served from the same origin as backend, so we can use relative path for API requests. In development, we need to specify the backend server URL.
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;