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
        <footer className="py-8 px-6 bg-base-300 text-base-content" id="contact">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">{t('header.contact')}</h2>

                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    <div className="card bg-base-100 shadow-lg flex-1">
                        <div className="card-body p-4">
                            <h3 className="card-title text-lg mb-2">
                                {t('footer.work_together')}
                            </h3>
                            <p className="mb-3 text-sm">
                                {t('footer.project_inquiry')}
                            </p>

                            <div className="space-y-3 mt-4">
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="text-primary" size={16} />
                                    <a
                                        href={`mailto:${emailContact}`}
                                        className="link link-hover text-sm"
                                    >
                                        {emailContact}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhone className="text-primary" size={16} />
                                    <a href="tel:+33603963928" className="link link-hover text-sm">
                                        +33 6 03 96 39 28
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-primary" size={16} />
                                    <span className="text-sm">Caen, France</span>
                                </div>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <a
                                    href={`mailto:${emailContact}?subject=${encodeURIComponent(emailSubject)}`}
                                    className="btn btn-primary btn-sm"
                                >
                                    {t('footer.send_message')}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-lg flex-1">
                        <div className="card-body p-4">
                            <h3 className="card-title text-lg mb-2">
                                {t('footer.follow_me')}
                            </h3>
                            <p className="mb-3 text-sm">
                                {t('footer.social_media')}
                            </p>

                            <div className="flex gap-3 mt-4">
                                <a
                                    href="https://github.com/mhommet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm"
                                >
                                    <FaGithub className="mr-1" size={16} /> GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/milan-hommet-840414315"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm"
                                >
                                    <FaLinkedin className="mr-1" size={16} /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-sm">
                        &copy; {currentYear} Milan Hommet | {t('footer.copyright')} | {t('footer.freelance_dev')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
