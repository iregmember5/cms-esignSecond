// App.tsx with hardcoded data

// import './App.css'
// import Benefits from './component/Benefits'
// import CTA from './component/CTA'
// import Features from './component/Features'
// import Footer from './component/Footer'
// import Header from './component/Header'

// import Navbar from './component/Navbar'
// import Testimonials from './component/Testimonials'

// function App() {

//   return (
//     <>
//       <div className='flex flex-col mx-auto'>
//         <Navbar />
//       <Header className="h-[70vh]"/>

//       <Features />
//       <Benefits />
//       <Testimonials />
//       <CTA />
//       <Footer />
//       </div>
//     </>
//   )
// }

// export default App

// App component that fetches landing page data and handles loading and error states
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
        } else {
          setError("Failed to load page data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <Navbar />
        <div id="navigatetofirstscreen">
          <Header className="h-[70vh]" data={pageData} />
        </div>
        <div id="features">
          <Features data={pageData} />
        </div>
        <div id="benefits">
          <Benefits data={pageData} />
        </div>
        <div id="testimonials">
          <Testimonials data={pageData} />
        </div>
        <div id="pricing">
          <CTA data={pageData} />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
