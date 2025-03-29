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
  try {
    const response = await api.post("/login", { username, password });
    
    // Store token in local storage
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed!";
  }
};

export default api;
