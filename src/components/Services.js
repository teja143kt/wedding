import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Services() {
  return (
    <div className='container'>
      <section>
          <div className="container">
          <div className="col-md-6  pb-3 " id='about'style={{height:'330px',width:'1100px', borderRadius:'20px',marginLeft:'30px',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.475)'}}>
            <div class="col-md-6" >
              <img src="https://i.pinimg.com/474x/cb/f9/58/cbf958a59f2950ad7bc211ce50961166.jpg" alt="profile" className=' services'/>
            </div>
            <div >
              <p className='p2' style={{
                color: 'rgba(234, 175, 115, 0.9)', fontFamily: 'Times New Roman',
                fontSize: '40px'
              }}>Engagement</p>
              <p className='p4'>a wedding photographer passionate about capturing love stories <br />  in their most natural and beautiful moments.
                I believe every wedding <br /> is unique, and my goal is to create timeless images that reflect genuine <br /> emotions,   laughter, and the little details that make your day truly yours. <br /> With a blend of candid and creative photography, I strive to turn your <br /> special moments into lasting memories.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
