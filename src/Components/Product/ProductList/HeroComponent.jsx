import React from "react";

const HeroComponent = () => {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('image.png')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-end md:items-end lg:items-end items-center p-4 md:p-8 text-white text-center md:text-right lg:text-right lg:mr-96">
        <h2 className="text-md md:text-lg font-medium">New Arrival</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Shop Chain</h1>
        <p className="max-w-xs md:max-w-sm mb-4 md:mb-6">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
        </p>
        <button className="px-4 md:px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
