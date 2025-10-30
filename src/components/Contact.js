import React from "react";

function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="container my-5">
        {/* Heading */}
        <h2
          className="text-center mb-4"
          style={{
            color: "rgb(221 128 33 / 90%)",
            fontFamily: "Times New Roman",
            fontSize: "40px",
            marginTop: "100px",
          }}
        >
          Contact Me
        </h2>

        {/* Intro Text */}
        <p className="text-center mb-5 fs-5 px-3">
          From the first look to the last dance — I’m here to capture it all.
          <br />
          Contact me and let’s begin your story.
        </p>

        {/* Contact Form and Info Section */}
        <div
          className="row justify-content-center align-items-center p-4 rounded shadow"
          style={{
            background: "rgba(223, 202, 181, 0.58)",
          }}
        >
          {/* Contact Form */}
          <div className="col-12 col-md-6 mb-4">
            <div className="p-4 bg-light shadow-sm rounded">
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

                <button
                  type="submit"
                  className="btn text-white w-100"
                  style={{ background: "rgb(221 128 33 / 80%)" }}
                >
                  Send Message
                </button>
              </form>
              
            </div>
            <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <strong>Email: </strong>
                  <a
                    href="mailto:tejakutchula@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    tejakutchula@gmail.com
                  </a>
                </li>

                <li className="mb-3">
                  <strong>Phone: </strong>
                  <a
                    href="tel:+916302233031"
                    className="text-decoration-none text-dark"
                  >
                    6302233031
                  </a>
                </li>

                <li className="mb-3">
                  <strong>Location: </strong>
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

          {/* Contact Info + Image */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
              
              <img
                src="https://i.pinimg.com/736x/29/04/19/290419b2922283a6a44b452fe3ff529b.jpg"
                alt="Contact"
                className="img-fluid rounded shadow-sm portfolioimg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
