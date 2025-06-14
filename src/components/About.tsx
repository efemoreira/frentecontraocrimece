"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tabs = [
  {
    id: 'objetivo',
    label: 'Objetivo',
    content: 'A audiência pública "Frente Contra o Crime CE" visa reunir autoridades, especialistas e cidadãos para discutir e propor ações concretas contra o avanço do crime organizado no Ceará. O evento servirá como um importante fórum para debater políticas públicas de segurança e apresentar demandas da sociedade civil.'
  },
  {
    id: 'publico',
    label: 'Público',
    content: 'O evento é aberto a todos os cidadãos interessados na segurança pública do estado. Teremos a participação de representantes da sociedade civil, autoridades públicas, profissionais de segurança, acadêmicos, jornalistas e cidadãos preocupados com o cenário da segurança pública no Ceará.'
  },
  {
    id: 'programacao',
    label: 'Programação',
    content: 'A audiência acontecerá no dia 08 de agosto de 2025, das 10h às 17h, incluindo painéis de debate, apresentações de especialistas e sessão aberta para perguntas e propostas. A programação completa será divulgada nas próximas semanas.'
  },
  {
    id: 'organizacao',
    label: 'Organização',
    content: 'Este evento é organizado pela Frente Contra o Crime CE, um movimento civil apartidário que reúne diversas entidades da sociedade civil comprometidas com a segurança pública e os direitos dos cidadãos cearenses.'
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="sobre" className="relative overflow-hidden py-20 md:py-32">
      {/* Background Fixo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/about-bg.jpg" 
            alt="Assembleia Legislativa do Ceará" 
            fill 
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900/90 to-[#0E3B6E]/90" />
        </div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">Audiência Pública na ALECE</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
            Juntos pela segurança e contra o crime organizado no Ceará
          </p>
        </motion.div>
        
        <div className="flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Tabs Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative py-3 px-4 rounded-md text-center md:text-left transition-all duration-200 text-sm md:text-lg ${
                      activeTab === tab.id 
                        ? 'bg-white/20 text-white font-medium' 
                        : 'text-white/80 hover:bg-white/20'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-secondary rounded-r-full"></span>
                    )}
                  </button>
                  {index < tabs.length - 1 && (
                    <div className="hidden md:block h-px bg-white/20 my-2 mx-3"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
          
          {/* Tab Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-white rounded-lg shadow-xl p-5 md:p-8"
          >
            {tabs.map(tab => (
              <div 
                key={tab.id}
                className={activeTab === tab.id ? 'block' : 'hidden'}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{tab.label}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {tab.content}
                </p>
                
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="block text-gray-500 text-sm">Data e Hora:</span>
                    <span className="font-medium text-gray-800">08 de Agosto de 2025, 10h às 17h</span>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#inscricao"
                    className="btn btn-primary inline-block text-center py-3 px-6"
                  >
                    Quero Participar
                  </motion.a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
