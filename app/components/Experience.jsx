'use client';

import { useTranslation } from '../i18n/client';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience({ lng }) {
  const { t } = useTranslation(lng);
  
  return (
    <div className="py-16 bg-base-200" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('experience.title')}</h2>
        
        <div className="card w-full md:w-3/4 lg:w-2/3 mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="mr-4 bg-primary p-3 rounded-full">
                <FaBriefcase className="text-primary-content" size={24} />
              </div>
              <div>
                <h3 className="card-title text-2xl">{t('experience.current')}</h3>
                <p className="opacity-70">
                  Développement d'applications web et mobiles, intégration de solutions techniques, maintenance et évolution des systèmes existants.
                </p>
              </div>
            </div>
            
            <div className="card-actions justify-end">
              <a href="https://www.teicee.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                Téïcée
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 