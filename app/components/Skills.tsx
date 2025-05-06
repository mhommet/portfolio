"use client";

import { Locale, SkillCategory } from '../types';

interface SkillsProps {
  lng: Locale;
}

export default function Skills({ lng }: SkillsProps) {
  const content = {
    en: {
      title: "Skills",
      categories: [
        {
          name: "Programming Languages",
          skills: ["JavaScript", "TypeScript", "Python", "PHP", "Dart"]
        },
        {
          name: "Frameworks & Libraries",
          skills: ["Symfony", "React", "VueJS", "Electron", "Flutter", "NodeJS", "NextJS"]
        },
        {
          name: "Databases",
          skills: ["MySQL", "MongoDB"]
        },
        {
          name: "DevOps",
          skills: ["Gitlab CICD", "Github Actions", "Linux"]
        }
      ] as SkillCategory[],
      languages: {
        title: "Languages",
        items: ["English | Toeic 945"]
      },
      interests: {
        title: "Interests",
        items: ["Video Games", "Sport", "CLI Tools", "Linux"]
      }
    },
    fr: {
      title: "Compétences",
      categories: [
        {
          name: "Langages de programmation",
          skills: ["JavaScript", "TypeScript", "Python", "PHP", "Dart"]
        },
        {
          name: "Frameworks & Librairies",
          skills: ["Symfony", "React", "VueJS", "Electron", "Flutter", "NodeJS", "NextJS"]
        },
        {
          name: "Bases de données",
          skills: ["MySQL", "MongoDB"]
        },
        {
          name: "DevOps",
          skills: ["Gitlab CICD", "Github Actions", "Linux"]
        }
      ] as SkillCategory[],
      languages: {
        title: "Langues",
        items: ["Anglais | Toeic 945"]
      },
      interests: {
        title: "Centres d'intérêt",
        items: ["Jeux vidéos", "Sport", "Outils CLI", "Linux"]
      }
    }
  };

  const t = content[lng];

  return (
    <div className="py-20 bg-theme-gray" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-theme-blue to-theme-light-blue inline-block text-transparent bg-clip-text">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.categories.map((category, index) => (
            <div 
              key={index} 
              className="theme-card p-8 slide-up hover:scale-[1.02] transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-theme-dark mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-white px-3 py-1 rounded-full text-theme-dark border border-gray-200 text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="theme-card p-8 slide-up hover:scale-[1.02] transition-all" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold text-theme-dark mb-4">{t.languages.title}</h3>
            <div className="flex flex-wrap gap-2">
              {t.languages.items.map((item, i) => (
                <span 
                  key={i} 
                  className="bg-white px-3 py-1 rounded-full text-theme-dark border border-gray-200 text-sm font-medium hover:shadow-md transition-shadow"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="theme-card p-8 slide-up hover:scale-[1.02] transition-all" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-semibold text-theme-dark mb-4">{t.interests.title}</h3>
            <div className="flex flex-wrap gap-2">
              {t.interests.items.map((item, i) => (
                <span 
                  key={i} 
                  className="bg-white px-3 py-1 rounded-full text-theme-dark border border-gray-200 text-sm font-medium hover:shadow-md transition-shadow"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 