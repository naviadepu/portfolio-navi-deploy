'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { FaHome } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Wrap the page with custom cursor */}
      <div className="custom-cursor">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
          }}
        >
          <section className="min-h-screen flex items-center justify-center bg-[#F2F2F2] px-4 sm:px-8 md:px-12 pt-20 relative">
            
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
            
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl">
              {/* Left Side (Image or Video Preview) */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
                }}
                className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
              >
                <div className="overflow-hidden shadow-lg relative">
                  <Image 
                    src="/pic3.jpeg"
                    alt="Vaishnavi Adepu"
                    width={600}
                    height={450}
                    className="rounded-md object-cover w-full max-w-md"
                    style={{ clipPath: 'inset(10% 0 10% 0)' }}
                  />
                </div>
              </motion.div>

              {/* Right Side (Text Section - Notebook Style) */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }
                }}
                className="w-full lg:w-1/2 lg:pl-8 xl:pl-16"
              >
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg relative border-l-8 border-dashed border-gray-300 max-w-2xl mx-auto lg:mx-0">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
                    The first time I started coding...
                  </h2>

                  <p className="text-lg sm:text-xl leading-relaxed">
                    The <span className="font-bold">screen</span> was <span className="italic">blank</span>.  
                    <br /><br />
                    I typed a few lines—just enough to make <span className="italic font-bold">something move</span>.  
                    <br /><br />
                    And just like that, <span className="font-bold">I was hooked</span>.  
                    <br /><br />
                    What started as a small experiment turned into an <span className="italic">obsession</span>.  
                    Now, I build <span className="font-bold">AI-driven projects</span> to solve everyday problems!  
                  </p>

                  <div className="mt-8 sm:mt-12 flex justify-center lg:justify-end">
                    <motion.a
                      href="/work"
                      whileHover={{ scale: 1.05 }}
                      className="text-lg sm:text-xl bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800"
                    >
                      See What I've Built →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
}
