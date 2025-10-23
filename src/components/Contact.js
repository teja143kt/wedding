import React from 'react'

function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="container my-5">
        <div><p className="text-center mb-4" style={{
          marginBottom: '30px', color: 'rgba(239, 181, 119, 0.77)', fontFamily: 'Times New Roman',
          fontSize: '40px', marginTop: '100px'
        }}>Contact Me</p>
          <p className="mb-3" style={{  fontSize: '20px' }}>From the first look to the last dance — I’m here to capture it all. <br /> Contact me and let’s begin your story.</p>
        </div>
        <div style={{ marginRight: '50px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div id="contact" >
            <div class="row justify-content-center " >
              <div class="col-md-12">
                <form className='contact-form ms-1' id='from'>
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Your Name" required />
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Your Email" required />
                  </div>
                  <div class="mb-3">
                    <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary " >Send Message</button>
                </form>
              </div>
               <div class="text ">
                  <p className='social'>Email: <a href="tejakutchual@gmail.com">tejakutchula@gmail.com</a></p>
                  <p className='social'>Phone: <a href="tel:+916302233031">6302233031</a></p>
                  <p className='social'>Location: <a href="https://www.google.com/maps/place/Visakhapatnam">Visakhapatnam</a></p>
                </div>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/236x/bd/ff/58/bdff580478e4f79e59b31a2b50621356.jpg"
                alt="Project 1" className='img' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
