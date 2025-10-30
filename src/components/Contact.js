import React from "react";

function Contact() {
  return (
    <div
    >
      <section className="container py-5 my-5">
        {/* Heading */}
        <h2
          className="text-center mb-4"
          style={{
            color: 'rgb(221 128 33 / 90%)',
            fontFamily: 'Times New Roman',
            fontSize: '40px',
            marginTop: '30px',
          }}
        >
          Contact Me
        </h2>

        {/* Intro Text */}
        <p className="text-center mb-5 fs-5 px-3 " >
          From the first look to the last dance — I’m here to capture it all.
          <br />
          Contact me and let’s begin your story.
        </p>

        {/* Contact Section */}
        <div className="row justify-content-center align-items-center">
          {/* Contact Form */}
          <div className="col-12 col-md-6 mb-4">
            <div
              className="p-4 shadow rounded text-dark"
              style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(5px)",
              }}
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

                <button
                  type="submit"
                  className="btn text-white w-100"
                  style={{ background: "rgb(221 128 33 / 90%)" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info + Social Media */}
          <div className="col-12 col-md-5 text-center text-md-start text-white">
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(5px)",
              }}
            >
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:tejakutchula@gmail.com"
                    className="text-white text-decoration-none"
                  >
                    tejakutchula@gmail.com
                  </a>
                </li>

                <li className="mb-3">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+916302233031"
                    className="text-white text-decoration-none"
                  >
                    +91 63022 33031
                  </a>
                </li>

                <li className="mb-3">
                  <strong>Location:</strong>{" "}
                  <a
                    href="https://www.google.com/maps/place/Visakhapatnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Visakhapatnam
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
