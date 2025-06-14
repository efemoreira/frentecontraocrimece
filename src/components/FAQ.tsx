"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dados das perguntas frequentes
const faqItems = [
  {
    question: "O que é a Frente Contra o Crime CE?",
    answer: "A Frente Contra o Crime CE é uma iniciativa da sociedade civil organizada que reúne diversas entidades com o objetivo de combater o crime organizado no Ceará através de ações de conscientização, mobilização e advocacy junto aos órgãos públicos."
  },
  {
    question: "Como posso participar da audiência pública?",
    answer: "Para participar da audiência pública, basta preencher o formulário de inscrição disponível neste site. O evento é gratuito, mas possui vagas limitadas, por isso recomendamos fazer sua inscrição o quanto antes."
  },
  {
    question: "As denúncias enviadas são realmente anônimas?",
    answer: "Sim, todas as denúncias podem ser feitas de forma completamente anônima. Nós utilizamos tecnologia de criptografia para proteger os dados e não coletamos informações que possam identificar o denunciante, a menos que ele opte por fornecer seus dados para contato."
  },
  {
    question: "Qual o resultado esperado do evento?",
    answer: "Esperamos que a audiência pública resulte em propostas concretas para o combate ao crime organizado, que serão encaminhadas aos órgãos competentes, além de fortalecer a rede de mobilização da sociedade civil em torno do tema da segurança pública."
  },
  {
    question: "Haverá transmissão online do evento?",
    answer: "Sim, o evento será transmitido ao vivo pelos canais oficiais da ALECE e pelas redes sociais da Frente Contra o Crime CE. Os links serão disponibilizados aos inscritos por email alguns dias antes do evento."
  },
  {
    question: "Como posso apoiar esta iniciativa?",
    answer: "Você pode apoiar esta iniciativa de diversas formas: participando do evento, compartilhando as informações nas suas redes sociais, fazendo denúncias seguras através do nosso canal e mobilizando sua comunidade para o tema da segurança pública."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-yellow-600">Perguntas Frequentes</h2>
          <p className="section-subtitle text-black">
            Tire suas dúvidas sobre o evento e a iniciativa Frente Contra o Crime CE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto divide-y divide-yellow-100"
        >
          {faqItems.map((item, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => toggleItem(i)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-black">{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeIndex === i ? 'rotate-180' : 'rotate-0'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-base text-yellow-900">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="mb-6 text-yellow-900">
            Não encontrou o que procurava? Entre em contato conosco
          </p>
          <a 
            href="mailto:contato@frentecontraocrimece.org.br" 
            className="btn btn-primary bg-yellow-400 text-black border-none hover:bg-yellow-300"
          >
            Enviar Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
