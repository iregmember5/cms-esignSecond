import React, { useEffect, useRef, useState } from "react";
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  const footerSections = [
    {
      title: "Services",
      links: [
        "Residential Solar",
        "Commercial Solar",
        "Solar Financing",
        "Installation",
        "Maintenance",
        "Consultation",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Home Solar Panels",
        "Business Solutions",
        "Solar Battery Storage",
        "Roof Assessment",
        "Energy Monitoring",
        "System Design",
      ],
    },
    {
      title: "Resources",
      links: [
        "Solar Calculator",
        "Tax Credits",
        "FAQs",
        "Blog",
        "Case Studies",
        "Warranties",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Contact",
        "Locations",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        ref={footerRef}
        className="relative bg-gray-900 text-white overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Top Wave Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info */}
            <div
              className="lg:col-span-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  SolarPower
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading the clean energy revolution. Powering homes and businesses with sustainable solar solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">1-800-SOLAR-NOW</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">info@solarpower.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer group">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">California, USA</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      aria-label={social.label}
                      className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 hover:scale-110"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "scale(1)" : "scale(0)",
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.1}s`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + sectionIndex * 0.1}s`,
                }}
              >
                <h4 className="text-lg font-bold mb-4 text-white relative inline-block">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent" />
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + sectionIndex * 0.1 + linkIndex * 0.05
                          }s`,
                      }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-yellow-400 transition-colors text-sm group inline-flex items-center gap-2"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div
            className="border-t border-gray-800 pt-8 pb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
                <p className="text-gray-400 text-sm">
                  Get the latest updates on solar technology and special offers
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s",
            }}
          >
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 SolarPower. All rights reserved. | Empowering a sustainable future.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white rounded-full shadow-2xl hover:shadow-yellow-400/50 flex items-center justify-center transition-all duration-300 z-50 ${showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Footer;