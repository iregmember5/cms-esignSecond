import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const footerRef = useRef(null);
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });
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
    return (_jsxs(_Fragment, { children: [_jsxs("footer", { ref: footerRef, className: "relative bg-gray-900 text-white overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 opacity-5", children: [_jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-pulse", style: { animationDelay: "1s" } })] }), _jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" }), _jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12", children: [_jsxs("div", { className: "lg:col-span-1", style: {
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? "translateY(0)" : "translateY(30px)",
                                            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                                        }, children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg", children: _jsx(Sun, { className: "w-6 h-6 text-white" }) }), _jsx("div", { className: "text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent", children: "SolarPower" })] }), _jsx("p", { className: "text-gray-400 mb-6 leading-relaxed", children: "Leading the clean energy revolution. Powering homes and businesses with sustainable solar solutions." }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsxs("div", { className: "flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer group", children: [_jsx(Phone, { className: "w-4 h-4 group-hover:scale-110 transition-transform" }), _jsx("span", { className: "text-sm", children: "1-800-SOLAR-NOW" })] }), _jsxs("div", { className: "flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer group", children: [_jsx(Mail, { className: "w-4 h-4 group-hover:scale-110 transition-transform" }), _jsx("span", { className: "text-sm", children: "info@solarpower.com" })] }), _jsxs("div", { className: "flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer group", children: [_jsx(MapPin, { className: "w-4 h-4 group-hover:scale-110 transition-transform" }), _jsx("span", { className: "text-sm", children: "California, USA" })] })] }), _jsx("div", { className: "flex gap-3", children: [
                                                    { icon: Facebook, label: "Facebook" },
                                                    { icon: Twitter, label: "Twitter" },
                                                    { icon: Instagram, label: "Instagram" },
                                                    { icon: Linkedin, label: "LinkedIn" },
                                                ].map((social, index) => {
                                                    const Icon = social.icon;
                                                    return (_jsx("button", { "aria-label": social.label, className: "group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 hover:scale-110", style: {
                                                            opacity: isVisible ? 1 : 0,
                                                            transform: isVisible ? "scale(1)" : "scale(0)",
                                                            transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.1}s`,
                                                        }, children: _jsx(Icon, { className: "w-5 h-5 text-gray-400 group-hover:text-white transition-colors" }) }, index));
                                                }) })] }), footerSections.map((section, sectionIndex) => (_jsxs("div", { style: {
                                            opacity: isVisible ? 1 : 0,
                                            transform: isVisible ? "translateY(0)" : "translateY(30px)",
                                            transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + sectionIndex * 0.1}s`,
                                        }, children: [_jsxs("h4", { className: "text-lg font-bold mb-4 text-white relative inline-block", children: [section.title, _jsx("div", { className: "absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent" })] }), _jsx("ul", { className: "space-y-3", children: section.links.map((link, linkIndex) => (_jsx("li", { style: {
                                                        opacity: isVisible ? 1 : 0,
                                                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                                                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + sectionIndex * 0.1 + linkIndex * 0.05}s`,
                                                    }, children: _jsxs("a", { href: "#", className: "text-gray-400 hover:text-yellow-400 transition-colors text-sm group inline-flex items-center gap-2", children: [_jsx("span", { className: "w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300" }), link] }) }, linkIndex))) })] }, sectionIndex)))] }), _jsx("div", { className: "border-t border-gray-800 pt-8 pb-8", style: {
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
                                }, children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [_jsxs("div", { className: "text-center md:text-left", children: [_jsx("h3", { className: "text-xl font-bold mb-2", children: "Stay Connected" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Get the latest updates on solar technology and special offers" })] }), _jsxs("div", { className: "flex gap-2 w-full md:w-auto", children: [_jsx("input", { type: "email", placeholder: "Enter your email", className: "flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors" }), _jsx("button", { className: "px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300", children: "Subscribe" })] })] }) }), _jsxs("div", { className: "border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4", style: {
                                    opacity: isVisible ? 1 : 0,
                                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s",
                                }, children: [_jsx("div", { className: "text-gray-400 text-sm text-center md:text-left", children: "\u00A9 2025 SolarPower. All rights reserved. | Empowering a sustainable future." }), _jsx("div", { className: "flex flex-wrap justify-center gap-6", children: ["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (_jsx("a", { href: "#", className: "text-gray-400 hover:text-yellow-400 text-sm transition-colors", children: link }, index))) })] })] })] }), _jsx("button", { onClick: scrollToTop, className: `fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white rounded-full shadow-2xl hover:shadow-yellow-400/50 flex items-center justify-center transition-all duration-300 z-50 ${showScrollTop
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20 pointer-events-none"}`, "aria-label": "Scroll to top", children: _jsx(ArrowUp, { className: "w-6 h-6" }) })] }));
};
export default Footer;
