import React from "react";

const tours = [
  {
    image: "/images/laddakh.jpg",
    title: "Valley Of Wonders",
    days: 4,
    nights: 3,
    location: "Kashmir",
    price: "Rs.12599",
  },
  {
    image: "/images/kashmir.jpg",
    title: "Kashmir A Frozen Dream Vacation",
    days: 8,
    nights: 7,
    location: "Kashmir",
    price: "Rs.24199",
  },
  {
    image: "/images/honeymoon.jpg",
    title: "Kashmir Escapes At Smart Prices",
    days: 7,
    nights: 6,
    location: "Kashmir",
    price: "Rs.14599",
  },
  {
    image: "/images/family.jpg",
    title: "Kashmir Unplugged",
    days: 6,
    nights: 5,
    location: "Kashmir",
    price: "Rs.16799",
  },
];

const ClockIcon = () => (
  <svg className="w-5 h-5 inline-block text-gray-500 mr-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5 inline-block text-gray-500 mr-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a3 3 0 11-6 0 3 3 0 016 0zm0 0c4.418 0 8 3.582 8 8 0 3.866-3.134 7-7 7s-7-3.134-7-7c0-4.418 3.582-8 8-8z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-6 h-6 text-red-500 bg-red-100 rounded-full p-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 
      a2 2 0 012-2h3a2 2 0 012 1.72c.13.82-.11 1.67-.74 2.3l-1.1 1.1
      c.71 1.25 1.61 2.42 2.68 3.49s2.24 1.97 3.49 2.68l1.1-1.1a2 2 0 
      012.3-.74A2 2 0 0122 13.92z"
    />
  </svg>
);

const TourCard = ({
  image,
  title,
  days,
  nights,
  location,
  price
}) => (
  <div className="flex flex-col bg-white rounded-[28px] shadow-md p-0 w-full h-full border transition-transform duration-300 hover:scale-105 cursor-pointer">
    {/* Image */}
    <img src={image} alt={title} className="w-full h-56 object-cover rounded-t-[28px]" />
    {/* Info */}
    <div className="flex flex-col flex-1 px-6 pt-4 pb-2">
      <h3 className="font-semibold text-lg mb-1 text-gray-900">{title}</h3>
      <div className="text-gray-700 mb-1 flex items-center gap-2">
        <ClockIcon />
        <span className="text-md">{days} Days / {nights} Nights</span>
      </div>
      <div className="text-gray-700 mb-3 flex items-center gap-2">
        <LocationIcon />
        <span className="text-md">{location}</span>
      </div>
    </div>
    <div className="flex items-center border border-red-500 rounded-md overflow-hidden h-12 mx-6 mb-3">
      <div className="w-1/2 flex items-center justify-center text-black-600 font-semibold text-base bg-white">
        {price}
      </div>
      <div className="border-l border-red-500 h-full" />
      <div className="w-1/2 flex items-center justify-center bg-white">
        <button className="w-full h-full text-black-600 font-semibold hover:bg-red-50 transition">View More</button>
      </div>
    </div>
    <div className="px-6 pb-6">
      <div className="flex items-center gap-2 w-full">
        <PhoneIcon />
        <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold text-base hover:bg-red-600 w-full flex items-center justify-center gap-2">
          Request Callback
        </button>
      </div>
    </div>
  </div>
);


const Arrow = ({ direction }) => (
  <div
    className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10 w-[54px] h-[54px] bg-white shadow-lg rounded-full items-center justify-center cursor-pointer"
    style={direction === "left" ? { left: -30 } : { right: -30 }}
  >
    <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  </div>
);

const TourCardsSection = () => (
<section className="pt-8 pb-10 relative bg-transparent">
      <div className="px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 flex items-end gap-2">
          <span className="text-red-800">Holiday</span>
          <span className="text-gray-800">Packages</span>
        </h2>
        <div className="w-28 h-[5px] bg-red-300 rounded-lg mb-10"></div>
        <div className="relative">
          <Arrow direction="left" />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, idx) => (
  <TourCard key={idx} {...tour} />
        ))}
          </div>
          <Arrow direction="right" />
        </div>
      </div>
    </section>
);

export default TourCardsSection;
