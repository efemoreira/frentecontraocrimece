"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Dados das personalidades confirmadas
const people = [
  { 
    name: 'Ver.ª Amanda Vettorazzo ', 
    title: 'Vereadora da cidade de São Paulo', 
    image: '/images/person-2.jpg',
    description: 'Criadora da Lei Anti Oruam'
  },
  { 
    name: 'Arthur do Val', 
    title: 'Ex-Deputado Estadual de SP', 
    image: '/images/person-1.jpg',
    description: 'Liderança política do Movimento Brasil Livre'
  },
  { 
    name: 'Dep. Kim Kataguiri', 
    title: 'Deputado Federal de SP', 
    image: '/images/kim.jpg',
    description: 'Liderança política do Movimento Brasil Livre'
  },
  { 
    name: 'Dep. Guto Zacarias', 
    title: 'Deputado Estadual de SP', 
    image: '/images/guto.jpg',
    description: 'Liderança política do Movimento Brasil Livre'
  },
  { 
    name: 'Dep. Reginauro', 
    title: 'Deputado estadual do CE', 
    image: '/images/person-3.jpg',
    description: 'Lider de segurança'
  },
  { 
    name: 'Capitão Wagner', 
    title: 'Ex-Deputado Federal pelo CE', 
    image: '/images/person-4.jpg',
    description: 'Maior liderança de segurança pública do Ceará'
  },
  { 
    name: 'Renato Batista', 
    title: 'Portavoz do Movimento Brasil Livre', 
    image: '/images/renato.jpg',
    description: 'Candidato a vereador em 2024'
  },
  { 
    name: 'Pedro Arthur', 
    title: 'Portavoz do Movimento Brasil Livre', 
    image: '/images/person-5.jpg',
    description: 'Candidato a vereador em 2024'
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100
    }
  }
};

export default function Presences() {
  // Estado para controlar o popup
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Estado para controlar a contagem regressiva
  // const [countdownValue, setCountdownValue] = useState({
  //   days: 7,
  //   hours: 23,
  //   minutes: 59,
  //   seconds: 59
  // });

  // Simulação de contagem regressiva e gerenciamento de popup
  // useEffect(() => {
  //   // Timer para contagem regressiva
  //   const countdownTimer = setInterval(() => {
  //     setCountdownValue(prev => {
  //       if (prev.seconds > 0) {
  //         return { ...prev, seconds: prev.seconds - 1 };
  //       } else if (prev.minutes > 0) {
  //         return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
  //       } else if (prev.hours > 0) {
  //         return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
  //       } else if (prev.days > 0) {
  //         return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
  //       }
  //       return prev;
  //     });
  //   }, 1000);
    
    // Timer para exibir o popup após 15 segundos
    // const popupTimer = setTimeout(() => {
    //   // Verificar se o usuário já viu o popup (usando localStorage)
    //   const hasSeenPopup = localStorage.getItem('hasSeenInscricaoPopup');
    //   if (!hasSeenPopup) {
    //     setIsPopupOpen(true);
    //     // Marcar que o usuário já viu o popup
    //     localStorage.setItem('hasSeenInscricaoPopup', 'true');
    //   }
    // }, 15000);
    
    // Limpar timers quando componente for desmontado
    // return () => {
    //   clearInterval(countdownTimer);
    //   clearTimeout(popupTimer);
    // };
  // }, []);

  return (
    <section id="presencas" className="section bg-gradient-to-b from-yellow-50 to-white relative">
      {/* Banner de destaque superior */}
      {/* <div className="absolute top-0 left-0 w-full bg-secondary text-white text-center py-2 px-4 z-20">
        <p className="text-sm md:text-base font-medium">
          <span className="animate-pulse inline-block mr-1">🔴</span> 
          Participe de um evento histórico com especialistas de renome!
        </p>
      </div> */}

      <div className="container pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            PERSONALIDADES CONFIRMADAS
          </div>
          <h2 className="section-title text-yellow-700">Quem Estará Presente</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-yellow-900">
            Tenha a oportunidade única de interagir com autoridades e especialistas que já
            confirmaram presença no dia 08 de agosto.
          </p>
          
          {/* Contador de vagas e tempo */}
          {/* <motion.div 
            className="mt-6 bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto border-2 border-secondary"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <p className="font-bold text-secondary mb-2">Inscrições se encerram em:</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-gray-100 p-2 rounded">
                <div className="text-2xl font-bold text-primary">{countdownValue.days}</div>
                <div className="text-xs text-gray-600">Dias</div>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <div className="text-2xl font-bold text-primary">{countdownValue.hours}</div>
                <div className="text-xs text-gray-600">Horas</div>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <div className="text-2xl font-bold text-primary">{countdownValue.minutes}</div>
                <div className="text-xs text-gray-600">Min</div>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <div className="text-2xl font-bold text-primary">{countdownValue.seconds}</div>
                <div className="text-xs text-gray-600">Seg</div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
        
        {/* Mobile Slider (Visível apenas em telas menores) */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12"
          >
            {people.map((person, i) => (
              <SwiperSlide key={i}>
                <PersonCard person={person} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Grid para desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {people.map((person, i) => (
            <motion.div key={i} variants={itemVariants}>
              <PersonCard person={person} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Seção de Call to Action melhorada */}
        {/* <motion.div 
          className="mt-12 bg-primary/5 p-8 rounded-lg border border-primary/20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Não perca esta oportunidade!
            </h3>
            <p className="text-gray-700 mb-4">
              Garanta seu lugar neste evento histórico e tenha a chance de interagir com estas 
              personalidades que estão à frente do combate ao crime em nosso estado.
            </p>
            <div className="text-sm bg-yellow-50 border border-yellow-200 text-yellow-700 p-3 rounded-md mb-5 inline-flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Restam apenas 45 vagas disponíveis</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#inscricao" 
              className="btn btn-secondary text-base py-3 px-6 relative overflow-hidden group"
            >
              <span className="relative z-10">GARANTIR MINHA VAGA AGORA</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#saiba-mais" 
              className="btn btn-outline text-base py-3 px-6"
            >
              Saber Mais Detalhes
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

// Componente de card para personalidades
function PersonCard({ person }: { person: typeof people[0] }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-yellow-400 text-black text-xs py-1 px-2 rounded-full font-medium">
          Confirmado
        </span>
      </div>
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 bg-yellow-100" />
        {/* Aqui deve entrar uma imagem real - iremos usar um placeholder por enquanto */}
        <Image src={person.image} alt={person.name} fill className="object-cover" />

      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-yellow-700 mb-1">{person.name}</h3>
        <p className="text-yellow-600 font-medium mb-3">{person.title}</p>
        <p className="text-yellow-900 mb-4">{person.description}</p>        
      </div>
    </motion.div>
  );
}

// Componente de Popup para inscrição
// function PopupInscricao({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
//             onClick={e => e.stopPropagation()}
//           >
//             <button 
//               onClick={onClose}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
//               aria-label="Fechar"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             <div className="text-center mb-6">
//               <div className="inline-block p-3 rounded-full bg-secondary/10 text-secondary mb-4">
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Não perca seu lugar!</h3>
//               <p className="text-gray-600">
//                 As vagas estão acabando rapidamente. Inscreva-se agora e garanta sua participação neste evento histórico.
//               </p>
//             </div>
            
//             <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-3 rounded-md mb-5 flex items-center">
//               <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//               </svg>
//               <span className="text-sm">
//                 45 pessoas já se inscreveram hoje. Restam poucas vagas!
//               </span>
//             </div>
            
//             <a 
//               href="#inscricao"
//               className="btn btn-secondary w-full text-base py-3 relative overflow-hidden group"
//               onClick={onClose}
//             >
//               <span className="relative z-10">GARANTIR MINHA VAGA AGORA</span>
//               <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
