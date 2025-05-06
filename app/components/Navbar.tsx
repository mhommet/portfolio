'use client';

import Link from 'next/link';
import { useTranslation } from '../i18n/client';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';

interface NavbarProps {
    lng: string;
}

export default function Navbar({ lng }: NavbarProps): React.ReactElement {
    const { t } = useTranslation(lng);

    return (
        <div className="navbar bg-base-100 sticky top-0 z-30 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={`/${lng}`}>{t('header.home')}</Link>
                        </li>
                        <li>
                            <Link href={`/${lng}/#about`}>{t('header.about')}</Link>
                        </li>
                        <li>
                            <Link href={`/${lng}/#skills`}>{t('header.skills')}</Link>
                        </li>
                        <li>
                            <Link href={`/${lng}/#experience`}>{t('header.experience')}</Link>
                        </li>
                        <li>
                            <Link href={`/${lng}/#education`}>{t('header.education')}</Link>
                        </li>
                        <li>
                            <Link href={`/${lng}/#realisations`}>{t('header.realisations')}</Link>
                        </li>
                    </ul>
                </div>
                <Link href={`/${lng}`} className="btn btn-ghost normal-case text-xl hidden md:flex">
                    Milan Hommet
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={`/${lng}`}>{t('header.home')}</Link>
                    </li>
                    <li>
                        <Link href={`/${lng}/#about`}>{t('header.about')}</Link>
                    </li>
                    <li>
                        <Link href={`/${lng}/#skills`}>{t('header.skills')}</Link>
                    </li>
                    <li>
                        <Link href={`/${lng}/#experience`}>{t('header.experience')}</Link>
                    </li>
                    <li>
                        <Link href={`/${lng}/#education`}>{t('header.education')}</Link>
                    </li>
                    <li>
                        <Link href={`/${lng}/#realisations`}>{t('header.realisations')}</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex items-center gap-2 mr-2">
                    <a
                        href="https://github.com/mhommet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-circle"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-circle"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <ThemeToggle lng={lng} />
                <LanguageToggle lng={lng} />
            </div>
        </div>
    );
}
