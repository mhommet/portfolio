"use client";

import { Locale, EducationItem } from '../types';

interface EducationProps {
  lng: Locale;
}

export default function Education({ lng }: EducationProps) {
  const content = {
    en: {
      title: "Education",
      items: [
        {
          title: "MBA in Full-Stack Development – Work-Study Program",
          institution: "MyDigitalSchool",
          location: "Caen, France",
          period: "Sept. 2023 - Jul. 2025",
          description: [
            "Project Management",
            "Web, Mobile, and Embedded development",
            "Flutter, NextJS, TypeScript, Python, Arduino, React"
          ]
        },
        {
          title: "Bachelor in Application Design and Development – Work-Study Program",
          institution: "MyDigitalSchool",
          location: "Caen, France",
          period: "Sept. 2022 - Jul. 2023",
          description: [
            "Web and mobile development",
            "Flutter, Python, Javascript, CICD Gitlab"
          ]
        },
        {
          title: "BTEC Higher National Diploma in IT Services for Organizations (BTS SIO - SLAM, France)",
          institution: "Etablissement Saint Adjutor",
          location: "Vernon, France",
          period: "Sept. 2020 - Jul. 2022",
          description: [
            "Web and software development",
            "Symfony, React, Ionic, C#, MySQL"
          ]
        }
      ] as EducationItem[]
    },
    fr: {
      title: "Formation",
      items: [
        {
          title: "MBA Développeur Fullstack - Alternance",
          institution: "MyDigitalSchool",
          location: "Caen, France",
          period: "Sept. 2023 - Juil. 2025",
          description: [
            "Gestion de projet",
            "Développement web, mobile et embarqué",
            "Flutter, NextJS, TypeScript, Python, Arduino, React"
          ]
        },
        {
          title: "Bachelor Concepteur développeur d'applications - Alternance",
          institution: "MyDigitalSchool",
          location: "Caen, France",
          period: "Sept. 2022 - Juil. 2023",
          description: [
            "Développement web et mobile",
            "Flutter, Python, Javascript, CICD Gitlab"
          ]
        },
        {
          title: "BTS SIO",
          institution: "Etablissement Saint Adjutor",
          location: "Vernon, France",
          period: "Sept. 2020 - Juil. 2022",
          description: [
            "Développement web et logiciel",
            "Symfony, React, Ionic, C#, MySQL"
          ]
        }
      ] as EducationItem[]
    }
  };

  const t = content[lng];

  return (
    <div className="py-20 bg-white" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-theme-blue to-theme-light-blue inline-block text-transparent bg-clip-text">
          {t.title}
        </h2>
        
        <div className="relative">
          {/* Timeline verticale */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-theme-gray"></div>
          
          <div className="space-y-12">
            {t.items.map((item, index) => (
              <div 
                key={index} 
                className={`relative ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex flex-col md:flex items-center`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                  <div 
                    className="theme-card p-8 slide-up hover:scale-[1.02] transition-all" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col space-y-2">
                      <h3 className="text-xl font-semibold text-theme-dark">{item.title}</h3>
                      <p className="text-theme-blue font-medium">{item.institution}</p>
                      <p className="text-gray-600">{item.location}</p>
                      <p className="text-sm text-gray-500">{item.period}</p>
                      <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Timeline middle dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 rounded-full bg-theme-blue"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 