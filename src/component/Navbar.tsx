import { useState, useEffect } from "react";
import signmaryLogo from "@/assets/logo-light-full.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigatetoheader = () => {
    const headersection = document.getElementById("navigatetofirstscreen");
    if (headersection) {
      headersection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleblog = () => {
    console.log("Navigate to blog");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section - Improved spacing and alignment */}
          <div
            className="flex items-center group cursor-pointer"
            onClick={navigatetoheader}
          >
            <div className="relative">
              <div className="flex items-center space-x-3 px-2 py-1 rounded-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 group-hover:shadow-md">
                <div className="relative w-28 h-12 lg:w-32 lg:h-14 flex-shrink-0 bg-white rounded-lg shadow-md">
                  <div className="w-full h-full flex items-center justify-center p-1">
                    <img
                      src={signmaryLogo}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-blue-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
            </div>
          </div>

          {/* Desktop Menu - Improved spacing and typography */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <div className="flex items-center justify-center space-x-1">
              {[
                "Features",
                "Benefits",
                "Testimonials",
                "Pricing",
                "Contact",
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50/80 mx-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Better spacing and sizing */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={handleblog}
              className="relative px-5 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 bg-white border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">Blog</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>

            {/* Uncomment if needed
            <button
              onClick={() => navigate("/sign-up")}
              className="relative px-5 py-2 text-sm font-semibold text-blue-600 bg-white border border-blue-200 hover:border-blue-300 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-blue-100/50"
            >
              Sign Up
            </button>

            <button
              onClick={() => navigate("/sign-in")}
              className="relative px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                Login
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </button>
            */}
          </div>

          {/* Mobile Menu Button - Better positioning */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
            >
              <div className="relative w-6 h-6">
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 rounded-b-2xl shadow-xl">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {[
                "Features",
                "Benefits",
                "Methodology",
                "Pricing",
                "Contact",
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 border-l-2 border-transparent hover:border-blue-500 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </a>
              ))}

              <div className="pt-3 px-2 space-y-2">
                <button
                  onClick={handleblog}
                  className="w-full px-4 py-3 text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 border border-gray-200 hover:shadow-sm"
                >
                  Blog
                </button>
                {/* Uncomment if needed
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      navigate("/sign-up");
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 border border-blue-200"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => {
                      navigate("/sign-in");
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-1"
                  >
                    Login
                    <span>→</span>
                  </button>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
