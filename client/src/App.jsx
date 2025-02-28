import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import OurServices from './components/OurServices'
import ItSupport from './components/ItSupport'
import Technologies from './components/Technologies'
import TestimonialSlider from './components/TestimonialSlider'
import TeamCarousel from './components/OurTeam'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import ServiceDetails from './pages/ServiceDetails'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/digital-marketing-app" element={<Home />} />
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path="/service-details/:title" element={<ServiceDetails />} />
      </Routes>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
