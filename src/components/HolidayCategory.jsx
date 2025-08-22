import React from "react";

const cards = [
  {
    category: "TOUR PACKAGES",
    title: "LEH LADAKH",
    image: "/images/laddakh.jpg",
    subtitle: "Escape to the serene cold desert of Ladakh with our exclusive Leh Ladakh Tour Packages",
    label: "Leh Ladakh Tour Packages",
  },
  {
    category: "TOUR PACKAGES",
    title: "KASHMIR",
    image: "/images/kashmir.jpg",
    subtitle: "Snowy peaks, houseboats, and pure serenity! Kashmir is calling!",
    label: "Kashmir Tour Packages",
  },
  {
    category: "HONEYMOON PACKAGES",
    title: "KASHMIR",
    image: "/images/honeymoon.jpg",
    subtitle: "Romantic Experiences with your loved one's with our Kashmir Honeymoon Packages",
    label: "Kashmir Honeymoon Packages",
  },
  {
    category: "FAMILY TOUR PACKAGES",
    title: "KASHMIR",
    image: "/images/family.jpg",
    subtitle: "Kashmir being one of the top tourist destination of world is a perfect place to visit with your family",
    label: "Kashmir Family Tour Packages",
  },
];

const PhoneIcon = () => (
  <svg
    className="w-8 h-8 text-red-500 bg-red-100 rounded-full p-1"
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

const HolidayCard = ({ card }) => (
  <div className="flex flex-col bg-white rounded-[28px] shadow-md p-2 w-full max-w-sm mx-auto transform transition duration-300 hover:scale-105 cursor-pointer">
    <div className="rounded-[20px] overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white flex flex-col items-center p-4">
      <span className="text-xs md:text-sm font-bold uppercase text-pink-600 tracking-wider mb-1">{card.category}</span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mt-1 mb-2">{card.title}</h2>
     <img src={card.image} alt={card.title} className="rounded-md mb-3 w-full object-contain shadow" style={{ aspectRatio: "16/9" }} />
      <div className="text-center text-sm font-medium text-gray-800">{card.subtitle}</div>
    </div>
    <div className="p-4 flex flex-col items-center">
      <h3 className="font-semibold text-lg mb-3 text-gray-800">{card.label}</h3>
      <div className="flex flex-row items-center gap-3 w-full justify-center">
        <PhoneIcon />
        <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold text-base hover:bg-red-600 transition w-full">
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

const HolidayCategory = () => {
  return (
    <section className="pt-8 pb-10 relative bg-transparent">
      <div className="px-6">
     <h2 className="text-3xl md:text-4xl font-bold mb-1 flex items-end gap-2">
        <span className="text-red-800">Holiday</span>
        <span className="text-gray-800">Category</span>
      </h2>
        <div className="w-28 h-[5px] bg-red-300 rounded-lg mb-10"></div>
        <div className="relative">
          <Arrow direction="left" />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <HolidayCard card={card} key={idx} />
            ))}
          </div>
          <Arrow direction="right" />
        </div>
      </div>
    </section>
  );
};

export default HolidayCategory;
