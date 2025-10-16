
import './App.css'
import Benefits from './component/Benefits'
import CTA from './component/CTA'
import Features from './component/Features'
import Footer from './component/Footer'
import Header from './component/Header'

import Navbar from './component/Navbar'
import Testimonials from './component/Testimonials'


function App() {
  

  return (
    <>
      <div className='flex flex-col mx-auto'>
        <Navbar />
      <Header className="h-[70vh]"/>
      
      <Features />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
      </div>
    </>
  )
}

export default App
