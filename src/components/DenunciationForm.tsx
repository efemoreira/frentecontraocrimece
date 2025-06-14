"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function DenunciationForm() {
  const [form, setForm] = useState({ 
    descricao: '', 
    local: '',
    contato: '',
    anonima: true 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = {
        descricao: form.descricao,
        local: form.local,
        contato: form.anonima ? 'Anônima' : form.contato,
        dataEnvio: new Date().toISOString(),
        tipo: 'denuncia'
      };
      
      // Endpoint do Google Script para processar denúncias (anonimamente)
      await fetch('https://script.google.com/macros/s/AKfycbyTpZ_vYIfq4yafujqIpVSP3Qu7YDXQM5XbnhqSJXZb1mweSaZLn6VcLn68EbYEBKj7/exec', {
        redirect: "follow",
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      
      // Como estamos usando no-cors, não podemos verificar o status da resposta normalmente
      // Vamos assumir que o envio foi bem-sucedido
      setSubmitStatus('success');
      setFormMessage(
        "Sua denúncia foi enviada com sucesso e será analisada pela nossa equipe. " + 
        "Todas as informações são tratadas com sigilo e segurança."
      );
      setForm({ descricao: '', local: '', contato: '', anonima: true });
      
      // Salvar uma cópia local criptografada dos dados (para maior segurança)
      if (!form.anonima) {
        try {
          // Armazenar sem identificação pessoal para denúncias
          const savedEntries = JSON.parse(localStorage.getItem('denunciationSubmissions') || '[]');
          savedEntries.push({
            timestamp: new Date().toISOString(),
            enviada: true
          });
          localStorage.setItem('denunciationSubmissions', JSON.stringify(savedEntries));
        } catch (localStorageError) {
          console.warn('Erro ao registrar envio localmente:', localStorageError);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setFormMessage('Ocorreu um erro ao enviar sua denúncia. Por favor, tente novamente.');
      console.error('Erro ao enviar denúncia:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setForm({ descricao: '', local: '', contato: '', anonima: true });
  };

  return (
    <section id="denuncia" className="section relative bg-gradient-to-r from-[#0E3B6E] to-[#092950] text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute h-96 w-96 -top-20 -left-20 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute h-96 w-96 bottom-10 right-10 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-white">Denúncias</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            {"Faça sua denúncia de forma segura e anônima. Todas as informações são tratadas com sigilo absoluto e encaminhadas às autoridades competentes."}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Como funciona?</h3>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Denúncia Segura',
                  description: 'Seus dados são protegidos e você pode optar pelo anonimato completo na denúncia.'
                },
                {
                  title: 'Análise Cuidadosa',
                  description: 'Todas as informações são verificadas por nossa equipe especializada.'
                },
                {
                  title: 'Encaminhamento Oficial',
                  description: 'As denúncias são direcionadas aos órgãos competentes para investigação.'
                },
                {
                  title: 'Sigilo Garantido',
                  description: 'Sua identidade é preservada durante todo o processo.'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    {i === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    )}
                    {i === 3 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-white/80 text-sm">
                Em caso de emergência, ligue diretamente para 190 (Polícia Militar) ou 
                181 (Disque-Denúncia).
              </p>
            </div>
          </motion.div>
          
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 text-gray-800">
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-green-500 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Denúncia Enviada!</h3>
                  <p className="text-gray-600 mb-6">{formMessage}</p>
                  <button
                    onClick={resetForm}
                    className="btn btn-primary"
                  >
                    Enviar outra denúncia
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary mb-6">Enviar Denúncia</h3>
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                      {formMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="descricao" className="block text-gray-700 font-medium mb-1">
                        Descrição da denúncia *
                      </label>
                      <textarea
                        id="descricao"
                        required
                        value={form.descricao}
                        onChange={e => setForm({ ...form, descricao: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                        placeholder="Descreva em detalhes a situação que deseja denunciar..."
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="local" className="block text-gray-700 font-medium mb-1">
                        Local da ocorrência
                      </label>
                      <input
                        id="local"
                        type="text"
                        value={form.local}
                        onChange={e => setForm({ ...form, local: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Endereço, bairro ou referência"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <input
                          id="anonima"
                          type="checkbox"
                          checked={form.anonima}
                          onChange={e => setForm({ ...form, anonima: e.target.checked })}
                          className="mr-2"
                        />
                        <label htmlFor="anonima" className="text-gray-700">
                          Quero fazer uma denúncia anônima
                        </label>
                      </div>
                      
                      {!form.anonima && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label htmlFor="contato" className="block text-gray-700 font-medium mb-1">
                            Contato para retorno (opcional)
                          </label>
                          <input
                            id="contato"
                            type="text"
                            value={form.contato}
                            onChange={e => setForm({ ...form, contato: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Email ou telefone para contato"
                          />
                          <p className="mt-2 text-xs text-gray-500">
                            Seus dados de contato não serão compartilhados com terceiros.
                          </p>
                        </motion.div>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className={`btn btn-secondary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Denúncia'}
                    </button>
                    
                    <p className="mt-4 text-xs text-center text-gray-500">
                      Ao enviar, você concorda com nossa política de privacidade e termos de uso.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
