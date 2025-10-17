// Hardcoded Header component
// import { Play } from "lucide-react";

// import {  Zap } from "lucide-react";

// const Header = ({ className = "" }) => {
//   // const NavigatetoHero = () => {
//   //   // Scroll to hero section smoothly
//   //   const heroSection = document.getElementById("methodology");
//   //   if (heroSection) {
//   //     heroSection.scrollIntoView({
//   //       behavior: "smooth",
//   //       block: "start",
//   //     });
//   //   }
//   // };

//   // const RendertoSignUp = () => {
//   //   window.location.href = "/sign-In";
//   // };

//   return (
//     <header id="navigatetofirstscreen"
//     className={`relative  flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16
//      overflow-hidden ${className}`}>
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="max-w-4xl mx-auto">
//           {/* Badge */}
//           <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
//             <span className="mr-2 text-blue-600"><Zap /></span>
//             #1 eSignature Solution for Tax & Legal Firms
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
//             Send. Sign. Track.{" "}
//             <span className="bg-blue-600  bg-clip-text text-transparent flex justify-center items-center">
//               Automate.
//               <span className="text-yellow-400 text-2xl"><Zap /></span>
//             </span>

//           </h1>

//           <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
//             Your complete e-signature workflow with automation, AI, and secure
//             delivery. Trusted by 70% of top tax & legal firms.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
//             {/* <button
//               onClick={NavigatetoHero}
//               className="gap-2 text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white active:bg-secondary  px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center"
//             >
//               <span className=" text-2xl hover:text-white"><Play /></span>
//               Get Started
//               <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
//             </button>
//             <button
//               onClick={RendertoSignUp}
//               className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center"
//             >
//               <span className="text-green-600 text-2xl">💳</span>
//               Login to My Signmary
//             </button> */}
//           </div>

//           {/* Trust Badges */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header Component

import { Zap } from "lucide-react";

const Header = ({ data }) => {
  if (!data) return null;

  // Split subtitle into words safely
  const words = data.header_subtitle?.split(" ") || [];

  return (
    <header className="relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Zap className="mr-2 w-4 h-4 text-blue-600" />
            {data.header_title}
          </div>

          {/* Dynamic Highlight for 3rd word */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
            {words.map((word, index) => {
              // Highlight the 3rd word (index 2)
              if (index === 3) {
                return (
                  <span
                    key={index}
                    className="bg-blue-600 bg-clip-text text-transparent inline-flex justify-center items-center"
                  >
                    {word}
                    <span className="text-yellow-400 text-2xl ml-1">
                      <Zap />
                    </span>{" "}
                  </span>
                );
              }
              return word + " ";
            })}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.header_description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center">
              {data.header_cta_primary}
              <span className="ml-2">→</span>
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              {data.header_cta_secondary}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
