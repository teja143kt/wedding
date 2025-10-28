import React from 'react'

function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="container my-5" >
        <div className="text-center mb-4" style={{
          color: 'rgb(221 128 33 / 90%)',
          fontFamily: 'Times New Roman',
          fontSize: '40px',
          marginTop: '100px'
        }}>
          Contact Me
        </div>
        <p className="text-center mb-4" style={{ fontSize: '20px' }}>
          From the first look to the last dance — I’m here to capture it all.
          <br /> Contact me and let’s begin your story.
        </p>

        <div className="row align-items-center" id="contact">
          {/* Form Section */}
          <div className="col-md-6 mb-4">
            <form className="contact-form" >
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            {/* Contact Details */}
            <ul className="list-unstyled mt-2" id='form' >
              <li className="mb-2">
                Email:
                <a href="mailto:tejakutchula@gmail.com" className="text-decoration-none"> tejakutchula@gmail.com</a>
              </li>
              <li className="mb-2">
                Phone:
                <a href="tel:+916302233031" className="text-decoration-none"> 6302233031</a>
              </li>
              <li className="mb-2">
                Location:
                <a href="https://www.google.com/maps/place/Visakhapatnam" className="text-decoration-none"> Visakhapatnam</a>
              </li>
            </ul>
          </div>

          {/* Contact Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://i.pinimg.com/236x/bd/ff/58/bdff580478e4f79e59b31a2b50621356.jpg"
              alt="Contact"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
    </div>

  )
}

export default Contact
