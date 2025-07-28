'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const projects = [
  {
    title: 'Binder',
    description: 'Your all-in-one academic companion for course management, scheduling, and AI-powered assistance.',
    link: 'https://binder-ivory.vercel.app/',
    image: '/globe.svg',
  },
  {
    title: 'Notion Clone',
    description: 'A connected workspace for documents, reading, and planning, inspired by Notion.',
    link: 'https://notion-clone-ebon-ten.vercel.app/',
    image: '/file.svg',
  },
  {
    title: 'UN Goals Website',
    description: 'A website focused on the UN Sustainable Development Goals.',
    link: '',
    image: '/window.svg',
  },
  {
    title: 'Flashcards-Telugu',
    description: 'An interactive flashcard app for learning Telugu.',
    link: '',
    image: '/paperclip.jpeg',
  },
  {
    title: 'Adventure Game in Python',
    description: 'A text-based adventure game built in Python.',
    link: '',
    image: '/vintage-cursor.png',
  },
];

const borderColors = [
  'border-l-8 border-dashed border-black',
];

const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0'];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

const WorkPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="custom-cursor min-h-screen flex items-center justify-center bg-[#F2F2F2] px-4 pt-24 pb-12 relative">
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
        
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{}}
          className="w-full max-w-6xl"
        >
          <motion.h2
            className="text-5xl font-extrabold mb-4 leading-tight handwritten text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Projects
          </motion.h2>
          {/* Wavy SVG Divider */}
          <div className="flex justify-center mb-6">
            <svg height="24" width="200" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12 Q50 24 100 12 T200 12" stroke="#bdbdbd" strokeWidth="3" fill="none" />
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className={`bg-white p-7 rounded-lg shadow-lg relative max-w-xs min-w-[250px] flex flex-col items-center hover:scale-105 transition-transform duration-200 border-l-8 border-dashed border-black ${rotations[i % rotations.length]}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                style={{ zIndex: 10 - i }}
              >
                {/* Tape graphic removed */}
                {project.image && (
                  <div className="mb-4">
                    <Image src={project.image} alt={project.title} width={60} height={60} className="rounded-md" />
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 handwritten text-center">
                  {project.title}
                </h3>
                <p className="text-base text-gray-700 text-center mb-2">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full block px-0 py-2 bg-black text-white rounded-md font-semibold shadow hover:bg-gray-800 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black text-center"
                    style={{ textDecoration: 'none' }}
                  >
                    Visit Project
                  </a>
                )}
                {!project.link && (
                  <a
                    href="https://github.com/naviadepu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full block px-0 py-2 bg-gray-900 text-white rounded-md font-semibold shadow hover:bg-gray-700 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black text-center"
                    style={{ textDecoration: 'none' }}
                  >
                    Visit GitHub
                  </a>
                )}
              </motion.div>
            ))}
            {/* Placeholder for more projects */}
            <motion.div
              className={`bg-white p-7 rounded-lg shadow-lg relative max-w-xs min-w-[250px] flex flex-col items-center opacity-60 border-l-8 border-dashed border-black rotate-2`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + projects.length * 0.15, duration: 0.7, ease: 'easeOut' }}
              style={{ zIndex: 0 }}
            >
              {/* Tape graphic removed */}
              <div className="mb-4">
                <Image src="/arrow-icon-dark.png" alt="More coming soon" width={60} height={60} />
              </div>
              <h3 className="text-2xl font-bold mb-2 handwritten text-center">More Projects Coming Soon</h3>
              <p className="text-base text-gray-700 text-center mb-2">Stay tuned for new additions to my portfolio!</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <style jsx global>{`
        .paper-texture {
          background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
          background-repeat: repeat;
        }
      `}</style>
    </>
  );
};

export default WorkPage;
