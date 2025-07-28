'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/binder1.png', alt: 'Pitching Binder at entrepreneurship competition' },
  { src: '/binder2.jpeg', alt: 'Presenting our startup solution' },
  { src: '/binder3.jpeg', alt: 'Answering questions at the entrepreneurship competition' },
];

export default function Beyond() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F2F2F2] px-4 sm:px-6 pt-24 pb-12 flex flex-col items-center justify-center relative">
        {/* Home Icon (Top Left) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-10 left-4 sm:left-10 z-50"
        >
          <Link href="/" className="text-gray-600 hover:text-black transition-colors cursor-pointer block p-2">
            <FaHome className="text-lg sm:text-xl" />
          </Link>
        </motion.div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 handwritten text-center px-4">Beyond Code</h1>
        <p className="text-lg sm:text-xl text-gray-700 text-center mb-6 sm:mb-8 max-w-xl px-4">
          I'm passionate about entrepreneurship and building solutions that make a difference. I've pitched in startup competitions and love exploring the intersection of technology and business. When I'm not coding, you'll find me thinking about the next big idea or connecting with fellow entrepreneurs.
        </p>
        <div className="w-full max-w-4xl px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 handwritten text-center">Startup Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="flex flex-col items-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={250}
                  height={250}
                  className="rounded-lg shadow-lg object-cover w-full h-[200px] sm:h-[250px]"
                />
                <span className="mt-2 text-gray-600 text-xs sm:text-sm text-center px-2">{img.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 