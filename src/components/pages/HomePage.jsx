import React from "react";
import HeroSection from "../HeroSection";
import Navbar from "../Layout/Navbar/Navbar";
import GallerySection from "../GallerySection";

export default function HomePage() {
  return (
    <div className="absolute w-full h-screen bg-cover bg-center">
      <img
        src="/images/imgMain.png"
        alt="pic"
        className="absolute top-0 left-0 w-full h-full "
      />
      <Navbar />{" "}
      <div className="     justify-left px-5 md:px-12 xl:px-24 py-1 absolute top-0 left-12 right-0 z-10  mr-5">
        <HeroSection />
      </div>
      <div className="">
        

      {/* <GallerySection/> */}
      
      </div>
    </div>
  );
}
