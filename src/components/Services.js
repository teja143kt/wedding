import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Engagement",
      description:
        "Love begins with a promise, and we capture that promise in every frame. From shy smiles to joyful laughter, every glance tells your unique story. Our lens turns your special day into timeless memories filled with warmth and emotion. We don’t just take photos — we preserve the feeling of “forever begins here.” Let us frame your first step toward a lifetime of love and togetherness.",
      amount: "₹25,000",
      img: "https://wallpapers.com/images/hd/traditional-beautiful-engagement-couple-ring-7o6kh4dv11dsf0dp.jpg",
      bg: "transparent",
    },
    {
      title: "Puja",
      description:
        "Every sacred ritual holds a story of faith, love, and togetherness. We capture the divine glow of every blessing, the soft smiles during prayers, and the heartfelt traditions that begin your wedding journey. Each frame reflects the purity of your bond and the warmth of your family’s love. Let us preserve these timeless moments of devotion beautifully.",
      amount: "₹15,000",
      img: "https://vedicbridge.com/wp-content/uploads/2025/08/Marriage-puja.jpg",
      bg: "rgba(234, 175, 115, 0.17)",
    },
    {
      title: "Haldi",
      description:
        "Golden hues, laughter, and love fill the air as we capture the joy of this vibrant ritual. Every splash of turmeric tells a story of tradition and togetherness. From playful moments to emotional smiles, we freeze the essence of purity and happiness. Our lens celebrates the glow of love, family, and new beginnings. Let every Haldi frame radiate the warmth of your wedding journey.",
      amount: "₹20,000",
      img: "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_640.jpg",
      bg: "transparent",
    },
    {
      title: "Marriage",
      description:
        "A wedding is not just a day — it’s a story of love, emotion, and unforgettable moments. We capture every smile, tear, and touch that defines your special day. Each photograph reflects the beauty of your bond and the joy of togetherness. Our passion is to turn your wedding memories into timeless art. Let us frame your love story — beautifully and forever.",
      amount: "₹35,000",
      img: "https://i.pinimg.com/originals/e9/ca/ce/e9cacec403a326ed5a0554d0bb5da76d.jpg",
      bg: "rgba(234, 175, 115, 0.17)",
    },
    {
      title: "Griha Pravesh",
      description:
        "Stepping into a new home marks the beginning of countless cherished memories. We capture the warmth, traditions, and smiles that fill every corner of your special day. From sacred rituals to joyful laughter, every frame tells the story of new beginnings. Let us preserve the love and blessings that make your Griha Pravesh truly unforgettable.",
      amount: "₹15,000",
      img: "https://www.utsavpedia.com/wp-content/uploads/2014/10/entering-the-new-house.jpg",
      bg: "transparent",
    },
    {
      title: "Reception",
      description:
        "The reception is where joy truly overflows — laughter, dance, and heartfelt emotions come alive. We capture the sparkle of every smile and the rhythm of every celebration. From candid cheers to elegant portraits, each frame reflects the beauty of your union. Our lens tells the story of love, light, and lasting memories that begin anew. Let your grand celebration shine forever through our timeless photographs.",
      amount: "₹30,000",
      img: "https://i.pinimg.com/736x/d6/1f/b4/d61fb4989cc5ffc25f94734ef2aaa8be.jpg",
      bg: "rgba(234, 175, 115, 0.17)",
    },
  ];

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2
          className="fw-bold"
          style={{
            color: "rgb(221 128 33 / 90%)",
            fontFamily: "Times New Roman",
            fontSize: "40px",
            marginTop: "60px",
          }}
        >
          Services
        </h2>
        <p
          className="lead mx-auto"
          style={{ maxWidth: "900px", fontSize: "20px", lineHeight: "1.6" }}
        >
          We offer a complete range of wedding photography and cinematography
          services to capture every precious moment. From pre-wedding shoots to
          grand receptions, our team ensures every detail shines beautifully. We
          specialize in candid, traditional, and cinematic styles that reflect
          genuine emotions and timeless elegance. Each photograph is carefully
          crafted to tell your unique love story with creativity and passion.
          With us, your memories aren’t just captured — they’re artistically
          preserved for a lifetime.
        </p>
      </div>

      {/* Services Section */}
      <div className="row g-5">
        {services.map((service, index) => (
          <div key={index} className="col-md-12 col-md-6">
            <div
              className="p-4 rounded-4 shadow d-flex flex-column flex-lg-row align-items-center"
              style={{ background: service.bg }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="img-fluid rounded-4 shadow mb-3 mb-lg-0 me-lg-4"
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div className="text-center text-lg-start">
                <h3
                  className="fw-bold"
                  style={{
                    color: "rgb(221 128 33 / 90%)",
                    fontFamily: "Times New Roman",
                  }}
                >
                  {service.title}
                </h3>
                <p className="mt-3" style={{ fontSize: "16px" }}>
                  {service.description}
                </p>
                <p
                  className="fs-5 mt-3"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  Amount:{" "}
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      color: "rgb(221 128 33 / 90%)",
                    }}
                  >
                    {service.amount}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
