"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormState {
  nome: string;
  email: string;
  whatsapp: string;
  cidade: string;
  termos: boolean;
}

interface FormErrors {
  nome?: string;
  email?: string;
  whatsapp?: string;
  termos?: string;
}

interface LeadFormProps {
  hideTitle?: boolean;
  altTitle?: string;
  altSubtitle?: string;
}

export default function LeadForm({ hideTitle, altTitle, altSubtitle }: LeadFormProps = {}) {
  const [form, setForm] = useState<FormState>({ 
    nome: '', 
    email: '', 
    whatsapp: '', 
    cidade: '', 
    termos: false 
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!form.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (form.whatsapp && !/^\(\d{2}\) \d{5}-\d{4}$/.test(form.whatsapp)) {
      newErrors.whatsapp = 'Formato: (99) 99999-9999';
    }
    
    if (!form.termos) {
      newErrors.termos = 'Você precisa aceitar os termos';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    const cleaned = value.replace(/\D/g, '');
    
    // Aplica a máscara (99) 99999-9999
    let formatted = cleaned;
    if (cleaned.length > 0) {
      formatted = `(${cleaned.slice(0, 2)}`;
      
      if (cleaned.length > 2) {
        formatted += `) ${cleaned.slice(2, 7)}`;
        
        if (cleaned.length > 7) {
          formatted += `-${cleaned.slice(7, 11)}`;
        }
      }
    }
    
    return formatted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formData = {
        nome: form.nome,
        email: form.email,
        whatsapp: form.whatsapp,
        cidade: form.cidade,
        dataInscricao: new Date().toISOString(),
        origem: 'site_lancamento'
      };
      
      // Endpoint do Google Script para processar o formulário
      await fetch('https://script.google.com/macros/s/AKfycbwYNEDl216gllEKnnO8ao9nmxzx-3GMzhBdG7FJdfNyF6YxpwrolyJTQLAO8YfMwrU2/exec', {
        redirect: "follow",
        method: 'POST',
        mode: 'no-cors', // Usar no-cors para evitar CORS issues
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      
      // Como estamos usando no-cors, não podemos verificar o status da resposta normalmente
      // Vamos assumir que o envio foi bem-sucedido, mas também podemos implementar um fallback
      setSubmitStatus('success');
      setFormMessage('Sua inscrição foi confirmada com sucesso! Enviaremos mais informações por email.');
      setForm({ nome: '', email: '', whatsapp: '', cidade: '', termos: false });
      
      // Salvar uma cópia local dos dados (opcional)
      try {
        const savedEntries = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        savedEntries.push({...formData, timestamp: new Date().toISOString()});
        localStorage.setItem('formSubmissions', JSON.stringify(savedEntries));
      } catch (localStorageError) {
        console.warn('Erro ao salvar dados localmente:', localStorageError);
      }
    } catch (error) {
      setSubmitStatus('error');
      setFormMessage('Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.');
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inscricao" className="section relative overflow-hidden bg-gradient-to-br from-[#0E3B6E] to-[#092950]">
      {/* Banner destacado no topo da seção */}
      <div className="absolute top-0 left-0 w-full bg-secondary text-white text-center py-2 px-4 z-20">
        <p className="text-sm md:text-base font-medium">
          <span className="animate-pulse inline-block mr-1">🔴</span> 
          Vagas limitadas! Inscreva-se agora e garanta sua participação no evento
        </p>
      </div>
    
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {/* Padrão de fundo */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>
      
      <div className="container relative z-10 pt-8">
        {!hideTitle && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <span className="bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">INSCRIÇÕES ABERTAS</span>
            <h2 className="text-3xl md:text-4xl font-bold">{altTitle || "Garanta sua vaga na audiência pública"}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              {altSubtitle || "Preencha o formulário abaixo para participar deste evento que será um marco no combate ao crime no Ceará."}
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Por que participar?</h3>
            
            <p className="text-gray-300 text-lg mb-6">
              Este evento será um marco na mobilização contra o crime organizado no Ceará. 
              <span className="text-secondary font-bold"> Sua presença fará a diferença!</span>
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Audiência pública na Assembleia Legislativa do Ceará',
                'Dia 08 de agosto de 2025, a partir das 10h',
                'Participação de autoridades e especialistas em segurança',
                // 'Vagas limitadas - restam apenas 50 lugares',
                'Receba material exclusivo sobre segurança pública',
                'Faça parte da rede de cidadãos engajados'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-secondary mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Testemunhos - aumenta credibilidade */}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 mt-8">
              <p className="italic text-gray-100">
                &ldquo;Este evento é uma oportunidade única para a sociedade civil se manifestar e contribuir para políticas de segurança mais eficazes.&rdquo;
              </p>
              <div className="flex items-center mt-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                <div>
                  <p className="text-white font-medium">Dr. Paulo Mendes</p>
                  <p className="text-gray-400 text-sm">Especialista em Segurança Pública</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl relative">
              {/* Badge destacado */}
              {/* <div className="absolute -top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                GRATUITO
              </div> */}
              
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Inscrição Confirmada!</h3>
                  <p className="text-gray-600 mb-4">{formMessage}</p>
                  
                  {/* Call-to-action após sucesso */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="font-medium text-gray-700 mb-2">Compartilhe este evento:</p>
                    <div className="flex justify-center space-x-4">
                      <button className="bg-blue-600 text-white p-2 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                      <button className="bg-sky-500 text-white p-2 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </button>
                      <button className="bg-green-600 text-white p-2 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M18.042 13.045c-.293 0-1.459-.714-1.688-.793-.229-.08-.395-.096-.56.08-.166.176-.643.793-.788.955-.145.162-.29.181-.583.06-.292-.12-1.236-.454-2.351-1.449-.87-.776-1.457-1.73-1.627-2.021-.171-.292-.018-.45.128-.594.132-.132.292-.345.44-.517.147-.172.195-.294.293-.491.098-.197.049-.37-.024-.517-.074-.149-.56-1.344-.768-1.838-.201-.487-.41-.42-.56-.428-.145-.008-.311-.01-.477-.01-.167 0-.436.062-.664.31-.228.247-.874.85-.874 2.077 0 1.225.895 2.411 1.02 2.574.123.164 1.743 2.667 4.229 3.746 2.485 1.079 2.485.719 2.932.673.447-.045 1.442-.59 1.645-1.159.205-.569.205-1.054.144-1.159-.061-.104-.228-.166-.437-.277"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="btn btn-primary"
                  >
                    Inscrever outra pessoa
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary mb-2 text-center">
                    Garanta sua vaga agora!
                  </h3>
                  
                  <p className="text-center text-gray-600 mb-6">
                    Preencha o formulário abaixo para reservar sua participação
                  </p>
                  
                  {/* Timer e contador de vagas */}
                  {/* <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between mb-6 border border-gray-200">
                    <div className="text-xs md:text-sm text-gray-700">
                      <span className="font-medium">Vagas restantes:</span> 50
                    </div>
                    <div className="text-xs md:text-sm text-gray-700">
                      <span className="font-medium">Inscrições encerram em:</span> 7 dias
                    </div>
                  </div> */}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                      {formMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="nome" className="block text-gray-700 font-medium mb-1">Nome completo *</label>
                      <input
                        id="nome"
                        type="text"
                        value={form.nome}
                        onChange={e => setForm({ ...form, nome: e.target.value })}
                        className={`w-full px-4 py-3 border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                        placeholder="Digite seu nome completo"
                      />
                      {errors.nome && <p className="mt-1 text-red-500 text-sm">{errors.nome}</p>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                        placeholder="Digite seu melhor email"
                      />
                      {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-1">
                        WhatsApp <span className="text-gray-500 text-xs">(para lembretes sobre o evento)</span>
                      </label>
                      <input
                        id="whatsapp"
                        type="text"
                        value={form.whatsapp}
                        onChange={e => setForm({ ...form, whatsapp: formatPhone(e.target.value) })}
                        className={`w-full px-4 py-3 border ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                        placeholder="(99) 99999-9999"
                        maxLength={15}
                      />
                      {errors.whatsapp && <p className="mt-1 text-red-500 text-sm">{errors.whatsapp}</p>}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="cidade" className="block text-gray-700 font-medium mb-1">Cidade</label>
                      <input
                        id="cidade"
                        type="text"
                        value={form.cidade}
                        onChange={e => setForm({ ...form, cidade: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Sua cidade"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className={`flex items-start ${errors.termos ? 'text-red-500' : 'text-gray-700'}`}>
                        <input
                          type="checkbox"
                          checked={form.termos}
                          onChange={e => setForm({ ...form, termos: e.target.checked })}
                          className="mt-1 mr-2"
                        />
                        <span className="text-sm">
                          Concordo em receber informações sobre o evento e declaro estar ciente da 
                          <a href="#" className="text-primary hover:underline"> política de privacidade</a>.
                        </span>
                      </label>
                      {errors.termos && <p className="mt-1 text-red-500 text-sm">{errors.termos}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      className={`btn btn-secondary w-full text-base py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} relative overflow-hidden group`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </span>
                      ) : (
                        <>
                          <span className="relative z-10">GARANTIR MINHA VAGA AGORA</span>
                          <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                        </>
                      )}
                    </button>

                    {/* Reforço de segurança/urgência */}
                    <div className="mt-4 text-center">
                      <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Seus dados estão protegidos com segurança
                      </div>
                      <p className="text-xs text-gray-500">
                        Ao se inscrever você receberá confirmação e detalhes por email
                      </p>
                    </div>
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
