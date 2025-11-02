import { useState } from "react";
import { Link } from "react-router-dom";
import { MdCameraswitch } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      id="navbar"
      style={{
        borderBottom: "1px solid rgb(221 128 33 / 30%)",
        backgroundColor: isOpen ? "white" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container-fluid">
        {/* Brand Title */}
        <Link
          to="/"
          className="navbar-brand fw-bold"
          id="title"
          onClick={closeMenu}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <MdCameraswitch style={{ marginBottom: "3px" }} />
          Wedding Photography
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          id="toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
          style={{
            backgroundColor: isOpen ? "white" : "transparent",
            transition: "background-color 0.3s ease",
          }}
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link fw-bold fs-5"
                id="links"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-link fw-bold fs-5"
                id="links"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link fw-bold fs-5"
                id="links"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/albums"
                className="nav-link fw-bold fs-5"
                id="links"
                onClick={closeMenu}
              >
                Albums
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link fw-bold fs-5"
                id="links"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button
                style={{
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px",
                  background: "rgb(221 128 33 / 80%)",
                }}
                onClick={closeMenu}
              >
                <Link
                  to="/booknow"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Book Now
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
