import React from "react";

const albums = [
  {
    title: "Romantic Moments",
    image: "https://img.freepik.com/free-photo/beautiful-wedding-couple-outdoors_1157-18526.jpg",
  },
  {
    title: "Traditional Wedding",
    image: "https://img.freepik.com/free-photo/indian-bride-groom-traditional-dress_1303-17539.jpg",
  },
  {
    title: "Engagement Highlights",
    image: "https://img.freepik.com/free-photo/close-up-hands-with-engagement-ring_23-2148643470.jpg",
  },
  {
    title: "Candid Memories",
    image: "https://img.freepik.com/free-photo/beautiful-couple-smiling-outdoors_1157-18527.jpg",
  },
  {
    title: "Outdoor Shoots",
    image: "https://img.freepik.com/free-photo/wedding-couple-holding-hands_1157-18521.jpg",
  },
  {
    title: "Reception Night",
    image: "https://img.freepik.com/free-photo/bride-groom-celebrating-reception_1157-18487.jpg",
  },
];

const AlbumsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 via-white to-pink-100" id="albums">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Wedding Albums</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse of beautiful love stories we've captured — every frame tells a story of happiness and forever.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                  {album.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumsSection;
