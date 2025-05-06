'use client';

import { useTranslation } from '../i18n/client';
import { FaGithub } from 'react-icons/fa';

export default function Projects({ lng }) {
  const { t } = useTranslation(lng);
  
  const projects = [
    {
      name: 'portfolio',
      description: t('projects.portfolio'),
      url: 'https://github.com/mhommet/portfolio'
    },
    {
      name: 'dotfiles',
      description: t('projects.dotfiles'),
      url: 'https://github.com/mhommet/dotfiles'
    },
    {
      name: 'impact',
      description: t('projects.impact'),
      url: 'https://github.com/mhommet/impact'
    },
    {
      name: 'SysAdmin',
      description: t('projects.sysadmin'),
      url: 'https://github.com/mhommet/SysAdmin'
    },
    {
      name: 'skeletortheme',
      description: t('projects.skeletortheme'),
      url: 'https://github.com/mhommet/skeletortheme'
    },
    {
      name: 'ChatAII',
      description: t('projects.chataII'),
      url: 'https://github.com/mhommet/ChatAII'
    },
    {
      name: 'esp32_wifi',
      description: t('projects.esp32'),
      url: 'https://github.com/mhommet/esp32_wifi'
    },
    {
      name: 'Piction.ia.ry',
      description: t('projects.pictionary'),
      url: 'https://github.com/mhommet/Piction.ia.ry'
    }
  ];
  
  return (
    <div className="py-16 bg-base-200" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p>{project.description}</p>
                <div className="card-actions justify-end mt-4">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 