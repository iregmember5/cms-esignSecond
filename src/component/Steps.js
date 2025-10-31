import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Steps = () => {
    const steps = [
        { title: 'Gather', image: 'path_to_your_image' },
        { title: 'Connect', image: 'path_to_your_image' },
        { title: 'Preparation', image: 'path_to_your_image' },
        { title: 'Delivery', image: 'path_to_your_image' },
    ];
    return (_jsxs("section", { className: "bg-blue-100 py-16 px-4 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-blue-800 mb-2", children: "Streamline Tax Returns in 4 Easy Steps" }), _jsx("p", { className: "text-xl text-gray-600 mb-12", children: "E-Sign One is the end-to-end solution for tax and accounting professionals" }), _jsxs("div", { className: "flex flex-wrap justify-between max-w-6xl mx-auto", children: [_jsxs("div", { className: "w-full md:w-1/2 text-left animate-fadeInLeft", children: [_jsx("h3", { className: "text-2xl font-bold text-blue-700 mb-4", children: "Automate Tax Intake" }), _jsxs("ul", { className: "list-disc pl-6 text-gray-600", children: [_jsx("li", { children: "Engagement Letters" }), _jsx("li", { children: "eSignatures" }), _jsx("li", { children: "Document Sourcing" }), _jsx("li", { children: "Client Document Request Lists" }), _jsx("li", { children: "Custom Questionnaires" }), _jsx("li", { children: "Real-Time Completion Tracking" })] })] }), _jsx("div", { className: "w-full md:w-1/2 overflow-hidden animate-fadeInRight", children: _jsx("div", { className: "flex gap-4 animate-slideImages", children: steps.map((step, index) => (_jsxs("div", { className: "min-w-xs bg-white p-4 rounded-lg shadow-lg text-center", children: [_jsx("h4", { className: "font-bold text-blue-800 mb-2", children: step.title }), _jsx("img", { src: step.image, alt: `${step.title} step`, className: "w-full h-auto rounded-lg" })] }, index))) }) })] })] }));
};
export default Steps;
