import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
const Testimonials = ({ data }) => {
    const [visibleCards, setVisibleCards] = useState(new Set());
    const cardRefs = useRef([]);
    const defaultTestimonials = [
        {
            quote: "Switching to solar was the best decision for our home. The installation was seamless and our energy bills have dropped significantly.",
            name: "Sarah Johnson",
            title: "Homeowner",
            company: "San Diego, CA",
            rating: 5,
        },
        {
            quote: "Professional service from start to finish. The team was knowledgeable and the solar system works perfectly.",
            name: "Michael Chen",
            title: "Business Owner",
            company: "Los Angeles, CA",
            rating: 5,
        },
        {
            quote: "Amazing experience! Our solar panels are producing more energy than expected. Highly recommend their services.",
            name: "Emily Rodriguez",
            title: "Homeowner",
            company: "Phoenix, AZ",
            rating: 5,
        },
    ];
    const testimonials = (data?.testimonials?.length ? data.testimonials : defaultTestimonials);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setVisibleCards((prev) => new Set(prev).add(index));
                    }
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -80px 0px",
        });
        cardRefs.current.forEach((ref) => {
            if (ref)
                observer.observe(ref);
        });
        return () => observer.disconnect();
    }, [testimonials.length]);
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl sm:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-4", children: data?.testimonials_head || "What Our Clients Say" }), _jsx("p", { className: "text-lg sm:text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto", children: data?.testimonials_introduction || "Trusted by homeowners and businesses across the country" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8", children: testimonials.map((testimonial, index) => (_jsx("div", { ref: (el) => { cardRefs.current[index] = el; }, className: "group relative", style: {
                            opacity: visibleCards.has(index) ? 1 : 0,
                            transform: visibleCards.has(index)
                                ? "translateY(0) scale(1)"
                                : "translateY(40px) scale(0.95)",
                            transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                        }, children: _jsxs("div", { className: "relative h-full bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-yellow-400/30 dark:hover:border-yellow-500/30 overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" }), _jsx("div", { className: "relative mb-6", children: _jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500", children: _jsx(Quote, { className: "w-6 h-6 text-white" }) }) }), _jsx("div", { className: "flex mb-4", style: {
                                        opacity: visibleCards.has(index) ? 1 : 0,
                                        transform: visibleCards.has(index)
                                            ? "translateX(0)"
                                            : "translateX(-20px)",
                                        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.2}s`,
                                    }, children: [...Array(testimonial.rating || 5)].map((_, i) => (_jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-yellow-400 transform group-hover:scale-110 transition-transform duration-300", style: {
                                            transitionDelay: `${i * 50}ms`,
                                        } }, i))) }), _jsxs("blockquote", { className: "relative text-gray-700 dark:text-slate-300 mb-8 text-base leading-relaxed", style: {
                                        opacity: visibleCards.has(index) ? 1 : 0,
                                        transform: visibleCards.has(index)
                                            ? "translateY(0)"
                                            : "translateY(20px)",
                                        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.3}s`,
                                    }, children: ["\"", testimonial.quote, "\""] }), _jsxs("div", { className: "relative flex items-center", style: {
                                        opacity: visibleCards.has(index) ? 1 : 0,
                                        transform: visibleCards.has(index)
                                            ? "translateY(0)"
                                            : "translateY(20px)",
                                        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.4}s`,
                                    }, children: [_jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-500", children: testimonial.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("") }), _jsxs("div", { className: "ml-4", children: [_jsx("div", { className: "font-bold text-gray-900 dark:text-slate-100 text-lg", children: testimonial.name }), _jsx("div", { className: "text-gray-600 dark:text-slate-400 text-sm", children: testimonial.title }), _jsx("div", { className: "text-yellow-600 dark:text-yellow-400 text-sm font-medium", children: testimonial.company })] })] }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" })] }) }, index))) }), _jsx("div", { className: "text-center mt-16", children: _jsx("button", { className: "px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300", children: "Read More Reviews" }) })] }) }));
};
export default Testimonials;
