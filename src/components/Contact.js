import React from "react";

function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="container my-5">
        {/* Heading */}
        <div
          className="text-center mb-4 mt-7"
          style={{
            color: "rgb(221 128 33 / 90%)",
            fontFamily: "Times New Roman",
            fontSize: "40px",
          }}
        >
          Contact Me
        </div>

        {/* Intro Text */}
        <p className="text-center mb-5 fs-5">
          From the first look to the last dance — I’m here to capture it all.
          <br /> Contact me and let’s begin your story.
        </p>

        {/* Contact Form and Image */}
        <div 
          className="row align-items-center  p-4 rounded shadow"
          style={{ background: "rgba(223, 202, 181, 0.58)" }}
        >
          {/* Form Section */}
          <div className="col-12 col-md-6">
            <div
              className="p-4 rounded bg-light shadow-sm mb-4"
              style={{ maxWidth: "400px", margin: "30px" }}
            >
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn text-white"
                    style={{ background: "rgb(221 128 33 / 80%)" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <ul className="list-unstyled text-start ms-md-5">
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:tejakutchula@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  tejakutchula@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+916302233031"
                  className="text-decoration-none text-dark"
                >
                  6302233031
                </a>
              </li>
              <li className="mb-2">
                <strong>Location:</strong>{" "}
                <a
                  href="https://www.google.com/maps/place/Visakhapatnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Visakhapatnam
                </a>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="https://i.pinimg.com/236x/bd/ff/58/bdff580478e4f79e59b31a2b50621356.jpg"
              alt="Contact"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "430px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
