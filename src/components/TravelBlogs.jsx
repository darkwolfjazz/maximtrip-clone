import React from 'react'

const destinations = [
  {
    image: "/images/laddakh.jpg",
    title: "Places to Visit in Sonmarg",
  },
  {
    image: "/images/image1.webp",
    title: "Places to Visit in Gulmarg",
  },
  {
    image: "/images/family.jpg",
    title: "Places To Visit In Doodhpathri",
  },
  {
    image: "/images/kashmir.jpg",
    title: "Places to Visit In Srinagar",
  },
];

const Arrow = ({ direction }) => (
  <div
    className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center cursor-pointer"
    style={direction === "left" ? { left: -24 } : { right: -24 }}
  >
    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      {direction === "left"
        ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
    </svg>
  </div>
);

const DestinationCard = ({ image, title }) => (
  <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden">
    <img src={image} alt={title} className="object-cover w-full h-full absolute inset-0" />
    <div className="absolute bottom-0 left-0 w-full pb-6 flex items-end justify-center">
      <span
        className="text-white font-bold text-lg md:text-xl px-4 py-2 text-center w-full"
        style={{
          textShadow: "0 2px 12px rgba(0,0,0,0.6), 0 0 1px white",
        }}
      >
        {title}
      </span>
    </div>
  </div>
);
const TravelBlogs = () => {
  return (
   <section className="py-8 bg-gray-50">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-6 lg:px-8 max-w-full mx-auto mb-6">
       <h2 className="text-3xl md:text-4xl font-bold mb-1 flex items-end gap-2">
        <span className="text-red-800 underline decoration-red-400 decoration-4 underline-offset-10" >Travel</span>
        <span className="text-gray-800">Blogs</span>
      </h2>
      <a
        href="#"
        className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-2 md:mt-0"
      >
        View All Blogs
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    <div className="relative">
      <Arrow direction="left" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto">
        {destinations.map((d, i) => (
          <DestinationCard key={i} image={d.image} title={d.title} />
        ))}
      </div>
      <Arrow direction="right" />
    </div>
  </section>
  )
}

export default TravelBlogs
