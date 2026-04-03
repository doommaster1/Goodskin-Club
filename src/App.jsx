import { useState } from 'react'
import Header from './sections/Header';
import Navbar from './sections/Navbar';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import About from './sections/About';
import Products from './sections/Products';
import Footer from './sections/Footer';

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
