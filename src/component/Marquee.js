import { jsx as _jsx } from "react/jsx-runtime";
const Marquee = () => {
    const marqueeItems = [
        "🔐 Bank-level security with full audit trail",
        "⚡ Fast, automated signing workflow",
        "📦 Drag-and-drop document assembly",
        "🤝 Perfect for remote collaboration",
        "🔗 Zapier & Google Drive Integrations",
        "📈 Dashboard for team tracking and insights",
    ];
    return (_jsx("section", { className: "bg-blue-50 py-4 overflow-hidden", children: _jsx("div", { className: "whitespace-nowrap", children: _jsx("div", { className: "inline-block animate-scrollMarquee", children: marqueeItems.map((item, index) => (_jsx("span", { className: "inline-block mx-8 text-xl text-gray-500 font-medium", children: item }, index))) }) }) }));
};
export default Marquee;
