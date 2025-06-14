"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-black pt-16 pb-6">
      <div className="container">
        {/* Desktop/Tablet: conteúdo completo, Mobile: apenas copyright */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Coluna 1 - Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-yellow-600">Frente Contra o Crime CE</h4>
            <p className="text-yellow-800 mb-4">
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
                  className="w-10 h-10 rounded-full bg-yellow-100/40 hover:bg-yellow-400 flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social.icon}</span>
                  {/* Ícone placeholder */}
                  <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
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
            <h4 className="text-xl font-bold mb-4 text-center text-yellow-600">Links Rápidos</h4>
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
                className="text-yellow-800 hover:text-yellow-500 hover:underline transition-colors"
                >
                {link.name}
                </a>
              </li>
              ))}
            </ul>
            </motion.div>
          
          {/* Coluna 4 - Informações do Evento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-yellow-600">Evento</h4>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-lg font-bold text-yellow-700">08 de Agosto de 2025</p>
              <p className="text-yellow-800 mb-2">10:00 - 17:00</p>
              <p className="mb-3 text-black">Audiência Pública na ALECE</p>
              <a href="#inscricao" className="btn btn-secondary text-sm py-2 px-4 bg-yellow-400 text-black border-none hover:bg-yellow-300">
                Garantir Presença
              </a>
            </div>
          </motion.div>
        </div>
        {/* Mobile: apenas copyright */}
        <div className="block md:hidden">
          <div className="text-center text-sm text-yellow-700 mt-8">
            <p>© {currentYear} Frente Contra o Crime CE. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido com compromisso para um Ceará mais seguro.
            </p>
          </div>
        </div>
        {/* Desktop/Tablet: copyright já incluso acima */}
        <div className="hidden md:block">
          <div className="text-center text-sm text-yellow-700 mt-8">
            <p>© {currentYear} Frente Contra o Crime CE. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido com compromisso para um Ceará mais seguro.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
