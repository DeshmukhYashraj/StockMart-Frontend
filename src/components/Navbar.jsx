import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../features/auth/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="navbar fixed-top">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src="/logo.jpg" alt="SmartMart Logo" className="logo-img" />
          <span className="brand-text">
  <span className="brand-letter">S</span>
  <span className="brand-lower">tock</span>
  <span className="brand-letter">M</span>
  <span className="brand-lower">art</span>
</span>


        </Link>
      </div>
      <nav className="nav-links">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/admin-dashboard" className="nav-link">
              Admin Panel
            </Link>
            <Link to="/inventory" className="nav-link">
              Inventory
            </Link>
            <Link to="/billing" className="nav-link">
              Billing
            </Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

