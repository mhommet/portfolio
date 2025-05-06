"use client";

import Link from 'next/link';
import { Locale } from '../types';

interface HeroProps {
  lng: Locale;
}

export default function Hero({ lng }: HeroProps) {
  const content = {
    en: {
      name: "Milan Hommet",
      title: "Fullstack Developer",
      email: "milan.hommet@protonmail.com",
      age: "23 years old",
      profile: "Full-Stack Developer with a Master's degree (Bac+5) and three years of work-study experience at Téïcée.",
      freelance: "Available as a Freelancer for your projects",
      contactBtn: "Contact Me",
      resumeBtn: "Download Resume",
      experienceTitle: "Professional Experience",
      experience1: {
        title: "Fullstack Developer - Téïcée",
        location: "Caen, France",
        period: "Jul. 2022 - Jul. 2025",
        bullets: [
          "Fullstack Development.",
          "SCRUM Project Management.",
          "Client projects using VueJS, Electron, React and Symfony."
        ]
      },
      experience2: {
        title: "Internship - BTEC Higher National Diploma - Lycée St Agnès",
        location: "Vernon, France",
        period: "Jan. 2022 - Feb. 2022",
        bullets: [
          "React Development",
          "MySQL"
        ]
      }
    },
    fr: {
      name: "Milan Hommet",
      title: "Développeur Fullstack",
      email: "milan.hommet@protonmail.com", 
      age: "23 ans",
      profile: "Développeur Full Stack diplômé d'un Bac+5, avec trois ans d'expérience en alternance chez Téïcée.",
      freelance: "Disponible en tant que Freelance pour vos projets",
      contactBtn: "Me Contacter",
      resumeBtn: "Télécharger CV",
      experienceTitle: "Expériences Professionnelles",
      experience1: {
        title: "Développeur Fullstack - Téïcée",
        location: "Caen, France",
        period: "Juil. 2022 - Juil. 2025",
        bullets: [
          "Développement Fullstack.",
          "Gestion de projet SCRUM.",
          "Réalisation de projets clients en VueJS, Electron, React et Symfony."
        ]
      },
      experience2: {
        title: "Stage BTS SIO - Lycée St Agnès",
        location: "Vernon, France",
        period: "Janv. 2022 - Févr. 2022",
        bullets: [
          "Développement React",
          "MySQL"
        ]
      }
    }
  };

  const t = content[lng];

  return (
    <div className="w-full pt-16 overflow-hidden">
      {/* Hero section */}
      <div className="relative bg-black text-white text-center py-24" id="profile">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 fade-in">
            <h1 className="hero-title">{t.name}</h1>
            <p className="hero-subtitle">{t.title}</p>
            <p className="text-xl">{t.email} | {t.age}</p>
            <p className="text-lg max-w-3xl mx-auto mt-4">{t.profile}</p>
            <p className="text-xl text-theme-blue mt-2 font-medium">{t.freelance}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Link href="#contact" className="theme-button hover:scale-105 transition-transform">
                {t.contactBtn}
              </Link>
              <Link 
                href={`/cv-${lng}.pdf`}
                target="_blank" 
                className="border border-white rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                {t.resumeBtn}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background design elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-theme-blue/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-theme-blue/5 blur-3xl"></div>
      </div>

      {/* Experience Section */}
      <div className="bg-theme-gray py-16" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-theme-blue to-theme-light-blue inline-block text-transparent bg-clip-text">
            {t.experienceTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="theme-card p-8 slide-up hover:scale-[1.02] transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    {t.experience1.title}
                  </h3>
                  <p className="text-theme-dark">{t.experience1.location}</p>
                </div>
                <p className="text-sm text-gray-600">
                  {t.experience1.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                {t.experience1.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
            
            <div className="theme-card p-8 slide-up hover:scale-[1.02] transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    {t.experience2.title}
                  </h3>
                  <p className="text-theme-dark">{t.experience2.location}</p>
                </div>
                <p className="text-sm text-gray-600">
                  {t.experience2.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                {t.experience2.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 