import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
      flex items-center justify-between z-50'>
       {/* Logo Section */}
        <a href="#top">
          <div className="w-28 m-14 cursor-pointer">
          </div>
        </a>
      {/* Navigation Links */}
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

       {/* Contact Button */}
       <a href="/contact"
        className='hidden lg:flex items-center gap-3 px-7 py-3 border border-black rounded-full text-base font-medium hover:bg-gray-700 hover:text-white transition-all'>
          Let's Connect
          <FaArrowRight className="w-4 h-4" />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
