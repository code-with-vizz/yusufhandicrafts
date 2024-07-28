import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rooms from './components/Rooms';
import About from './components/About';
import Dinningroom from './components/Dinningroom';
import Home from './components/Home';
import Livingroom from './components/Livingroom';
import Bedroom from './components/Bedroom';
import Smallspaces from './components/Smallspaces';
import Outdoorspaces from './components/Outdoorspaces';
import Contact from './components/Contact';
import SetToTop from './components/SetToTop';
import Footer from './components/Footer';
import Products from './components/Products'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen m-0">
        <Navbar className='fixed top-0 left-0 w-full z-10' />
        <SetToTop />
        <div className="flex-grow ">  {/* Adjust the top padding to match the Navbar height */}
          <Routes>
            <Route path="/" element={<Rooms />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dinningroom" element={<Dinningroom />} />
            <Route path="/livingroom" element={<Livingroom />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/smallspaces" element={<Smallspaces />} />
            <Route path="/outdoorspaces" element={<Outdoorspaces />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer className="w-full" />
      </div>
    </Router>
  );
};

export default App;
