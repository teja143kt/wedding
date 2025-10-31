import React from 'react'

function Booknow() {
  return (
    <div>
      <div >
        <h2
          className="text-center mb-4"
          style={{
            color: 'rgb(221 128 33 / 90%)',
            fontFamily: 'Times New Roman',
            fontSize: '40px',
            marginTop: '90px',
          }}
        >
          Book a Session
        </h2>

        {/* Intro Text */}
        <p className="text-center mb-5 fs-5 px-3 " >
          Fill out the form below to book a photography session or event management service
        </p>
        <div class="container bg-white p-4 p-md-5 rounded shadow-sm mt-5" style={{border:'2px solid black',marginBottom:'30px'}}>
          <form  className='text-left'>
            <div class="mb-3">
              <label for="fullname" class="form-label">Full Name</label>
              <input type="text" class="form-control" name="fullname" id="fullname" placeholder="Enter your full name" required="" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" name="email" id="email" placeholder="Enter your Email" required="" />
            </div>
            <div class="row">
              <label for="email" class="form-label">Phone</label>
              <input class="form-control" placeholder="+91" required="" />
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="dob" class="form-label">Preferred Date</label>
                <input type="date" class="form-control" name="dob" id="dob" required="" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="subject" class="form-label">Service Type</label>
                <select class="form-select" name="subject" id="subject">
                  <option selected="" value="">services</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Puja">Puja</option>
                  <option value="Haldi">Haldi</option>
                  <option value="Marriage">Marriage</option>
                  <option value="Griha Pravesh">Griha Pravesh</option>
                  <option value="Reception">Reception</option>
                </select>
              </div>
            </div>
            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" id="terms" required="" />
              <label class="form-check-label" for="terms">
                I agree to the terms and conditions
              </label>
            </div>

            <div class="d-grid col-md-6 mx-auto">
              <button
                  className="btn text-white w-100"
                  style={{ background: "rgb(221 128 33 / 90%)" }}
                >
                  Send Message
                </button>
            </div>

          </form>
          
        </div>
        <div>
          <p>Have questions about our services or pricing?</p>
          <button
                  type="submit"
                  className="btn text-white"
                  style={{ background: "rgb(221 128 33 / 90%)" ,margin:'20px',width:'90px' }}
                >
                  Contact
                </button>
                </div>
      </div>
    </div>
  )
}

export default Booknow

