import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Don't show navbar on login page
  if (location.pathname === "/login" || !isAuthenticated) {
    return null;
  }

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
    closeMenu();
  };

  return (
    <nav className="navbar">
      <h2 className="logo">TaskManager</h2>

      <button
        type="button"
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Dashboard
        </NavLink>
        <NavLink to="/daily" onClick={closeMenu}>
          Daily Tasks
        </NavLink>
        <NavLink to="/monthly" onClick={closeMenu}>
          Monthly Tasks
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <div className="user-section">
          <span className="user-name">👤 {user?.name}</span>
          <button
            type="button"
            className="btn-logout"
            onClick={handleLogout}
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
