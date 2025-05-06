'use client';

import { useTranslation } from '../i18n/client';

export default function Education({ lng }) {
  const { t } = useTranslation(lng);
  
  return (
    <div className="py-16 bg-base-100" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('education.title')}</h2>
        
        <div className="timeline timeline-vertical">
          <div className="timeline-item">
            <div className="timeline-middle">
              <div className="badge badge-primary">2025</div>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="text-lg font-bold">{t('education.mba')}</div>
            </div>
            <hr/>
          </div>
          
          <div className="timeline-item">
            <hr/>
            <div className="timeline-middle">
              <div className="badge badge-primary">2023</div>
            </div>
            <div className="timeline-end mb-10">
              <div className="text-lg font-bold">{t('education.bachelor')}</div>
            </div>
            <hr/>
          </div>
          
          <div className="timeline-item">
            <hr/>
            <div className="timeline-middle">
              <div className="badge badge-primary">2022</div>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="text-lg font-bold">{t('education.bts')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 