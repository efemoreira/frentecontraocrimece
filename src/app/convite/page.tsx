"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ConvitePage() {
  return (
    <>
      <main className="relative overflow-hidden py-20 md:py-32 bg-white min-h-screen">
      {/* Background Fixo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/about-bg.jpg"
            alt="Assembleia Legislativa do Ceará"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-yellow-200/90 to-yellow-50/90" />
        </div>
      </div>        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-black mb-8 md:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-yellow-500">
              ✅ Inscrição Confirmada
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-yellow-700">
              Audiência Pública Frente Contra o Crime CE
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-yellow-700 max-w-3xl mx-auto px-4">
              Guarde estas informações importantes para o dia do evento
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Informações do Evento */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-yellow-700 mb-6 flex items-center gap-2">
                <span className="text-2xl">📅</span>
                Informações do Evento
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🗓</span>
                  <div>
                    <span className="block text-yellow-700 text-sm font-medium">
                      Data:
                    </span>
                    <span className="text-black text-lg">
                      Sexta-feira, 08 de agosto de 2025
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl">🕕</span>
                  <div>
                    <span className="block text-yellow-700 text-sm font-medium">
                      Horário:
                    </span>
                    <span className="text-black text-lg">
                      18h
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:col-span-2">
                  <span className="text-xl">📍</span>
                  <div>
                    <span className="block text-yellow-700 text-sm font-medium">
                      Local:
                    </span>
                    <span className="text-black text-lg">
                      Auditório Murilo Aguiar – Assembleia Legislativa do Estado do Ceará
                    </span>
                    <span className="text-gray-600 text-sm block mt-1">
                      Av. Desembargador Moreira, 2807 – Dionísio Torres, Fortaleza – CE
                    </span>
                    <span className="text-red-600 text-sm font-semibold block mt-2">
                      ⚠️ Importante: Entrada pela Rua Barbosa de Freitas
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orientações Importantes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-yellow-700 mb-6 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Orientações Importantes
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 text-lg">🔐</span>
                  <div>
                    <span className="block text-yellow-700 font-medium">
                      Entrada:
                    </span>
                    <span className="text-black">
                      Mediante apresentação de documento com foto
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 text-lg">👕</span>
                  <div>
                    <span className="block text-yellow-700 font-medium">
                      Vestimenta obrigatória:
                    </span>
                    <span className="text-black">
                      Calças compridas, camisas ou blusas com mangas e calçados fechados
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-yellow-600 text-lg">🅿️</span>
                  <div>
                    <span className="block text-yellow-700 font-medium">
                      Estacionamento:
                    </span>
                    <span className="text-black">
                      Há estacionamento disponível nas proximidades do local
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Como Chegar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-yellow-700 mb-6 flex items-center gap-2">
                <span className="text-2xl">🚌</span>
                Como Chegar
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Linhas de ônibus Av. Desembargador Moreira */}
                <div>
                  <h4 className="text-lg font-semibold text-yellow-600 mb-4">
                    Desembarque na Av. Desembargador Moreira:
                  </h4>
                  <div className="space-y-2">
                    {[
                      '027 – Siqueira/Papicu/Aeroporto',
                      '030 – Siqueira/Papicu/13 de Maio',
                      '702 – Antônio Sales/Dionísio Torres/Centro',
                      '680 – José Walter/Papicu/Cidade Jardim',
                      '029 – Parangaba/Náutico'
                    ].map((linha, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <span className="text-yellow-600">🚌</span>
                        <span className="text-black text-sm">{linha}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Linhas de ônibus Av. Pontes Vieira */}
                <div>
                  <h4 className="text-lg font-semibold text-yellow-600 mb-4">
                    Desembarque na Av. Pontes Vieira:
                  </h4>
                  <div className="space-y-2">
                    {[
                      '075 – Campus do Pici/Unifor',
                      '855 – Bezerra de Menezes/Washington Soares',
                      '031 – Borges de Melo I',
                      '032 – Borges de Melo II'
                    ].map((linha, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <span className="text-yellow-600">🚌</span>
                        <span className="text-black text-sm">{linha}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-yellow-600 mb-4 mt-6">
                    Transporte alternativo:
                  </h4>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <span className="text-yellow-600">🚌</span>
                    <span className="text-black text-sm">Linha 755 – Curió/RioMar Kennedy</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Confirmação de Presença */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 py-4 px-8 bg-green-100 text-green-800 font-bold text-lg rounded-lg border-2 border-green-300">
                <span className="text-xl">✅</span>
                Presença Confirmada!
              </div>
              
              <p className="text-gray-700 mt-4 text-lg font-medium">
                Sua inscrição foi registrada com sucesso.
              </p>
              
              <p className="text-gray-600 mt-2 text-sm">
                Aguardamos você no dia 08 de agosto! Juntos somos mais fortes na luta contra o crime.
              </p>

            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
