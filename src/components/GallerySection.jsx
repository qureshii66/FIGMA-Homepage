

import React from "react";

const GallerySection = () => {
  return (
    <section className="my-12">
      <div className="flex flex-row justify-between  mx-12">
        <div className="flex space-x-4">
          <img
            src="/images/imgMain.png"
            alt="Image 1"
            className="w-32 h-32 shadow-lg hover:scale-105 "
          />
          <img
            src="/images/imgMain.png"
            alt="Image 2"
            className="w-32 h-32 shadow-lg hover:scale-105 "
          />
        </div>

        <div className="flex space-x-4 ml-36">
          <img
            src="/images/imgMain.png"
            alt="Image 3"
            className="w-32 h-32 shadow-lg hover:scale-105 "
          />
          <img
            src="/images/imgMain.png"
            alt="Image 4"
            className="w-32 h-32 shadow-lg hover:scale-105 "
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
