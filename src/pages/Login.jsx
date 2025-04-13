import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    

    if (isLoggedIn && userRole) {
      // Redirect based on role
      setTimeout(() => {
        navigate(userRole === "Admin" ? "/admin-dashboard" : "/user-dashboard");
      }, 100);
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // API call — returns role (e.g., "Admin" or "User")
      const role = await loginUser(username, password);

      // Save data in localStorage
      window.localStorage.setItem("isLoggedIn", "true");
      window.localStorage.setItem("userRole", role);
      window.localStorage.setItem("username", username); // optional
      // localStorage.setItem("token", "fake-token"); // optional if backend returns token in future

      // Alert and redirect
      alert(`Welcome, ${username}! Role: ${role}`);
      navigate(role === "Admin" ? "/admin-dashboard" : "/user-dashboard");
    } catch (err) {
      setError(err.response?.data || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome to SmartMart</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
