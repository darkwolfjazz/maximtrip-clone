import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import './styling/Carousel.css'
import "swiper/css/navigation";

const slides = [
  {
    image: "/images/image4.jpg",
    title: "Kashmir A Frozen Dream Vacation",
    days: 8,
    nights: 7,
    price: 24199,
    oldPrice: 26198,
  },
  {
    image: "/images/image3.jpg",
    title: "Magical Kashmir Honeymoon Tour",
    days: 6,
    nights: 5,
    price: 18999,
    oldPrice: 20999,
  },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={true}
      loop={true}
      className="w-full h-[600px] md:h-[90vh]" // Increased height, responsive
    >
      {slides.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-30 p-4 text-center">
              <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
              <div className="text-2xl mb-2 border-b border-dashed pb-1">
                {item.days} Days / {item.nights} Nights
              </div>
              <div className="text-xl font-bold mb-2">
                <span>₹{item.price.toLocaleString()}</span>
                <span className="text-base line-through ml-2 text-gray-300">
                  ₹{item.oldPrice.toLocaleString()}
                </span>
              </div>
              <button className="bg-red-500 text-white font-bold px-6 py-3 rounded mt-4 hover:bg-red-600 transition">
                CONNECT WITH AN EXPERT
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
