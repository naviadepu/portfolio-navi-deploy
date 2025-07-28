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
      <section className="min-h-screen bg-[#F2F2F2] text-black flex flex-col justify-between px-8 pt-12 relative">
        {/* Home Icon and Email (Top Left) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-10 left-10 z-50 flex items-center gap-3"
        >
          <Link href="/" className="text-gray-600 hover:text-black transition-colors cursor-pointer block p-2">
            <FaHome className="text-xl" />
          </Link>
          <span className="text-lg tracking-wide">vaishnavi.adepu444@email.com</span>
        </motion.div>

        {/* Center Polaroid Image */}
        <div className="absolute right-40 top-48 rotate-3">
          <div className="bg-white p-4 shadow-2xl rounded-sm transform rotate-3 hover:rotate-6 transition-transform duration-300">
            <div className="relative w-[350px] h-[350px] overflow-hidden bg-gray-100">
              <Image 
                src="/pic.jpeg"
                alt="Vaishnavi Adepu"
                width={350}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-6 text-center h-16 flex flex-col justify-center">
              <p className="font-handwriting text-lg font-bold text-gray-800">VAISHNAVI ADEPU</p>
            </div>
          </div>
        </div>

        {/* Large Text Section */}
        <div className="absolute bottom-28 left-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[7rem] font-space leading-none"
          >
            SOFTWARE <br /> DEVELOPER
          </motion.h1>
        </div>
      </section>
    </>
  );
}
