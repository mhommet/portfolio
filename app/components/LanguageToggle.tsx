'use client';

import { useTranslation } from '../i18n/client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface LanguageToggleProps {
    lng: string;
}

export default function LanguageToggle({ lng }: LanguageToggleProps): React.ReactElement {
    const { t } = useTranslation(lng);
    const router = useRouter();

    // Fonction pour changer de langue tout en préservant le thème
    const changeLanguage = (newLang: string) => {
        // Stocker explicitement le thème actuel pour s'assurer qu'il soit préservé
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        localStorage.setItem('theme', currentTheme);
        
        // Naviguer vers la nouvelle langue
        router.push(`/${newLang}`);
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                </svg>
                <span className="ml-1">{lng === 'fr' ? 'FR' : 'EN'}</span>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <button 
                        onClick={() => changeLanguage('fr')} 
                        className={lng === 'fr' ? 'active' : ''}
                    >
                        {t('language.fr')}
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => changeLanguage('en')} 
                        className={lng === 'en' ? 'active' : ''}
                    >
                        {t('language.en')}
                    </button>
                </li>
            </ul>
        </div>
    );
}
