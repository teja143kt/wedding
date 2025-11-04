import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { MdCameraswitch } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center text-lg-center text-light"
      style={{
        backgroundColor: "#1c1c1c",
        padding: "50px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-center text-md-center text-center">
          {/* Left Section */}
          <div className="col-md-4" style={{textAlign:'left' }}>
            <h3
              style={{
                color: "rgb(221 128 33 / 90%)",
                fontFamily: "Times New Roman",
                marginBottom: "15px",
                 
              }}
            >
              <MdCameraswitch style={{ marginRight: "8px" ,}} />
              Wedding Photography
            </h3>
            <p style={{ color: "#ccc", }}>
              Capturing your beautiful moments with creativity and care —
              turning every memory into a masterpiece.
            </p>

            {/* Social Icons */}
            <div>
              {[FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube].map((Icon, i) => (
                <Icon
                  key={i}
                  className="m-2"
                  style={{
                    fontSize: "30px",
                    color: "#ccc",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "rgb(221 128 33 / 90%)")}
                  onMouseOut={(e) => (e.target.style.color = "#ccc")}
                />
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="col-md-3" style={{textAlign:'left',marginRight:'80px',marginLeft:"90px"}}>
            <h3
              style={{
                color: "rgb(221 128 33 / 90%)",
                fontFamily: "Times New Roman",
                marginBottom: "15px",
               
              }}
            >
              Services
            </h3>
            <ul className="list-unstyled">
              {["Engagement photography", "Puja photography", "Haldi photography", "Marriage photography", "Griha Pravesh photography", "Reception photography"].map(
                (service, index) => (
                  <li
                    
                    key={index}
                    style={{
                      color: "#ccc",
                      margin: "6px 0",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "rgb(221 128 33 / 90%)")}
                    onMouseOut={(e) => (e.target.style.color = "#ccc")}
                  >
                    <Link to="/services" style={{textDecoration:'none',color:'white',}}>{service} </Link>
                    
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-md-3" style={{textAlign:'left'}}>
            <h3
              style={{
                color: "rgb(221 128 33 / 90%)",
                fontFamily: "Times New Roman",
                marginBottom: "15px",
              }}
            >
              Contact Us
            </h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:tejakutchula@gmail.com"
                  className="text-decoration-none"
                  style={{
                    color: "#ccc",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "rgb(221 128 33 / 90%)")}
                  onMouseOut={(e) => (e.target.style.color = "#ccc")}
                >
                  tejakutchula@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+916302233031"
                  className="text-decoration-none"
                  style={{
                    color: "#ccc",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "rgb(221 128 33 / 90%)")}
                  onMouseOut={(e) => (e.target.style.color = "#ccc")}
                >
                  +91 6302233031
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Visakhapatnam"
                  className="text-decoration-none"
                  style={{
                    color: "#ccc",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "rgb(221 128 33 / 90%)")}
                  onMouseOut={(e) => (e.target.style.color = "#ccc")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visakhapatnam
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "#444", margin: "30px 0" }} />

        {/* Bottom Bar */}
        <div className="text-center">
          <p style={{ color: "#aaa", marginBottom: "10px" }}>
            &copy; 2025 Wedding Photography. All rights reserved.
          </p>

          <div>
            <a
              href="https://www.linkedin.com/in/tejakutchula"
              className="mx-2 text-decoration-none"
              style={{ color: "#ccc", transition: "0.3s" }}
              onMouseOver={(e) => (e.target.style.color = "rgb(221 128 33 / 90%)")}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            >
              <FaLinkedin className="me-1" /> LinkedIn
            </a>
            |
            <a
              href="https://github.com/teja143kt"
              className="mx-2 text-decoration-none"
              style={{ color: "#ccc", transition: "0.3s" }}
              onMouseOver={(e) => (e.target.style.color = "rgb(221 128 33 / 90%)")}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            >
              <FaGithub className="me-1" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
