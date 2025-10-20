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
              <img src="https://i.pinimg.com/474x/cb/f9/58/cbf958a59f2950ad7bc211ce50961166.jpg" alt="Teja Kutchula" className='profile' />
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
            marginBottom: '30px', color: 'rgba(234, 175, 115, 0.9)', fontFamily: 'Times New Roman',
            fontSize: '40px'
          }}>services</h2>
          <div class="row row d-flex align-items-stretch" id="services">
            {/* Engagement */}
            <div class="col-md-3 col-lg-3">
              <div class="skills-card text-center ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0cKaRI7M9mPEygZjZJBk9anNXCjlbviKhXCJPsd0YWlnnZhUt6bo3HGM_sEuZhjyBi0&usqp=CAU"
                  alt="Project 1" class="img-fluid rounded mb-3" />
                <h5>Engagement</h5>
                <p>“Through my lens, I capture not just moments — but emotions that last a lifetime.”</p>
              </div>
            </div>
            {/* <!-- puja --> */}
            <div class="col-md-3 col-lg-3">
              <div class="skills-card text-center">
                <img src="https://vedicbridge.com/wp-content/uploads/2025/08/Marriage-puja.jpg" alt="Project 2"
                  class="img-fluid rounded mb-3" />
                <h5>Puja Ceremony</h5>
                <p>Capturing the essence of love and commitment during the puja ceremony.</p>
              </div>
            </div>
            {/* <!-- haldi --> */}
            <div class="col-md-6 col-lg-3">
              <div class="skills-card text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMGk-PYlYGTkR9EYqCBZRdzGOagKbMLdhX-LUhE3w6Zu_Ht4wDtDCZLCfqu2FOJuqpDI&usqp=CAU"
                  alt="Project 3" class="img-fluid rounded mb-3" />
                <h5>Haldi Ceremony</h5>
                <p>Celebrating the joyous haldi ceremony with vibrant colors and emotions.</p>
              </div>
            </div>
            {/* <!-- marriage --> */}
            <div class="col-md-6 col-lg-3">
              <div class="skills-card text-center">
                <img
                  src="https://tamil.cdn.zeenews.com/tamil/sites/default/files/2018/03/24/127886-hindu-wedding.jpg"
                  alt="Project 4" class="img-fluid rounded mb-3" />
                <h5>Marriage Ceremony</h5>
                <p>Capturing the sacred moments of the marriage ceremony with elegance and grace.</p>
              </div>
            </div>
            {/* <!-- Griha Pravesh --> */}
            <div class="col-md-6 col-lg-3">
              <div class="skills-card text-center">
                <img
                  src="https://miro.medium.com/v2/1*9FwzVTA8yKYy3oxCmWI6XA.jpeg"
                  alt="Project 5" class="img-fluid rounded mb-3" />
                <h5>Gruha Pravesh</h5>
                <p>Capturing the beautiful moments of the Gruha Pravesh ceremony.</p>
              </div>
            </div>
            {/* <!-- reception --> */}
            <div class="col-md-6 col-lg-3">
              <div class="skills-card text-center">
                <img
                  src="https://i.pinimg.com/736x/bb/72/09/bb72090d075472991190dce58a67f967.jpg"
                  alt="Project 6" class="img-fluid rounded mb-3" />
                <h5>reception</h5>
                <p>Capturing the joyous moments of the wedding reception with elegance and style.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Albums */}
        <section id="skills" class="container my-5">
          <h2 class="text-center mb-4" style={{
            marginBottom: '30px', color: 'rgba(234, 175, 115, 0.9)', fontFamily: 'Times New Roman',
            fontSize: '40px'
          }}>Albums</h2>
          <div class="row row d-flex align-items-stretch" id='album'>
            {/* Album 1 */}
            <div class="col-md-4 col-lg-4">
              <div class=" text-center " >
                <img />
                <h5>Album 1</h5>
                <p>Capturing timeless moments of love and joy in this beautiful wedding album.</p>
              </div>
            </div>
            {/* Album 2 */}

            <div class="col-md-4 col-lg-4">
              <div class=" text-center">
                <img />
                <h5>Album 2</h5>
                <p>A collection of cherished memories from a special wedding day.</p>
              </div>
            </div>
            {/* Album 3 */}
            <div class="col-md-4 col-lg-4">
              <div class=" text-center">
                <img />
                <h5>Album 3</h5>
                <p>A visual journey through the magical moments of a wedding celebration.</p>
              </div>
            </div>
            {/* Album 4 */}
            <div class="col-md-4 col-lg-4">
              <div class=" text-center">
                <img />
                <h5>Album 3</h5>
                <p>A visual journey through the magical moments of a wedding celebration.</p>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  )
}

export default Home


