import React from "react";
import {  FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";

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
                height:'380px'
              }}
            >
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-4">
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
          <div className="col-12 col-md-5 text-center text-md-start text-white " style={{ marginBottom: '20px' }}>
            <div
              className="p-4 rounded"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(5px)",
                marginBottom: '20px'
              }}
            >
              <div >
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
            <div className=" text-center text-md-start text-white" >
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(5px)",

                }}
              >
                <h3>Follow Us</h3>
                <p>Stay connected on social media</p>
                <div>
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
              </div>
            </div>
          </div>

          <div className="shadow-lg  rounded-4 mt-3 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.688099037023!2d83.30128431488491!3d17.686815187885467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39432ef8b50ad7%3A0x6d4d9b7e6f0d4b!2sVisakhapatnam%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1698946612345!5m2!1sen!2sin"
              width='100%'
              height="400"
              style={{ border: '0' }}
              allowFullScreen
              title='location map'
            ></iframe>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
