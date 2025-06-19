"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Placeholder para as imagens do slide (substitua com suas imagens reais)
const slideImages = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Audiência Pública na ALECE'
  },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  // Removemos a transformação Y que estava causando problemas
  
  // Estado para popup
  // const [showPopup, setShowPopup] = useState(false);
  
  // Adiciona classe para contador regressivo
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define a data do evento (08 de agosto de 2025)
    const eventDate = new Date('2025-08-08T10:00:00');
    
    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    // Calcula o tempo restante imediatamente
    calculateTimeLeft();
    
    // Atualiza a cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Mostrar popup após 7 segundos
    // const popupTimer = setTimeout(() => {
    //   setShowPopup(true);
    // }, 7000);
    
    return () => {
      clearInterval(timer);
      // clearTimeout(popupTimer);
    };
  }, []);

  return (
    <section id="evento" className="relative h-auto min-h-screen md:h-screen flex items-center justify-center overflow-y-auto overflow-x-hidden pt-20 pb-16 md:pt-16 md:pb-24 bg-white">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          loop={true}
          className="h-full w-full"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div className="relative h-full w-full">
                {/* Imagem de fundo escurecida para contraste */}
                <div className="absolute inset-0 bg-[#ffdf4d]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-#f1b921/60 via-[#f1b921] to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 pt-8 sm:pt-12 md:pt-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
          className="text-black max-w-4xl mx-auto px-4"
        >
          <motion.div
            className="inline-block bg-[#f1b921] text-black px-3 py-1 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 shadow-lg text-xs md:text-base font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="animate-pulse inline-block mr-1">🔴</span> VAGAS LIMITADAS • 08 DE AGOSTO DE 2025
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Lançamento da<br />
            <span className="text-[#f15121]">Frente Contra o Crime</span> no Ceará
          </motion.h1>
          
          <motion.div className="bg-yellow-50/80 backdrop-blur-sm p-3 md:p-4 rounded-lg max-w-3xl mx-auto mb-4 md:mb-8 border border-yellow-200">
            <motion.p
              className="text-sm sm:text-base md:text-xl text-yellow-900 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Uma mobilização cidadã pela segurança no nosso estado. Junte-se a líderes, representantes da sociedade 
              civil e autoridades neste importante evento.
            </motion.p>
            
            <div className="mt-3 md:mt-4 text-[#b8860b] flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2">
              {/* <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-[#b8860b]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm md:text-base"></span>
              </div> */}
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm md:text-base">Assembleia Legislativa do Ceará</span>
              </div>
            </div>
          </motion.div>
          
          {/* Contador regressivo */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 my-4 sm:my-6 md:my-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { label: "DIAS", value: timeLeft.days },
              { label: "HORAS", value: timeLeft.hours },
              { label: "MINUTOS", value: timeLeft.minutes },
              { label: "SEGUNDOS", value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-yellow-100/80 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-900">{item.value}</div>
                <div className="text-yellow-700 text-xs sm:text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a 
              href="#inscricao" 
              className="btn btn-secondary text-sm sm:text-base md:text-lg font-bold py-3 md:py-4 px-4 md:px-8 shadow-lg relative overflow-hidden group bg-[#f1b921] text-black border-none hover:bg-[#b8860b]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">GARANTIR MINHA VAGA AGORA</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#presencas" 
              className="btn border-2 border-yellow-400 text-yellow-900 hover:bg-yellow-100 py-2 sm:py-3 md:py-4 px-4 md:px-6 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Presenças Confirmadas
            </motion.a>
          </motion.div>
          
          {/* Elemento de social proof */}
          {/* <motion.div 
            className="mt-4 sm:mt-6 md:mt-10 mb-4 md:mb-8 flex items-center justify-center text-yellow-900/80 text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <div className="flex -space-x-1 sm:-space-x-2 mr-2 sm:mr-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-yellow-400 bg-yellow-100`}></div>
              ))}
            </div>
            <span>+30 pessoas já confirmaram presença</span>
          </motion.div> */}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      
      {/* Popup flutuante para conversão */}
      {/* <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-lg shadow-xl max-w-sm w-full p-4 border-l-4 border-secondary"
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Fechar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0 bg-secondary/10 rounded-full p-2">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">⏰ As vagas estão acabando!</h4>
                <p className="text-gray-600 text-sm mb-3">Apenas 45 lugares restantes para este evento histórico.</p>
                <a 
                  href="#inscricao" 
                  className="btn btn-secondary w-full text-sm py-2"
                  onClick={() => setShowPopup(false)}
                >
                  Garantir minha vaga
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
}