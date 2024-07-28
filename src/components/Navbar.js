
import React, { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 shadow-md px-4 md:px-14">
      <div className="flex items-center space-x-6 text-zinc-800 md:flex md:space-x-6">
        <FaBars className="text-xl cursor-pointer font-normal md:hidden" onClick={toggleMobileMenu} />
        <div className="hidden md:flex md:space-x-6">
          <Link to="/products" className="text-lg hover:underline text-zinc-600">Products</Link>
          <Link to="/rooms" className="text-lg hover:underline text-zinc-600">Rooms</Link>
          <Link to="/about" className="text-lg hover:underline text-zinc-600">About us</Link>
        </div>
      </div>
     
      <div className={`md:hidden fixed inset-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col w-[300px] h-full bg-white shadow-md">
          <div className="flex justify-end p-4">
            <button className="text-xl cursor-pointer" onClick={toggleMobileMenu}>
              <FaTimes />
            </button>
          </div>
        
            
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/products" className="text-lg text-zinc-800 hover:text-zinc-600" onClick={toggleMobileMenu}>Products</Link>
            <Link to="/rooms" className="text-lg text-zinc-800 hover:text-zinc-600" onClick={toggleMobileMenu}>Rooms</Link>
            <Link to="/about" className="text-lg text-zinc-800 hover:text-zinc-600" onClick={toggleMobileMenu}>About us</Link>
          </nav>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
