import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import CanteenEase from './pages/CanteenEase'
import ResponsiveWebsites from './pages/ResponsiveWebsites'
import ApiValidation from './pages/ApiValidation'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import './styles/global.css'
import './styles/components.css'

export default function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/canteen-ease" element={<CanteenEase />} />
          <Route path="/projects/responsive-websites" element={<ResponsiveWebsites />} />
          <Route path="/projects/api-validation" element={<ApiValidation />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
