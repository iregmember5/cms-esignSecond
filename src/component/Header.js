import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Zap, Activity, Wrench, TrendingUp } from "lucide-react";
// Header Component
const Header = ({ data, className = "" }) => {
    if (!data) {
        return _jsx("div", { children: "No data provided" });
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
    return (_jsxs("header", { className: `relative flex flex-col justify-between min-h-screen bg-cover bg-center overflow-hidden ${className}`, style: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80')`,
        }, children: [_jsx("div", { className: "flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsx("h1", { className: "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight tracking-tight", children: data?.header_title || "We're The Best" }), _jsx("h2", { className: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tight", children: data?.header_subtitle || "In Solar Energy" }), data?.header_attribution && (_jsx("p", { className: "text-white text-sm opacity-75", children: data.header_attribution }))] }) }), _jsx("div", { className: "relative z-10 px-4 sm:px-6 lg:px-8 pb-12", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (_jsxs("div", { className: "bg-yellow-500/90 backdrop-blur-sm p-8 text-center hover:bg-yellow-400/95 transition-all duration-300 hover:scale-105 cursor-pointer group", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx(IconComponent, { className: "w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" }) }), _jsx("h3", { className: "text-white font-semibold text-lg leading-tight", children: service.title })] }, index));
                        }) }) }) })] }));
};
export default Header;
