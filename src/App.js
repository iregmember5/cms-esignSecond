import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./App.css";
import Benefits from "./component/Benefits";
import CTA from "./component/CTA";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { fetchLandingPageData } from "./API/Service/LandingPage";
import Navbar from "./component/Navbar";
import Testimonials from "./component/Testimonials";
function App() {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchLandingPageData();
                if (data) {
                    setPageData(data);
                }
                else {
                    setError("Failed to load page data");
                }
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);
    if (loading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 border-4 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" }), _jsx("p", { className: "text-gray-600 dark:text-slate-300 text-lg", children: "Loading..." })] }) }));
    }
    if (error) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900", children: _jsxs("div", { className: "text-center max-w-md mx-auto px-4", children: [_jsx("div", { className: "text-red-500 dark:text-red-400 text-5xl mb-4", children: "\u26A0\uFE0F" }), _jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-slate-100 mb-2", children: "Oops! Something went wrong" }), _jsx("p", { className: "text-red-600 dark:text-red-400 mb-6", children: error }), _jsx("button", { onClick: () => window.location.reload(), className: "bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 hover:shadow-lg", children: "Retry Loading" })] }) }));
    }
    if (!pageData) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900", children: _jsx("p", { className: "text-gray-600 dark:text-slate-300 text-lg", children: "No page data found." }) }));
    }
    return (_jsxs("div", { className: "flex flex-col w-full bg-white dark:bg-slate-900 transition-colors duration-300", children: [_jsx(Navbar, {}), _jsx("div", { id: "navigatetofirstscreen", children: _jsx(Header, { className: "h-[70vh]", data: pageData }) }), _jsx("div", { id: "features", children: _jsx(Features, { data: pageData }) }), _jsx("div", { id: "benefits", children: _jsx(Benefits, { data: pageData }) }), _jsx("div", { id: "testimonials", children: _jsx(Testimonials, { data: pageData }) }), _jsx("div", { id: "pricing", children: _jsx(CTA, { data: pageData }) }), _jsx("div", { id: "contact", children: _jsx(Footer, {}) })] }));
}
export default App;
