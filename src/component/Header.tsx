import React from "react";
import { SectionProps } from "../component/types";
import { Zap, Activity, Wrench, TrendingUp } from "lucide-react";

// Header Component
const Header: React.FC<SectionProps> = ({ data, className = "" }) => {
  if (!data) {
    return <div>No data provided</div>;
  }

  const services = [
    {
      icon: Activity,
      title: data?.service_1_title || "Inverter Inspection",
    },
    {
      icon: Zap,
      title: data?.service_2_title || "Complete Diagnostics",
    },
    {
      icon: Wrench,
      title: data?.service_3_title || "Expert Solar Panel Repair",
    },
    {
      icon: TrendingUp,
      title: data?.service_4_title || "Updates & Monitoring",
    },
  ];

  return (
    <header
      className={`relative flex flex-col justify-between min-h-screen bg-cover bg-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg')`,
      }}
    >
      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
            {data?.header_title || "We're The Best"}
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            {data?.header_subtitle || "In Solar Energy"}
          </h2>

          {/* Attribution */}
          {data?.header_attribution && (
            <p className="text-white text-sm opacity-75">
              {data.header_attribution}
            </p>
          )}
        </div>
      </div>

      {/* Service Cards - bottom section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-yellow-500/90 backdrop-blur-sm p-8 text-center hover:bg-yellow-400/95 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;