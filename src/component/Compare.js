import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const Compare = () => {
    const features = [
        {
            label: "📄 Tax Returns",
            essential: true,
            preferred: true,
            premium: true,
        },
        {
            label: "✍️ eSignatures",
            essential: true,
            preferred: true,
            premium: true,
        },
        { label: "⏳ Extensions", essential: true, preferred: true, premium: true },
        {
            label: "😊 Client Experience",
            essential: true,
            preferred: true,
            premium: true,
        },
        {
            label: "🔗 Integrations",
            essential: false,
            preferred: true,
            premium: true,
        },
        {
            label: "📞 Customer Support",
            essential: false,
            preferred: true,
            premium: true,
        },
        {
            label: "🗂️ Organizers",
            essential: false,
            preferred: true,
            premium: true,
        },
        {
            label: "🔒 Secure File Transfer",
            essential: false,
            preferred: false,
            premium: true,
        },
        {
            label: "📋 Document Request Lists",
            essential: false,
            preferred: false,
            premium: true,
        },
        {
            label: "📌 TicTie Calculate PDF Tool",
            essential: false,
            preferred: false,
            premium: true,
        },
        {
            label: "🤖 Next Gen Gather AI",
            essential: false,
            preferred: false,
            premium: true,
        },
        {
            label: "⚙️ API Connections",
            essential: false,
            preferred: false,
            premium: true,
        },
    ];
    return (_jsxs("section", { className: "py-16 px-4 bg-gradient-to-r from-blue-100 to-white text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-blue-800 mb-2", children: "What\u2019s Included" }), _jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Straightforward and simple pricing packages to address your firm\u2019s needs" }), _jsxs("div", { className: "grid grid-cols-4 max-w-4xl mx-auto border border-gray-200 rounded-lg overflow-hidden animate-fadeIn", children: [_jsx("div", { className: "bg-blue-800 text-white font-bold p-4 border-b border-gray-300", children: "Features" }), _jsx("div", { className: "bg-blue-800 text-white font-bold p-4 border-b border-gray-300", children: "Essential" }), _jsx("div", { className: "bg-blue-800 text-white font-bold p-4 border-b border-gray-300", children: "Preferred" }), _jsx("div", { className: "bg-blue-800 text-white font-bold p-4 border-b border-gray-300", children: "Premium" }), features.map((feature, index) => (_jsxs(React.Fragment, { children: [_jsx("div", { className: "text-left font-medium text-blue-700 bg-blue-50 p-4 border-b border-gray-200", children: feature.label }), _jsx("div", { className: "p-4 border-b border-gray-200", children: feature.essential ? "✅" : "" }), _jsx("div", { className: "p-4 border-b border-gray-200", children: feature.preferred ? "✅" : "" }), _jsx("div", { className: "p-4 border-b border-gray-200", children: feature.premium ? "✅" : "" })] }, index)))] }), _jsx("div", { className: "mt-8", children: _jsx("button", { className: "bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition animate-pulse", children: "Contact Our Sales Team" }) })] }));
};
export default Compare;
