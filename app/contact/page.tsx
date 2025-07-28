'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import { FaEnvelopeOpen, FaLinkedin, FaGithub, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
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
        
        <div className="flex flex-col items-center mb-4">
          <FaEnvelopeOpen className="text-pink-400 text-4xl sm:text-6xl mb-2 drop-shadow" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 handwritten text-center">Let's Connect</h1>
        </div>
        <p className="text-lg sm:text-xl text-gray-700 text-center mb-8 sm:mb-10 max-w-xl px-4">
          If you've come this far! send me a message &lt;3
        </p>
        <div className="w-full max-w-lg px-4">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border-l-8 border-dashed border-pink-300 flex flex-col gap-6 sm:gap-8 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 handwritten text-center">Get In Touch</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <p className="text-base sm:text-lg font-semibold mb-2">Email</p>
                <a 
                  href="mailto:vaishnavi.adepu444@email.com" 
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white rounded-md font-semibold shadow hover:bg-pink-600 transition-colors text-sm sm:text-base"
                >
                  <FaEnvelopeOpen className="text-sm sm:text-lg" />
                  Send Email
                </a>
              </div>
              <div className="text-center">
                <p className="text-base sm:text-lg font-semibold mb-2">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/vaishnavi-adepu444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md font-semibold shadow hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  <FaLinkedin className="text-sm sm:text-lg" />
                  Connect on LinkedIn
                </a>
              </div>
              <div className="text-center">
                <p className="text-base sm:text-lg font-semibold mb-2">GitHub</p>
                <a 
                  href="https://github.com/naviadepu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-md font-semibold shadow hover:bg-gray-700 transition-colors text-sm sm:text-base"
                >
                  <FaGithub className="text-sm sm:text-lg" />
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 