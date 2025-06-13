"use client";
import React, { useEffect } from "react";
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Presences from '../components/Presences';
import LeadForm from '../components/LeadForm';
import DenunciationForm from '../components/DenunciationForm';
import Faq from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  // Efeito para carregar scripts necessários como o Swiper
  useEffect(() => {
    // Podemos adicionar scripts que precisam ser carregados dinamicamente
    return () => {
      // Cleanup se necessário
    };
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <LeadForm />
        <Presences />
        <About />
        <DenunciationForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
