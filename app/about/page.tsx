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
          <section className="min-h-screen flex items-center justify-center bg-[#F2F2F2] px-12 pt-20 relative">
            
            {/* Home Icon (Top Left) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 left-10 z-50"
            >
              <Link href="/" className="text-gray-600 hover:text-black transition-colors cursor-pointer block p-2">
                <FaHome className="text-xl" />
              </Link>
            </motion.div>
            
            {/* Left Side (Image or Video Preview) */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 1 } }
              }}
              className="w-1/2 flex justify-center"
            >
              <div className="overflow-hidden shadow-lg relative">
                <Image 
                  src="/pic3.jpeg"
                  alt="Vaishnavi Adepu"
                  width={600}
                  height={450}
                  objectFit="cover"
                  className="rounded-md"
                  style={{ clipPath: 'inset(10% 0 10% 0)' }}
                />
                <div className="absolute -top-6 left-14">
                  <Image src="/tape.png" alt="Tape" width={100} height={40} />
                </div>
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
              className="w-1/2 pl-16"
            >
              <div className="bg-white p-10 rounded-lg shadow-lg relative border-l-8 border-dashed border-gray-300 max-w-2xl lined-paper">
                <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                  The first time I started coding...
                </h2>
                
                {/* Vintage Cursor Image Removed */}
                {/* <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.5, delay: 0.3 }} 
                  className="mt-4 flex justify-end"
                >
                  <Image 
                    src="/vintage-cursor.png" 
                    alt="Vintage Cursor"
                    width={100} 
                    height={100} 
                  />
                </motion.div> */}

                <p className="text-xl leading-relaxed">
                  The <span className="font-bold">screen</span> was <span className="italic">blank</span>.  
                  <br /><br />
                  I typed a few lines—just enough to make <span className="italic font-bold">something move</span>.  
                  <br /><br />
                  And just like that, <span className="font-bold">I was hooked</span>.  
                  <br /><br />
                  What started as a small experiment turned into an <span className="italic">obsession</span>.  
                  Now, I build <span className="font-bold">AI-driven projects</span> to solve everyday problems!  
                </p>

                <div className="mt-12 flex justify-end">
                  <motion.a
                    href="/work"
                    whileHover={{ scale: 1.05 }}
                    className="text-xl bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800"
                  >
                    See What I've Built →
                  </motion.a>
                </div>
              </div>
            </motion.div>

          </section>
        </motion.div>
      </div>
    </>
  );
}
