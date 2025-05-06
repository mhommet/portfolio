'use client';

import Link from 'next/link';
import { useTranslation } from '../i18n/client';

export default function LanguageToggle({ lng }) {
  const { t } = useTranslation(lng);
  
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="ml-1">{lng === 'fr' ? 'FR' : 'EN'}</span>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link href={`/fr`} className={lng === 'fr' ? 'active' : ''}>
            {t('language.fr')}
          </Link>
        </li>
        <li>
          <Link href={`/en`} className={lng === 'en' ? 'active' : ''}>
            {t('language.en')}
          </Link>
        </li>
      </ul>
    </div>
  );
} 