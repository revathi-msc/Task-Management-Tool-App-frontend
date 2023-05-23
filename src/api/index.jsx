import axios from "axios";

const api = axios.create({
  baseURL: "https://task-management-tool-app-backend.onrender.com/api",
});
export default api;
