'use client';

import { useTranslation } from '../i18n/client';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';

interface FooterProps {
    lng: string;
}

export default function Footer({ lng }: FooterProps): React.ReactElement {
    const { t } = useTranslation(lng);
    const currentYear = new Date().getFullYear();
    
    // Adresse email de contact et sujet
    const emailContact = "milan.hommet@protonmail.com";
    const emailSubject = lng === 'fr' ? "Contact depuis le portfolio" : "Contact from portfolio";
    
    return (
        <footer className="p-10 bg-base-300 text-base-content" id="contact">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">{t('header.contact')}</h2>

                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                    <div className="card bg-base-100 shadow-lg flex-1">
                        <div className="card-body">
                            <h3 className="card-title text-xl mb-4">
                                {lng === 'fr' ? 'Travaillons ensemble' : "Let's work together"}
                            </h3>
                            <p className="mb-4">
                                {lng === 'fr'
                                    ? "Vous avez un projet? N'hésitez pas à me contacter pour discuter de vos besoins et voir comment je peux vous aider."
                                    : 'Do you have a project? Feel free to contact me to discuss your needs and see how I can help.'}
                            </p>

                            <div className="space-y-4 mt-6">
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-primary" size={20} />
                                    <a
                                        href={`mailto:${emailContact}`}
                                        className="link link-hover"
                                    >
                                        {emailContact}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhone className="text-primary" size={20} />
                                    <a href="tel:+33000000000" className="link link-hover">
                                        +33 00 00 00 00 00
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-primary" size={20} />
                                    <span>Caen, France</span>
                                </div>
                            </div>

                            <div className="card-actions justify-end mt-6">
                                <a
                                    href={`mailto:${emailContact}?subject=${encodeURIComponent(emailSubject)}`}
                                    className="btn btn-primary"
                                >
                                    {lng === 'fr' ? 'Envoyer un message' : 'Send a message'}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg flex-1">
                        <div className="card-body">
                            <h3 className="card-title text-xl mb-4">
                                {lng === 'fr' ? 'Suivez-moi' : 'Follow me'}
                            </h3>
                            <p className="mb-4">
                                {lng === 'fr'
                                    ? 'Retrouvez-moi sur les réseaux sociaux pour suivre mes projets et actualités.'
                                    : 'Find me on social media to follow my projects and news.'}
                            </p>

                            <div className="flex gap-4 mt-6">
                                <a
                                    href="https://github.com/mhommet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                >
                                    <FaGithub className="mr-2" size={20} /> GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/milan-hommet-840414315"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                >
                                    <FaLinkedin className="mr-2" size={20} /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p>
                        &copy; {currentYear} Milan Hommet |{' '}
                        {lng === 'fr'
                            ? 'Développeur Fullstack Freelance'
                            : 'Freelance Fullstack Developer'}
                    </p>
                </div>
            </div>
        </footer>
    );
}
