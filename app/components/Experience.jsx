'use client';

import { useTranslation } from '../i18n/client';
import { FaBriefcase, FaCheck } from 'react-icons/fa';

export default function Experience({ lng }) {
  const { t } = useTranslation(lng);
  
  const experiences = [
    {
      title: 'Développeur Fullstack - Téïcée',
      period: 'Juillet 2022 - Juillet 2025',
      location: 'Caen, France',
      tasks: [
        'Développement Fullstack',
        'Gestion de projet SCRUM',
        'Réalisation de projets clients en VueJS, Electron, React et Symfony'
      ],
      skills: ['VueJS', 'Electron', 'React', 'Symfony', 'JavaScript', 'TypeScript', 'PHP'],
    },
    {
      title: 'Stage BTS SIO - Lycée St Agnès',
      period: 'Janvier 2022 - Février 2022',
      location: 'Vernon, France',
      tasks: [
        'Développement React',
        'MySQL'
      ],
      skills: ['React', 'MySQL'],
      website: null
    }
  ];
  
  return (
    <div className="py-16 bg-base-200" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('experience.title')}</h2>
        
        <div className="flex flex-col gap-8 w-full lg:w-3/4 mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="card bg-base-100 shadow-xl border-t-4 border-primary">
              <div className="card-body p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="bg-primary p-3 rounded-full">
                    <FaBriefcase className="text-primary-content" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="card-title text-xl">{exp.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm opacity-70 my-2">
                      <span>{exp.period}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-bold mb-2">Missions :</h4>
                      <ul className="space-y-1">
                        {exp.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start">
                            <FaCheck className="text-primary mt-1 mr-2 shrink-0" size={14} />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-bold mb-2">Compétences :</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <div key={idx} className="badge badge-primary">{skill}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {exp.website && (
                  <div className="card-actions justify-end mt-4">
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                    >
                      Visiter le site
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="alert alert-info shadow-lg mt-12 w-full lg:w-3/4 mx-auto">
          <div className="flex items-center flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <div className="flex items-center">
                <h3 className="font-bold text-lg">
                  {lng === 'fr' 
                    ? "Disponible pour des missions freelance !" 
                    : "Available for freelance projects!"}
                </h3>
              </div>
              <p className="text-sm">
                {lng === 'fr' 
                  ? "Je propose désormais mes services en tant que développeur freelance. Contactez-moi pour discuter de votre projet."
                  : "I now offer my services as a freelance developer. Contact me to discuss your project."}
              </p>
            </div>
          </div>
          <div className="ml-auto">
            <a href="#contact" className="btn btn-ghost bg-white text-info hover:bg-info hover:text-white font-medium">
              {lng === 'fr' ? "Me contacter" : "Contact me"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 