import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Albums() {
  const images = [
    "https://t3.ftcdn.net/jpg/04/72/21/72/360_F_472217215_wKbTd8wwwu8vxixhCGiXKKhUEQ9qbdbn.jpg",
    "https://cdn.pixabay.com/photo/2019/11/10/11/13/happy-valentines-day-4615557_640.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-3-768x768.jpg",
    "https://images.pexels.com/photos/12153938/pexels-photo-12153938.jpeg",
    "https://wallpapers.com/images/hd/traditional-beautiful-engagement-couple-ring-7o6kh4dv11dsf0dp.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-14-768x768.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-20-768x768.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-19-768x768.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-16-768x768.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-12-768x768.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-18-768x768.jpg",
    "https://arjunkarthaphotography.com/wp-content/uploads/2021/08/Twogether-Studios-Showcase-Home-2021-17-768x768.jpg",
    "https://i.pinimg.com/736x/01/8f/a8/018fa843f526995569b8955f410e4872.jpg",
    "https://img.freepik.com/premium-photo/indian-traditional-wedding-ceremony-decorative-puja-thali_54391-1944.jpg",
    "https://img.freepik.com/premium-photo/indian-wedding-bridel-enter-first-time-home-griha-pravesh-means-house-warming-ceremony_898049-146.jpg",
  ];

  return (
    <div className="container my-5 text-center">
      {/* Title */}
      <h2
        className="fw-bold"
        style={{
          color: 'rgb(221 128 33 / 90%)',
          fontFamily: 'Times New Roman',
          fontSize: '40px',
          marginTop: '100px',
        }}
      >
        Albums
      </h2>

      {/* Description */}
      <p className="lead mx-auto mt-4" style={{ maxWidth: '900px', fontSize: '18px' }}>
        We value everything that our clients stand for, and we take pride in the fact that we are
        trusted by our clients time and again for their Wedding Photography. We are acclaimed in
        Candid Wedding Photography as we would even climb a mountain to make our clients happy. And
        if you are still reading this, our team of expert wedding photographers is looking forward
        to a happy and productive collaboration with you!
      </p>

      {/* Responsive Grid */}
      <div className="row g-4 mt-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <div
              className="overflow-hidden rounded-3"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: '250px',
                transition: 'transform 0.4s ease',
              }}
            >
              <img
                src={src}
                alt={`Album ${index + 1}`}
                className="img-fluid rounded-3"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
