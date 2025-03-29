import { useState } from "react";
import { registerUser } from "../services/api";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(user);
      alert("✅ " + response);
      setUser({
        username: "",
        password: "",
        role: "USER",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
      });
    } catch (error) {
      alert("❌ Registration failed: " + error.response?.data || error.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="form-header">
          <h2 className="register-title">Register</h2>
          <select name="role" value={user.role} onChange={handleChange} className="role-select">
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <form className="register-form" onSubmit={handleRegister}>
          <input type="text" name="username" placeholder="Username" required value={user.username} onChange={handleChange} className="form-input" />
          <input type="password" name="password" placeholder="Password" required value={user.password} onChange={handleChange} className="form-input" />
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} className="form-input" />
            <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} className="form-input" />
          </div>
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} className="form-input" />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} className="form-input" />
          <input type="text" name="address" placeholder="Address" value={user.address} onChange={handleChange} className="form-input" />
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
