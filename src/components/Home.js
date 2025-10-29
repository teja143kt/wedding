import React from 'react';
 // Only for hero background if needed

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="d-flex justify-content-center align-items-center text-center home-bg">
        <div className="text-white">
          <h1 className="display-4 fw-bold">Your Dream Wedding Awaits</h1>
          <p className="fs-4">Artistic Wedding Photography</p>
        </div>
      </section>

      {/* Intro */}
      <section className="container text-center my-5">
        <h2 className="fw-bold  mb-3" style={{ fontFamily: 'Times New Roman',color: "rgb(221 128 33 / 90%)" }}>
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
              style={{height:'300px',width:'320px'}}
            />
          </div>
          <div className="col-md-6">
            <h2 className=" fw-bold" style={{ fontFamily: 'Times New Roman',color: "rgb(221 128 33 / 90%)" }}>
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
        <h2 className="fw-bold  mb-3" style={{ fontFamily: 'Times New Roman',color: "rgb(221 128 33 / 90%)" }}>Services</h2>
        <h4 className="mb-3 fw-semibold">Our 6-Day Wedding Photography Experience</h4>
        <p className="mb-4">
          From pre-wedding excitement to grand reception — we capture every emotion…
        </p>

        <div className="row g-4">
          {[
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0cKaRI7M9mPEygZjZJBk9anNXCjlbviKhXCJPsd0YWlnnZhUt6bo3HGM_sEuZhjyBi0&usqp=CAU",
              title: "Engagement",
              desc: "Capturing emotions that last a lifetime."
            },
            {
              img: "https://vedicbridge.com/wp-content/uploads/2025/08/Marriage-puja.jpg",
              title: "Puja Ceremony",
              desc: "Sacred rituals captured beautifully."
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMGk-PYlYGTkR9EYqCBZRdzGOagKbMLdhX-LUhE3w6Zu_Ht4wDtDCZLCfqu2FOJuqpDI&usqp=CAU",
              title: "Haldi Ceremony",
              desc: "Bright colors, bright smiles."
            },
            {
              img: "https://tamil.cdn.zeenews.com/tamil/sites/default/files/2018/03/24/127886-hindu-wedding.jpg",
              title: "Marriage",
              desc: "Graceful & elegant wedding moments."
            },
            {
              img: "https://miro.medium.com/v2/1*9FwzVTA8yKYy3oxCmWI6XA.jpeg",
              title: "Gruha Pravesh",
              desc: "A beautiful new beginning."
            },
            {
              img: "https://i.pinimg.com/736x/bb/72/09/bb72090d075472991190dce58a67f967.jpg",
              title: "Reception",
              desc: "Celebrate the joy of togetherness."
            },
          ].map((service, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow-lg p-3">
                <img src={service.img} alt={service.title} className="img-fluid rounded mb-3" />
                <h5  style={{color: "rgb(221 128 33 / 90%)"}}>{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Album Section */}
      <section className="container text-center my-5">
        <h2 className="fw-bold mb-3" style={{ fontFamily: 'Times New Roman',color: "rgb(221 128 33 / 90%)" }}>Albums</h2>
        <p className="mb-4">Timeless wedding albums to cherish forever…</p>

        <div className="row g-4 justify-content-center">
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
            <a href="/albums" className="d-block mt-2 fst-italic text-decoration-none">View all →</a>
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
