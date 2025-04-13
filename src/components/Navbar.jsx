import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { AuthContext } from "../features/auth/AuthContext";
import "./Navbar.css";

const AppNavbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="md" bg="dark" variant="dark" fixed="top" className="py-2 px-4 shadow-sm">
      <Container fluid className="d-flex justify-between align-items-center">
        {/* Logo & Brand */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center logo-link">
          <img src="/logo.jpg" alt="SmartMart Logo" className="logo-img" />
          <span className="brand-text">
            <span className="brand-letter">S</span>
            <span className="brand-lower">tock</span>
            <span className="brand-letter">M</span>
            <span className="brand-lower">art</span>
          </span>
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapsible links */}
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center nav-links">
            {isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/dashboard" className="nav-link">Dashboard</Nav.Link>
                <Nav.Link as={NavLink} to="/admin-dashboard" className="nav-link">Admin Panel</Nav.Link>
                <Nav.Link as={NavLink} to="/inventory" className="nav-link">Inventory</Nav.Link>
                <Nav.Link as={NavLink} to="/billing" className="nav-link">Billing</Nav.Link>

                {/* Custom Dropdown */}
                <Dropdown align="end" className="ms-3">
                  <Dropdown.Toggle variant="secondary" id="dropdown-custom" className="d-flex align-items-center gap-2">
                    Menu
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="custom-dropdown-menu">
                    <Dropdown.Item as={NavLink} to="/profile" className="dropdown-item">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/settings" className="dropdown-item">
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/support" className="dropdown-item">
                      Support
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} className="dropdown-item logout-dropdown">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/login" className="nav-link">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/register" className="nav-link">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
