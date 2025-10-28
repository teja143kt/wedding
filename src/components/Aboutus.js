import React from "react";

function Aboutus() {
  return (
    <div>
      {/* About Us Section */}
      <section className="container my-5">
        {/* Title */}
        <div className="text-center mb-5 mt-5">
          <h2
            className="fw-bold"
            style={{
                marginTop:'120px',
                fontSize:'40px',
              color: "rgb(221 128 33 / 90%)",
              fontFamily: "Times New Roman",
            }}
          >
            About Us
          </h2>
        </div>

        {/* Wedding Photography Description */}
        <div className="mb-5">
          <h3 className="mb-3">Wedding Photography</h3>
          <p>
            Welcome to Twogether Studios! We are a boutique Candid Wedding
            Photography Studio based in New Delhi, India and are known for a
            fun, off-beat and modern approach to creating stories from the best
            day in your life. Led by Arjun & Praerna Kartha, we started
            photographing Indian weddings in 2008, and since then have created
            hundreds of unique love stories across the world. We are passionate,
            hard-working and an incredibly motivated team; we love Indian
            weddings, and can’t wait to be a part of yours!
          </p>
        </div>

        {/* Showcase Section */}
        <div className="mb-5">
          <h3 className="mb-3">Wedding Photography Showcase</h3>
          <p>
            Our wedding photography style is modern, contemporary and off-beat.
            A short selection of some of our favourites is given below. To see
            more of our work, check out the full showcase or see our real Indian
            wedding photography stories!
          </p>

          {/* Image Grid (Bootstrap Responsive Grid) */}
          <div className="row g-4">
            {[
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-1-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-2-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-3-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-2021-2-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-7-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-14-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-20-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-19-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-16-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-12-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-18-768x768.jpg",
              "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-17-768x768.jpg",
            ].map((src, index) => (
              <div key={index} className=" col-sm-6 col-md-4">
                <img
                  src={src}
                  alt="Wedding Showcase"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Wedding Videos Section */}
        <div className="mb-4">
          <h3 className="mb-3">Indian Wedding Videos</h3>
          <p>
            Just like wedding photography, Indian Wedding Movies have
            transformed from simple coverage into thematic documentary style
            wedding films. Our wedding movies are simple stories that tell the
            tale of your wedding, filmed in our inimitable fun and off-beat
            style. Using the very latest and best technology available, our
            wedding films are tailor made for your big day and perfectly
            complement your wedding photos.
          </p>
        </div>

        {/* Video 1 */}
        <div className="row align-items-center mb-5" >
          <div className="col-12 col-md-6">
            <div style={{boxShadow:'10px 10px 20px'}} className="ratio ratio-16x9 shadow-lg rounded overflow-hidden" >
              <iframe
                src="https://www.youtube.com/embed/dF5XY1by5jQ"
                title="Wedding Film 1"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <p className="text-muted">
              A beautiful wedding film capturing the essence of an Indian
              wedding, showcasing the vibrant colors, joyful celebrations, and
              heartfelt moments shared by the couple and their loved ones.
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-12 col-md-6" >
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden" >
              <iframe
                
                src="https://www.youtube.com/embed/CGC1_bhypkU"
                title="Wedding Film 2"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <p className="text-muted">
              A beautiful wedding film capturing the essence of an Indian
              wedding, showcasing the vibrant colors, joyful celebrations, and
              heartfelt moments shared by the couple and their loved ones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
