
import React from 'react'

function Home() {
  return (
    <div>
      {/* Hero section  */}
      <section id="home">
        <div className='para' id='bg'>
          <p id='p1'>your dream wedding awaits</p>
          <p>Artistic wedding photography</p>
        </div>
        <>
          {/* intro */}
          <div>
            <p className='p2 mt-4' style={{
              marginBottom: '10px', color: 'rgba(234, 175, 115, 0.9)', fontFamily: 'Times New Roman', marginTop: '30px',
              fontSize: '40px'
            }}>AWARD WINNING PHOTOGRAPHY</p>
            <p className='p3'>Showcasing your big day in a memorable and unforgettable way.</p>
          </div>
        </>

        {/* profile */}
        <div class="container">
          <div class="row" id='about'>
            <div class="col-md-6" >
              <img src="https://i.pinimg.com/474x/cb/f9/58/cbf958a59f2950ad7bc211ce50961166.jpg" alt="profile" className='profile' />
            </div>
            <div class="col-md-6">
              <p className='p2' style={{
                color: 'rgba(234, 175, 115, 0.9)', fontFamily: 'Times New Roman',
                fontSize: '40px'
              }}>Hello , My name is Teja</p>
              <p className='p4'>a wedding photographer passionate about capturing love stories <br />  in their most natural and beautiful moments.
                I believe every wedding <br /> is unique, and my goal is to create timeless images that reflect genuine <br /> emotions,   laughter, and the little details that make your day truly yours. <br /> With a blend of candid and creative photography, I strive to turn your <br /> special moments into lasting memories.</p>
            </div>

          </div>
        </div>

        {/* services */}
        <section id="projects" class="container my-5">
          <h2 class="text-center mb-4" style={{
            marginTop: '30px', marginBottom: '30px', color: 'rgba(234, 175, 115, 0.9)', fontFamily: 'Times New Roman',
            fontSize: '40px'
          }}>services</h2>
          <h3 style={{ marginBottom: '20px' }}>Our 6-Day Wedding Photography Experience</h3>
          <p style={{ marginBottom: '30px' }}>From the joyful pre-wedding moments to the grand reception, we capture every emotion and every detail across six unforgettable days. Our service includes candid photography, cinematic videography, traditional portraits, and artistic couple shoots—each frame crafted with creativity and love. We don’t just take pictures; we tell your story beautifully, turning every moment into a timeless memory you’ll cherish forever.</p>
          <div class="row row d-flex align-items-stretch" id="services" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {/* Engagement */}
            <div class="col-md-3 col-lg-3" style={{ marginLeft: "80px" }}>
              <div class="skills-card text-center ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0cKaRI7M9mPEygZjZJBk9anNXCjlbviKhXCJPsd0YWlnnZhUt6bo3HGM_sEuZhjyBi0&usqp=CAU"
                  alt="Project 1" class="img-fluid rounded mb-3" />
                <h2 style={{color:'#fac38bf3'}}>Engagement</h2>
                <p>“Through my lens, I capture not just moments — but emotions that last a lifetime.”</p>
              </div>
            </div>
            {/* <!-- puja --> */}
            <div class="col-md-3 col-lg-3" style={{ marginLeft: "60px" }}>
              <div class="skills-card text-center">
                <img src="https://vedicbridge.com/wp-content/uploads/2025/08/Marriage-puja.jpg" alt="Project 2"
                  class="img-fluid rounded mb-3" />
                <h2 style={{color:'#fac38bf3'}}>Puja Ceremony</h2>
                <p>Capturing the essence of love and commitment during the puja ceremony.</p>
              </div>
            </div>
            {/* <!-- haldi --> */}
            <div class="col-md-6 col-lg-3" style={{ marginLeft: "20px" }}>
              <div class="skills-card text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMGk-PYlYGTkR9EYqCBZRdzGOagKbMLdhX-LUhE3w6Zu_Ht4wDtDCZLCfqu2FOJuqpDI&usqp=CAU"
                  alt="Project 3" class="img-fluid rounded mb-3" />
                <h2 style={{color:'#fac38bf3'}}>Haldi Ceremony</h2>
                <p>Celebrating the joyous haldi ceremony with vibrant colors and emotions.</p>
              </div>
            </div>
            {/* <!-- marriage --> */}
            <div class="col-md-6 col-lg-3" style={{ marginLeft: "80px" }}>
              <div class="skills-card text-center">
                <img
                  src="https://tamil.cdn.zeenews.com/tamil/sites/default/files/2018/03/24/127886-hindu-wedding.jpg"
                  alt="Project 4" class="img-fluid rounded mb-3" />
                <h2 style={{color:'#fac38bf3'}}>Marriage Ceremony</h2>
                <p>Capturing the sacred moments of the marriage ceremony with elegance and grace.</p>
              </div>
            </div>
            {/* <!-- Griha Pravesh --> */}
            <div class="col-md-6 col-lg-3" style={{ marginLeft: "60px" }}>
              <div class="skills-card text-center">
                <img
                  src="https://miro.medium.com/v2/1*9FwzVTA8yKYy3oxCmWI6XA.jpeg"
                  alt="Project 5" class="img-fluid rounded mb-3" />
                <h2 style={{color:'#fac38bf3'}}>Gruha Pravesh</h2>
                <p>Capturing the beautiful moments of the Gruha Pravesh ceremony.</p>
              </div>
            </div>
            {/* <!-- reception --> */}
            <div class="col-md-6 col-lg-3" style={{ marginLeft: "20px" }}>
              <div class="skills-card text-center">
                <img
                  src="https://i.pinimg.com/736x/bb/72/09/bb72090d075472991190dce58a67f967.jpg"
                  alt="Project 6" class="img-fluid rounded mb-3" />
                <h2 style={{color:'#fac38bf3'}}>reception</h2>
                <p>Capturing the joyous moments of the wedding reception with elegance and style.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Albums */}
        {/* <div>
          <h2 class="text-center mb-4" style={{
            marginTop: '20px', marginBottom: '20px', color: 'rgba(234, 175, 115, 0.9)', fontFamily: 'Times New Roman',
            fontSize: '40px'
          }}>Albums</h2>
          <p >Ready to preserve your special day in a timeless wedding album? Contact us today <br /> to book your session, and let’s create memories that you’ll cherish forever.</p>
          <div style={{ marginRight: '50px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div id="album" >
              <div style={{marginBottom:'30px'}} >
                <img style={{height:'420px',}}
                  src="https://i.pinimg.com/736x/a1/0a/82/a10a82d036b9a20436e7ea3dd60076bc.jpg"
                  alt="Project 1" className='img' />
                <p style={{marginTop:'10px', fontFamily:'cursive',fontSize:'20px'}}>Forever starts today</p>
              </div>
              <div style={{marginTop:'50px'}} >
                <p style={{marginBottom:'10px', fontFamily:'cursive',fontSize:'20px'}}>A love story written in hearts</p>
                <img style={{height:'420px', marginBottom:'10px'}}
                  src="https://i.pinimg.com/originals/37/2a/f8/372af84252aebd81617686732fafc2dc.jpg"
                  alt="Project 1" className='img' />
                <a href='http://localhost:3000/albums' className='a' style={{ fontFamily:'cursive',fontSize:'20px', textDecoration:'none', }}>View all...</a>
              </div>
              <div style={{marginBottom:'30px'}}>
                <img
                  src="https://i.pinimg.com/1200x/81/64/0d/81640da483c39812df796295fd877a20.jpg"
                  alt="Project 1" className='img' />
                <p style={{marginTop:'10px', fontFamily:'cursive',fontSize:'20px'}}>Soulmates in a lifetime of love</p>
              </div>

            </div>
          </div>
        </div> */}

      </section>
    </div>
  )
}

export default Home


