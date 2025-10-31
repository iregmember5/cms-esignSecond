import React, { useEffect, useRef, useState } from "react";
import type { SectionProps } from "../component/types";
import { ArrowRight, Zap, Sun } from "lucide-react";

const CTA: React.FC<SectionProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            opacity: isVisible ? 0.3 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "all 1.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            opacity: isVisible ? 0.3 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "all 1.5s ease-out 0.3s",
            animationDelay: "1s",
          }}
        />

        {/* Solar Panel Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-4 p-8">
            {[...Array(96)].map((_, i) => (
              <div
                key={i}
                className="border border-yellow-400/30"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.5s ease-out ${i * 0.01}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.8)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-50 animate-pulse" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
              <Sun className="w-10 h-10 text-white animate-spin" style={{ animationDuration: "20s" }} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          {data?.cta_head || (
            <>
              Ready to Go Solar?
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Start Saving Today
              </span>
            </>
          )}
        </h2>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
          }}
        >
          {data?.cta_introduction ||
            "Join thousands of homeowners and businesses reducing their carbon footprint and energy costs with clean solar power"}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
          }}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden">
            <span className="relative z-10 flex items-center">
              {data?.cta_primary_text || "Get Free Quote"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
            {data?.cta_secondary_text || "Schedule Consultation"}
            <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>{data?.cta_trust_1 || "Free Site Assessment"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
            <span>{data?.cta_trust_2 || "25-Year Warranty"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
            <span>{data?.cta_trust_3 || "Financing Available"}</span>
          </div>
        </div>

        {/* Bottom Badge */}
        <div
          className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.9)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s",
          }}
        >
          <Zap className="w-4 h-4 text-yellow-400" />
          {data?.cta_offer || "Limited Time: 30% Federal Tax Credit Available"}
        </div>
      </div>
    </section>
  );
};

export default CTA;