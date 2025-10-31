import React from "react";
import { SectionProps, FeatureItem } from "../component/types";

// Features Component
const Features: React.FC<SectionProps> = ({ data }) => {
  const defaultFeatures: FeatureItem[] = [
    {
      title: "Solar Financing",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      background: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      textColor: "text-white",
    },
    {
      title: "Commercial",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Image from Freepik",
      background: "bg-cover bg-center",
      backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      textColor: "text-white",
    },
    {
      title: "Design & Permits",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      background: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Inspection & Install",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      background: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      textColor: "text-white",
    },
  ];

  const features = data?.features?.length ? data.features : defaultFeatures;

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4">
            {data?.features_head || "Power Your Home With Solar"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature: FeatureItem, index: number) => (
            <div
              key={index}
              className={`group relative overflow-hidden min-h-[400px] flex flex-col justify-between p-10 transition-all duration-300 hover:scale-[1.02] ${feature.background
                }`}
              style={
                feature.backgroundImage
                  ? {
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('${feature.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                  : undefined
              }
            >
              <div>
                <h3
                  className={`text-3xl sm:text-4xl font-bold mb-6 ${feature.textColor}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-base sm:text-lg leading-relaxed mb-8 ${feature.textColor} opacity-90`}
                >
                  {feature.description}
                </p>
              </div>

              <div>
                <button
                  className={`px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ${feature.textColor === "text-white"
                      ? "border-2 border-white text-white hover:bg-white hover:text-gray-900"
                      : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    }`}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;