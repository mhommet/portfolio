'use client';

import { useTranslation } from '../i18n/client';
import { FaCode, FaMobile, FaDesktop, FaGlobe, FaDatabase } from 'react-icons/fa';

export default function Skills({ lng }) {
  const { t } = useTranslation(lng);
  
  return (
    <div className="py-16 bg-base-100" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <FaCode className="text-primary mr-3" size={28} />
                <h3 className="card-title">{t('skills.languages').split(':')[0]}</h3>
              </div>
              <p>{t('skills.languages').split(':')[1]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="badge badge-primary">Python</div>
                <div className="badge badge-primary">JavaScript</div>
                <div className="badge badge-primary">TypeScript</div>
                <div className="badge badge-primary">Dart</div>
                <div className="badge badge-primary">PHP</div>
                <div className="badge badge-primary">C#</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <FaMobile className="text-primary mr-3" size={28} />
                <h3 className="card-title">{t('skills.mobile').split(':')[0]}</h3>
              </div>
              <p>{t('skills.mobile').split(':')[1]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="badge badge-primary">Flutter</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <FaDesktop className="text-primary mr-3" size={28} />
                <h3 className="card-title">{t('skills.software').split(':')[0]}</h3>
              </div>
              <p>{t('skills.software').split(':')[1]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="badge badge-primary">Electron</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <FaGlobe className="text-primary mr-3" size={28} />
                <h3 className="card-title">{t('skills.web').split(':')[0]}</h3>
              </div>
              <p>{t('skills.web').split(':')[1]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="badge badge-primary">React</div>
                <div className="badge badge-primary">Symfony</div>
                <div className="badge badge-primary">VueJS</div>
                <div className="badge badge-primary">NextJS</div>
                <div className="badge badge-primary">NodeJS</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-primary mr-3" size={28} />
                <h3 className="card-title">{t('skills.database').split(':')[0]}</h3>
              </div>
              <p>{t('skills.database').split(':')[1]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="badge badge-primary">MySQL</div>
                <div className="badge badge-primary">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 