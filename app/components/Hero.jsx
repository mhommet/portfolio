'use client';

import { useTranslation } from '../i18n/client';
import Image from 'next/image';

export default function Hero({ lng }) {
  const { t } = useTranslation(lng);
  
  // Choisir le bon CV selon la langue
  const cvFile = lng === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf';
  
  return (
    <div className="hero min-h-screen bg-base-200" id="about">
      <div className="hero-content flex-col lg:flex-row">
        <div className="avatar">
          <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image 
              src="/profile.jpg" 
              alt="Milan Hommet" 
              width={300} 
              height={300}
              className="mask mask-circle"
              priority
            />
          </div>
        </div>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{t('hero.greeting')}</h1>
          <p className="py-6">{t('hero.description')}</p>
          <div className="flex gap-4">
            <a 
              href={cvFile} 
              download 
              className="btn btn-primary"
            >
              {t('cv.download')}
            </a>
            <a 
              href="mailto:milan.hommet@protonmail.com" 
              className="btn btn-outline"
            >
              {t('header.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 