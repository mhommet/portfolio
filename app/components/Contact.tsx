"use client";

import { Locale, SocialLink } from '../types';

interface ContactProps {
  lng: Locale;
}

export default function Contact({ lng }: ContactProps) {
  const content = {
    en: {
      title: "Contact",
      subtitle: "Get in touch with me",
      freelanceTitle: "Freelance Availability",
      freelanceText: "I am currently available for freelance projects. Feel free to contact me to discuss your needs.",
      email: "Email",
      socialTitle: "Social Media",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/milan-hommet-840414315/"
        },
        {
          name: "Website",
          url: "https://hommet.ch"
        },
        {
          name: "GitHub",
          url: "https://github.com/mhommet"
        }
      ] as SocialLink[],
      copyright: "© {year} Milan Hommet. All rights reserved."
    },
    fr: {
      title: "Contact",
      subtitle: "Contactez-moi",
      freelanceTitle: "Disponibilité Freelance",
      freelanceText: "Je suis actuellement disponible pour des projets en freelance. N'hésitez pas à me contacter pour discuter de vos besoins.",
      email: "Email",
      socialTitle: "Réseaux sociaux",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/milan-hommet-840414315/"
        },
        {
          name: "Site web",
          url: "https://hommet.ch"
        },
        {
          name: "GitHub",
          url: "https://github.com/mhommet"
        }
      ] as SocialLink[],
      copyright: "© {year} Milan Hommet. Tous droits réservés."
    }
  };

  const t = content[lng];
  const currentYear = new Date().getFullYear();
  const copyright = t.copyright.replace('{year}', currentYear.toString());

  return (
    <div className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-theme-blue to-theme-light-blue inline-block text-transparent bg-clip-text">
          {t.title}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">{t.subtitle}</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="theme-card p-8 slide-up hover:scale-[1.02] transition-all">
            <div className="mb-8 pb-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-theme-dark mb-4">{t.freelanceTitle}</h3>
              <p className="text-gray-700">{t.freelanceText}</p>
            </div>
            
            <h3 className="text-xl font-semibold text-theme-dark mb-6">{t.email}</h3>
            <a 
              href="mailto:milan.hommet@protonmail.com" 
              className="flex items-center text-theme-blue hover:text-theme-light-blue transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>milan.hommet@protonmail.com</span>
            </a>
            
            <h3 className="text-xl font-semibold text-theme-dark mt-8 mb-6">{t.socialTitle}</h3>
            <div className="space-y-4">
              {t.socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-theme-blue hover:text-theme-light-blue transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>{copyright}</p>
        </div>
      </div>
    </div>
  );
} 