import React, { useEffect, useRef, useState } from "react";
import type { SectionProps, BenefitItem } from "../component/types";

// Benefits Component
const Benefits: React.FC<SectionProps> = ({ data }) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const defaultBenefits: BenefitItem[] = [
    {
      title: "Cost Savings",
      description: "Ut enim ad minim veniam",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      icon: ""
    },
    {
      title: "Increase Home Value",
      description: "Ut enim ad minim veniam",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
      icon: ""
    },
    {
      title: "Solar Works Everywhere",
      description: "Ut enim ad minim veniam",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      icon: ""
    },
  ];

  const benefits = data?.benefits?.length ? data.benefits : defaultBenefits;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [benefits.length]);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {data?.benefits_head || "Installing Benefits"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {data?.benefits_introduction ||
              "Harnessing energy from the sun and converting it to clean energy to power your home — or even a car — reduces your carbon footprint and saves on energy costs for years to come."}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit: BenefitItem, index: number) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="relative overflow-hidden group cursor-pointer h-[400px] sm:h-[500px]"
              style={{
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index)
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${benefit.image}')`,
                }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div
                  style={{
                    opacity: visibleCards.has(index) ? 1 : 0,
                    transform: visibleCards.has(index)
                      ? "translateY(0)"
                      : "translateY(30px)",
                    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2 + 0.3
                      }s`,
                  }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-x-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 text-base sm:text-lg transform transition-all duration-300 group-hover:translate-x-2">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-12 h-0.5 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;