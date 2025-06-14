"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 py-2 md:py-4 transition-all duration-300 ${scrolled ? 'bg-[#0E3B6E] shadow-lg py-2 md:py-3' : 'bg-transparent/70 backdrop-blur-sm'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Logo placeholder - replace with your actual logo */}
          {/* click no logo vai para cima */}
          <a href="#" className="flex items-center group">
            <div className="mr-2 relative w-10 h-10">
              <div className="absolute inset-0 rounded-full bg-white text-[#0E3B6E] flex items-center justify-center font-bold text-lg group-hover:bg-gray-200 transition-colors">
              FC
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors">
              Frente Contra o Crime CE
            </h1>
          </a>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {['Presenças', 'Sobre', 'Denúncia', 'FAQ'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-white hover:text-secondary transition-colors font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#inscricao"
            className="btn btn-secondary ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inscreva-se
          </motion.a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed top-[60px] left-0 w-full bg-[#0E3B6E]/95 backdrop-blur-sm shadow-xl z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 flex flex-col">
              {['Evento', 'Presenças', 'Sobre', 'Denúncia', 'FAQ'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="text-white py-3 border-b border-blue-700 hover:bg-blue-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#inscricao"
                className="btn btn-secondary mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
              >
                Inscreva-se
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}