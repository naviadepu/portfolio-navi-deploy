'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className='w-full fixed px-4 sm:px-5 lg:px-8 xl:px-[8%] py-4
      flex items-center justify-between z-50 bg-[#F2F2F2]/90 backdrop-blur-sm'>
       {/* Logo Section */}
        <a href="#top">
          <div className="w-28 m-14 cursor-pointer">
          </div>
        </a>
      {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-base font-medium">
          <li className="hover:opacity-70 transition-all">
          <a href="/about">JOURNEY</a>
          </li>
          <li className="hover:opacity-70 transition-all">
            <a href="/work">WORK</a>
          </li>
          <li className="hover:opacity-70 transition-all">
            <a href="/beyond">BEYOND</a>
          </li>
        </ul>

       {/* Contact Button - Desktop */}
       <a href="/contact"
        className='hidden lg:flex items-center gap-3 px-7 py-3 border border-black rounded-full text-base font-medium hover:bg-gray-700 hover:text-white transition-all'>
          Let's Connect
          <FaArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[#F2F2F2]/95 backdrop-blur-sm z-40 border-b border-gray-200">
          <ul className="flex flex-col items-center py-6 space-y-4 text-base font-medium">
            <li className="hover:opacity-70 transition-all">
              <a href="/about" onClick={() => setIsMenuOpen(false)}>JOURNEY</a>
            </li>
            <li className="hover:opacity-70 transition-all">
              <a href="/work" onClick={() => setIsMenuOpen(false)}>WORK</a>
            </li>
            <li className="hover:opacity-70 transition-all">
              <a href="/beyond" onClick={() => setIsMenuOpen(false)}>BEYOND</a>
            </li>
            <li className="pt-4">
              <a href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className='flex items-center gap-3 px-7 py-3 border border-black rounded-full text-base font-medium hover:bg-gray-700 hover:text-white transition-all'>
                Let's Connect
                <FaArrowRight className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
