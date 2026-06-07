// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
//           Create amazing content <br /> with{" "}
//           <span className="text-primary">AI tools</span>
//         </h1>
//         <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
//           Transform your content creation with our suite of premium AI tools.
//           Write articles, generate images, and enhance workflow.
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
//         <button
//           onClick={() => navigate("/ai")}
//           className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
//         >
//           Start creating now
//         </button>
//         <button className="bg-white px-10 py-3 rounded-lg border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer">
//           Watch demo
//         </button>
//       </div>

//       <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
//         <img src={assets.user_group} alt="" className="h-8" />
//         Trusted by 10k+ people
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content <br /> with{" "}
          <span className="text-primary">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance workflow.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button
          onClick={() =>
            navigate("https://youtu.be/RkYIWg5XAnI?si=-zenXhNNXqhS_9XV")
          }
          className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Watch demo
        </button>
      </div>

      {/* Trust Section */}
      <div className="flex items-center justify-center mt-10 divide-x divide-gray-300">
        <div className="flex -space-x-3 pr-3">
          {[
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://randomuser.me/api/portraits/men/75.jpg",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="user"
              className={`w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[${
                idx + 1
              }]`}
            />
          ))}
        </div>
        <div className="pl-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#FACC15"
                stroke="#FACC15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            ))}
            <p className="text-gray-600 font-medium ml-2">5.0</p>
          </div>
          <p className="text-sm text-gray-500">
            Trusted by{" "}
            <span className="font-medium text-gray-800">100,000+</span> users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
