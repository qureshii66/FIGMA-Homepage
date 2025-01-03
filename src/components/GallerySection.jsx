// import React from "react";

// const GallerySection = () => {
//   return (
//     <section className="my-12">
//       <div className="flex justify-center space-x-6 mx-4 md:mx-36">
//         {/* Left Section: Larger Images */}
//         <div className="flex space-x-4">
//           <img
//             src="/images/imgMain.png"
//             alt="Image 1"
//             className="w-64 h-64 object-cover shadow-lg hover:scale-105 transition-transform"
//           />
//           <img
//             src="/images/imgMain.png"
//             alt="Image 2"
//             className="w-64 h-64 object-cover shadow-lg hover:scale-105 transition-transform"
//           />
//         </div>

//         {/* Right Section: Smaller Images */}
//         <div className="flex flex-col space-y-4">
//           <img
//             src="/images/imgMain.png"
//             alt="Image 3"
//             className="w-32 h-32 object-cover shadow-lg hover:scale-105 transition-transform"
//           />
//           <img
//             src="/images/imgMain.png"
//             alt="Image 4"
//             className="w-32 h-32 object-cover shadow-lg hover:scale-105 transition-transform"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;

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
