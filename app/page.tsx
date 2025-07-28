'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Landing Section */}
      <section className="min-h-screen bg-[#F2F2F2] text-black flex flex-col justify-between px-4 sm:px-8 pt-12 relative overflow-hidden">
        {/* Home Icon and Email (Top Left) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-10 left-4 sm:left-10 z-50 flex items-center gap-2 sm:gap-3"
        >
          <Link href="/" className="text-gray-600 hover:text-black transition-colors cursor-pointer block p-2">
            <FaHome className="text-lg sm:text-xl" />
          </Link>
          <span className="text-sm sm:text-lg tracking-wide hidden sm:block">vaishnavi.adepu444@email.com</span>
        </motion.div>

        {/* Center Polaroid Image */}
        <div className="absolute right-4 sm:right-10 md:right-20 lg:right-40 top-32 sm:top-48 rotate-3">
          <div className="bg-white p-2 sm:p-4 shadow-2xl rounded-sm transform rotate-3 hover:rotate-6 transition-transform duration-300">
            <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] overflow-hidden bg-gray-100">
              <Image 
                src="/pic.jpeg"
                alt="Vaishnavi Adepu"
                width={350}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-3 sm:mt-6 text-center h-12 sm:h-16 flex flex-col justify-center">
              <p className="font-handwriting text-sm sm:text-lg font-bold text-gray-800">VAISHNAVI ADEPU</p>
            </div>
          </div>
        </div>

        {/* Large Text Section */}
        <div className="absolute bottom-20 sm:bottom-28 left-4 sm:left-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-extrabold leading-none"
          >
            SOFTWARE <br /> DEVELOPER
          </motion.h1>
        </div>
      </section>
    </>
  );
}
