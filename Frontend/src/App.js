import React from 'react';
import Dashboard from './components/Pages/Dashboard';
import { Pricing } from './components/Pricing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/Pages/Slider";
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
    <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Slider />} />
          <Route path='/pricing' element={<Pricing />} />
          
        </Routes>
        
      </BrowserRouter>
      <Footer/>


    </>
  );
}

export default App;
