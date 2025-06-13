"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#092950] text-white pt-16 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Coluna 1 - Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">Frente Contra o Crime CE</h4>
            <p className="text-gray-300 mb-4">
              Uma iniciativa da sociedade civil para combater o crime organizado 
              e promover segurança para todos os cidadãos cearenses.
            </p>
            <div className="flex space-x-2">
              {/* Redes sociais */}
              {[
                { icon: "facebook", url: "#" },
                { icon: "instagram", url: "#" },
                { icon: "twitter", url: "#" },
                { icon: "youtube", url: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social.icon}</span>
                  {/* Ícone placeholder */}
                  <div className="w-5 h-5 bg-white/80 rounded-sm"></div>
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Coluna 2 - Links Rápidos */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
            >
            <h4 className="text-xl font-bold mb-4 text-center">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
              { name: "Sobre o Evento", url: "#evento" },
              { name: "Personalidades", url: "#presencas" },
              { name: "Inscrição", url: "#inscricao" },
              { name: "Denúncia", url: "#denuncia" },
              { name: "Política de Privacidade", url: "#" }
              ].map((link, i) => (
              <li key={i} className="text-center">
                <a 
                href={link.url} 
                className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                {link.name}
                </a>
              </li>
              ))}
            </ul>
            </motion.div>
          
          {/* Coluna 3 - Contato */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="text-secondary mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contato@frentecontraocrimece.org.br</span>
              </li>
              <li className="flex items-start">
                <div className="text-secondary mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Assembleia Legislativa do Ceará<br />Av. Desembargador Moreira, 2807<br />Fortaleza - CE</span>
              </li>
            </ul>
          </motion.div> */}
          
          {/* Coluna 4 - Informações do Evento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4">Evento</h4>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg font-bold">08 de Agosto de 2025</p>
              <p className="text-gray-300 mb-2">10:00 - 17:00</p>
              <p className="mb-3">Audiência Pública na ALECE</p>
              <a href="#inscricao" className="btn btn-secondary text-sm py-2 px-4">
                Garantir Presença
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Apoiadores */}
        {/*<motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-10 py-6 border-t border-b border-white/10"
        >
          <h5 className="text-center text-sm uppercase tracking-wider mb-6">Apoiadores e Parceiros</h5>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white/20 h-16 w-32 rounded-md flex items-center justify-center">
                <div className="text-xs text-white/50">Logo Apoiador {i}</div>
              </div>
            ))}
          </div>
        </motion.div>*/}
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>© {currentYear} Frente Contra o Crime CE. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido com compromisso para um Ceará mais seguro.
          </p>
        </div>
      </div>
    </footer>
  );
}
