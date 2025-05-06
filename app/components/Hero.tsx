'use client';

import { useTranslation } from '../i18n/client';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGlobe, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import React from 'react';

interface HeroProps {
    lng: string;
}

export default function Hero({ lng }: HeroProps): React.ReactElement {
    const { t } = useTranslation(lng);

    // Choisir le bon CV selon la langue
    const cvFile = lng === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf';
    
    // Adresse email de contact
    const emailContact = "milan.hommet@protonmail.com";
    const emailSubject = lng === 'fr' ? "Contact depuis le portfolio" : "Contact from portfolio";

    return (
        <div className="hero min-h-screen bg-base-200" id="about">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="avatar lg:-ml-8 mb-8 lg:mb-0">
                    <div className="w-64">
                        <Image
                            src="/profile.jpg"
                            alt="Milan Hommet"
                            width={300}
                            height={300}
                            className="profile-image"
                            priority
                        />
                    </div>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold">Milan Hommet</h1>
                    <div className="badge badge-primary my-2">{t('hero.job_title')}</div>
                    <p className="py-4">
                        {lng === 'fr'
                            ? "Développeur Full Stack diplômé d'un Bac+5, avec trois ans d'expérience en alternance. Je propose aujourd'hui mes services en freelance pour vos projets web et mobiles."
                            : "Full-Stack Developer with a Master's degree (Bac+5) and three years of work-study experience. I now offer my services as a freelancer for your web and mobile projects."}
                    </p>

                    <div className="bg-base-100 p-4 rounded-lg shadow-md mt-4 mb-6 border-l-4 border-primary">
                        <h2 className="font-bold flex items-center text-lg mb-2">
                            <FaBriefcase className="text-primary mr-2" size={18} />
                            {lng === 'fr' ? 'Services proposés' : 'Services offered'}
                        </h2>
                        <ul className="space-y-1 list-disc pl-5">
                            <li>
                                {lng === 'fr'
                                    ? 'Développement de sites web et applications sur mesure'
                                    : 'Custom website and application development'}
                            </li>
                            <li>
                                {lng === 'fr'
                                    ? 'Applications mobiles (Flutter, React Native)'
                                    : 'Mobile applications (Flutter, React Native)'}
                            </li>
                            <li>
                                {lng === 'fr'
                                    ? 'Audit et optimisation de code existant'
                                    : 'Code audit and optimisation'}
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2 mb-6">
                        <a
                            href="https://github.com/mhommet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/milan-hommet-840414315"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </a>
                        <a
                            href="https://hommet.ch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline"
                        >
                            <FaGlobe className="mr-2" /> hommet.ch
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <a href={cvFile} download className="btn btn-primary">
                            {t('cv.download')}
                        </a>
                        <a 
                            href={`mailto:${emailContact}?subject=${encodeURIComponent(emailSubject)}`} 
                            className="btn btn-secondary"
                        >
                            <FaEnvelope className="mr-2" />
                            {lng === 'fr' ? 'Me contacter' : 'Contact me'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
