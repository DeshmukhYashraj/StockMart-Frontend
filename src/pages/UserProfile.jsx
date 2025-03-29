import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logging out..."); // You can add auth logic here
    navigate("/"); // Redirect to login or home page
  };

  return (
    <div className="user-dashboard">
      {/* Hamburger Menu */}
      {!menuOpen && (
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✖</button>
        <ul>
          <li><button onClick={() => navigate("/dashboard")}>Dashboard</button></li>
          <li><button onClick={() => navigate("/profile")}>Profile</button></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* Profile Section */}
      <div className="user-profile">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="profile-img"
          />
          <div className="profile-info">
            <h3>John Doe</h3>
            <p className="email">johndoe@example.com</p>
            <p className="role">Software Developer</p>
          </div>
        </div>

        <div className="profile-details">
          <h4>Details</h4>
          <p><strong>Location:</strong> San Francisco, CA</p>
          <p><strong>Member Since:</strong> Jan 2022</p>
          <p><strong>Role:</strong> Admin</p>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
