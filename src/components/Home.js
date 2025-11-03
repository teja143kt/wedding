import React from 'react';
import { Link } from 'react-router-dom';
// Only for hero background if needed

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="d-flex justify-content-center align-items-center text-center home-bg">
        <div className="text-white" style={{ fontFamily: 'times new romen' }}>
          <h1 className="display-4 fw-bold " style={{ marginTop: '380px', color: '#f49213ff', }}>Your Dream Wedding Awaits</h1>
          <p className="fs-1 " style={{ color: '#020202d9', }}>Artistic Wedding Photography</p>
        </div>
      </section>

      {/* Intro */}
      <section className="container text-center my-5">
        <h2 className="fw-bold  mb-3" style={{ fontFamily: 'Times New Roman', color: "rgb(221 128 33 / 90%)" }}>
          AWARD WINNING PHOTOGRAPHY
        </h2>
        <p className="fs-5">
          Showcasing your big day in a memorable and unforgettable way.
        </p>
      </section>

      {/* Profile Section */}
      <section className="container my-5">
        <div className="row align-items-center text-center text-md-start g-4">
          <div className="col-md-6">
            <img src="https://i.pinimg.com/474x/cb/f9/58/cbf958a59f2950ad7bc211ce50961166.jpg"
              className="img-fluid rounded-circle shadow-lg"
              alt="profile"
              style={{ height: '300px', width: '320px' }}
            />
          </div>
          <div className="col-md-6">
            <h2 className=" fw-bold" style={{ fontFamily: 'Times New Roman', color: "rgb(221 128 33 / 90%)" }}>
              Hello, My name is Teja
            </h2>
            <p>
              A wedding photographer passionate about capturing love stories in their most
              natural and beautiful moments. I believe every wedding is unique, and my goal
              is to create timeless images that reflect genuine emotions, laughter, and the
              little details that make your day truly yours. With a blend of candid and creative
              photography, I strive to turn your special moments into lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container text-center my-5">
        <h2 className="fw-bold  mb-3" style={{ fontFamily: 'Times New Roman', color: "rgb(221 128 33 / 90%)" }}>Services</h2>
        <h4 className="mb-3 fw-semibold">Our 6-Day Wedding Photography Experience</h4>
        <p className="mb-4">
          From pre-wedding excitement to grand reception — we capture every emotion
        </p>

        <div className="row g-4">
          {[
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0cKaRI7M9mPEygZjZJBk9anNXCjlbviKhXCJPsd0YWlnnZhUt6bo3HGM_sEuZhjyBi0&usqp=CAU",
              title: "Engagement",
              desc: "Two hearts, one promise — forever begins with this beautiful moment."
            },
            {
              img: "https://vedicbridge.com/wp-content/uploads/2025/08/Marriage-puja.jpg",
              title: "Puja Ceremony",
              desc: "Sacred rituals captured beautifully."
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMGk-PYlYGTkR9EYqCBZRdzGOagKbMLdhX-LUhE3w6Zu_Ht4wDtDCZLCfqu2FOJuqpDI&usqp=CAU",
              title: "Haldi Ceremony",
              desc: "Bathed in turmeric and laughter, love begins to shine brighter than gold."
            },
            {
              img: "https://tamil.cdn.zeenews.com/tamil/sites/default/files/2018/03/24/127886-hindu-wedding.jpg",
              title: "Marriage",
              desc: "In your arms, I’ve found my home and my forever begins today."
            },
            {
              img: "https://miro.medium.com/v2/1*9FwzVTA8yKYy3oxCmWI6XA.jpeg",
              title: "Gruha Pravesh",
              desc: "May this home be filled with love, laughter, and endless blessings."
            },
            {
              img: "https://i.pinimg.com/736x/bb/72/09/bb72090d075472991190dce58a67f967.jpg",
              title: "Reception",
              desc: "Where the night sparkles with love, laughter, and forever memories."
            },
          ].map((service, index) => (
            <div className="col-12 col-sm-6 col-lg-4 " key={index}>
              <div className="card h-100 border-0 shadow-lg p-3 services">
                <Link to='/services' style={{ textDecoration: 'none' }}>
                  <img src={service.img} alt={service.title} className="img-fluid rounded mb-3" />
                  <h5 style={{ color: "rgb(221 128 33 / 90%)" }}>{service.title}</h5>
                  <p style={{ color: 'black' }}>{service.desc}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About  wedding photostudio */}

      <section className="container my-5">
        <h2 className="mb-3 text-center " style={{ textAlign: 'center',fontFamily:'times new romen',color:'rgb(221 128 33 / 90%)' }}>About  wedding photostudio</h2>
        <div className="row align-items-center">
          {/* Left Side - Text Section */}
          <div className="col-lg-6 col-md-12 mb-4">
            <p className="text-muted">
              We are a passionate team of photographers and event managers dedicated to capturing and creating
              beautiful moments. With years of experience in the industry, we pride ourselves on delivering
              exceptional quality and service to our clients.
            </p>
            <p className="text-muted">
              Our mission is to transform ordinary moments into extraordinary memories through our creative
              photography and meticulous event planning. We believe that every client is unique, and we tailor
              our services to meet your specific needs and preferences.
            </p>

            <div className="row mt-4">
              <div className="col-6 col-md-6 mb-3 ">
                <h5 className="fw-bold" style={{color:'rgb(221 128 33 / 90%)' }}>Professional Quality</h5>
                <p className="small text-muted">State-of-the-art equipment and techniques</p>
              </div>
              <div className="col-6 col-md-6 mb-3 ">
                <h5 className="fw-bold"  style={{color:'rgb(221 128 33 / 90%)' }}>Experienced Team</h5>
                <p className="small text-muted">Years of industry expertise</p>
              </div>
              <div className="col-6 col-md-6 mb-3 ">
                <h5 className="fw-bold"  style={{color:'rgb(221 128 33 / 90%)' }}>Client Focused</h5>
                <p className="small text-muted">Personalized service for every client</p>
              </div>
              <div className="col-6 col-md-6 mb-3 ">
                <h5 className="fw-bold"  style={{color:'rgb(221 128 33 / 90%)' }}>Timely Delivery</h5>
                <p className="small text-muted">Quick turnaround on all projects</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="col-lg-6 col-md-12">
            <div className="row g-3">
              <div className="col-6">
                <img
                  src="https://cdn0.weddingwire.in/article/3713/3_2/1280/jpg/63173-marriage-images-rituals-wedding-photography-lead-image.webp"
                  alt="Studio"
                  className="img-fluid rounded shadow-sm"
                  style={{ height: '200px', }}
                />
              </div>
              <div className="col-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.JPG-20SmJ3FlWqZwqOiOcYe4vq40Vk5GCi.jpeg"
                  alt="Outdoor"
                  className="img-fluid rounded shadow-sm"
                  style={{ height: '200px', marginBottom: '10px' }}
                />
              </div>
              <div className="col-6">
                <img

                  src="https://i.ytimg.com/vi/Ht0yqiH7Vg8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAs4LUVYn_E4ZacRxXNwDEb48BDMw"

                  alt="Wedding"
                  className="img-fluid rounded shadow-sm"
                  style={{ height: '200px', width: '300px', marginBottom: '40px' }}
                />
              </div>
              <div className="col-6">
                <img
                  src="https://i.pinimg.com/originals/8d/39/70/8d3970a7eb83cafd57161cb5a4be2ecb.jpg"
                  alt="Event"
                  className="img-fluid rounded shadow-sm"
                  style={{ height: '200px', width: '300px', }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* booking section */}

      <section className="py-20 ">
        <div className="container  text-center shadow-lg" style={{
          height: '300px',
          background: "rgb(221 128 33 / 15%)",
          borderRadius: '20px',
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center'
        }}>
          <h2 className="mb-6" style={{
            color: "rgb(221 128 33 / 90%)",
            fontFamily: 'Times New Roman',
          }}>Ready to Book Your Session?</h2>

          <div className=" justify-center gap-4">
            <p className="mt-3  mb-8 ">Contact us today to schedule your photography session or event planning consultation.</p>
            <button style={{ border: 'none', borderRadius: '10px', color: 'white', background: "rgb(221 128 33 / 70%)", margin: '10px' }}><Link class="btn " to="/booknow" >Book a Session</Link></button>
            <button style={{ border: 'none', borderRadius: '10px', color: 'white', background: "rgb(221 128 33 / 70%)", margin: '10px' }}><Link class="btn" to="/contact">Contact Us</Link></button>
          </div>
        </div>
      </section>

      {/* Album Section */}
      <section className="container text-center my-5">
        <h2 className="fw-bold mb-3" style={{ fontFamily: 'Times New Roman', color: "rgb(221 128 33 / 90%)" }}>Albums</h2>
        <p className="mb-4 pb-4">Timeless wedding albums to cherish forever</p>

        <div className="row g-4 justify-content-center shadow"
          style={{
            borderRadius: '20px',
            background: 'rgb(221 128 33 / 20%)',
          }}
        >
          <div className="col-md-4">
            <img className="img-fluid rounded" style={{ height: "350px", objectFit: "cover" }}
              src="https://i.pinimg.com/736x/a1/0a/82/a10a82d036b9a20436e7ea3dd60076bc.jpg"
              alt=""
            />
            <p className="mt-2 fs-6 fst-italic">Forever starts today</p>
          </div>

          <div className="col-md-4">
            <img className="img-fluid rounded" style={{ height: "350px", objectFit: "cover" }}
              src="https://i.pinimg.com/originals/37/2a/f8/372af84252aebd81617686732fafc2dc.jpg"
              alt=""
            />
            <Link to="/albums" className="d-block mt-2 fst-italic text-decoration-none">View all →</Link>
          </div>

          <div className="col-md-4">
            <img className="img-fluid rounded" style={{ height: "350px", objectFit: "cover" }}
              src="https://i.pinimg.com/1200x/81/64/0d/81640da483c39812df796295fd877a20.jpg"
              alt=""
            />
            <p className="mt-2 fs-6 fst-italic">Soulmates forever</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
