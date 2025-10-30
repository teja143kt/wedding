import { Link } from "react-router-dom";
import { MdCameraswitch } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top" id="navbar">
      <div className="container-fluid" >

        {/* Brand Title */} 
        <Link to="/" className="navbar-brand fw-bold  " id="title" ><MdCameraswitch style={{marginBottom:'20px',margin:'10px',}}/>Wedding Photography</Link>


        {/* Toggle Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold fs-5" id="links">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link fw-bold fs-5" id="links">Aboutus</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link fw-bold fs-5" id="links">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/albums" className="nav-link fw-bold fs-5" id="links">Albums</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link fw-bold fs-5" id="links">Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
