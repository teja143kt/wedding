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
        <div className="container bg-white p-4 p-md-5 rounded shadow-sm mt-5" style={{border:'2px solid black',marginBottom:'30px'}}>
          <form  className='text-left'>
            <div className="mb-3">
              <label  className="form-label">Full Name</label>
              <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Enter your full name" required="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="Enter your Email" required="" />
            </div>
            <div className="row">
              <label  className="form-label">Phone</label>
              <input className="form-control" placeholder="+91" required="" />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Preferred Date</label>
                <input type="date" className="form-control" name="dob" id="dob" required="" />
              </div>
              <div className="col-md-6 mb-3">
                <label  className="form-label">Service Type</label>
                <select className="form-select" name="subject" id="subject">
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
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="terms" required="" />
              <label className="form-check-label" for="terms">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="d-grid col-md-6 mx-auto">
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

