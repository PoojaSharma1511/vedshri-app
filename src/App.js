import React from 'react'
import Carousal from './components/Carousal'
import Navbar from './components/Navbar'
import './bootstrap.css';
import About from './components/About';
import Features from './components/Features';
import Product from './components/Product';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products';
import ProductItem from './Pages/ProductItem';
import Aboutus from './Pages/Aboutus';
import { ProductProvider } from './context/ProductContext';
import Floatbtn from './components/Floatbtn';
import New from './components/New'



function App() {
  return (

    <ProductProvider>
      <Router>

        <Navbar />
        <Routes>
          <Route path={"/"} element={<>
            <Carousal />
            <About />
            <Features />
            <Product /></>} />
          <Route path="/About" element={<Aboutus />} />
          <Route path="/Product" element={<Products />} />
          <Route path="/ViewDetails/:id" element={<ProductItem />} />
          
        </Routes>
        <Floatbtn/>
        <Footer />
        <Routes>
        <Route path = "/New" element = {<New/>}/>
        </Routes>
        
      </Router>
    </ProductProvider>


  )
}

export default App