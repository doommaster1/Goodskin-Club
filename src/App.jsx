import { useState } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Services />
      <Products />
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
