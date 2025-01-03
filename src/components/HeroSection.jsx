import React from "react";
import GallerySection from "./GallerySection";

const HeroSection = () => {
  return (
    <section className="  py-14">
      <div className=" w-1/2    ">
        <h1 className="text-6xl font-bold ">Home,</h1>
        <h2 className="text-4xl  mb-4">HAND-PAINTED GLOVES</h2>
        <p className="text-gray-500 mb-4">
          Your extraordinary accessories <br /> that boost your boxing
          performance.
        </p>
        <button className="bg-black text-white py-2 px-2 rounded-3xl hover:bg-gray-800 w-44">
          Shop Now
        </button>

        <div className="flex  mt-8">
          <div className="w-10 h-10  border-4 border-black rounded-full mr-3 flex items-center justify-center">
            01
          </div>
          <div className="w-10 h-10 border-4 border-black mr-3  rounded-full flex items-center justify-center">
            02
          </div>
          <div className="w-10 h-10  border-4 border-black mr-3 rounded-full flex items-center justify-center mb-11">
            03
          </div>
        </div>
      </div>
      <GallerySection />
    </section>
  );
};

export default HeroSection;
