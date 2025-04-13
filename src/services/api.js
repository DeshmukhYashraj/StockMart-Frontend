import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:8080/api/users", // Backend authentication endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

// User Registration API
export const registerUser = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

// User Login API
export const loginUser = async (username, password) => {
  const response = await axios.get("http://localhost:8080/api/login", {
    params: { username, password },
  });
  return response.data; // This should be the role: "Admin" or "User"
};