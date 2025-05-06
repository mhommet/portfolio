"use client";

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Locale } from '../types';

interface NavbarProps {
  lng: Locale;
}

export default function Navbar({ lng }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const labels = {
    en: {
      profile: 'Profile',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    fr: {
      profile: 'Profil',
      experience: 'Expériences',
      education: 'Formation',
      skills: 'Compétences',
      contact: 'Contact',
      openMenu: 'Ouvrir menu',
      closeMenu: 'Fermer menu'
    }
  };

  const t = labels[lng];

  return (
    <header className="bg-theme-gray/80 backdrop-blur-xl fixed w-full z-50 transition duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Milan Hommet</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.09,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#profile" className="text-sm font-semibold text-theme-dark hover:text-theme-blue transition-colors duration-300">
            {t.profile}
          </Link>
          <Link href="#experience" className="text-sm font-semibold text-theme-dark hover:text-theme-blue transition-colors duration-300">
            {t.experience}
          </Link>
          <Link href="#education" className="text-sm font-semibold text-theme-dark hover:text-theme-blue transition-colors duration-300">
            {t.education}
          </Link>
          <Link href="#skills" className="text-sm font-semibold text-theme-dark hover:text-theme-blue transition-colors duration-300">
            {t.skills}
          </Link>
          <Link href="#contact" className="text-sm font-semibold text-theme-dark hover:text-theme-blue transition-colors duration-300">
            {t.contact}
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <button 
            type="button" 
            className="lg:hidden -m-2.5 rounded-md p-2.5 text-theme-dark"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t.openMenu}</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/en" className="hidden lg:block text-sm font-semibold leading-6 text-theme-dark hover:text-theme-blue mr-4 transition-colors duration-300">
            EN
          </Link>
          <Link href="/fr" className="hidden lg:block text-sm font-semibold leading-6 text-theme-dark hover:text-theme-blue transition-colors duration-300">
            FR
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-lg" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-10"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-10"
          >
            <Dialog.Panel className="fixed inset-x-0 top-0 z-50 overflow-y-auto bg-white px-6 py-6 shadow-lg">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Milan Hommet</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.09,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">{t.closeMenu}</span>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 space-y-2">
                <Link 
                  href="#profile"
                  className="block rounded-lg py-2 pl-3 pr-4 text-base font-semibold text-theme-dark hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.profile}
                </Link>
                <Link 
                  href="#experience"
                  className="block rounded-lg py-2 pl-3 pr-4 text-base font-semibold text-theme-dark hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.experience}
                </Link>
                <Link 
                  href="#education"
                  className="block rounded-lg py-2 pl-3 pr-4 text-base font-semibold text-theme-dark hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.education}
                </Link>
                <Link 
                  href="#skills"
                  className="block rounded-lg py-2 pl-3 pr-4 text-base font-semibold text-theme-dark hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.skills}
                </Link>
                <Link 
                  href="#contact"
                  className="block rounded-lg py-2 pl-3 pr-4 text-base font-semibold text-theme-dark hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.contact}
                </Link>
                <div className="flex space-x-4 mt-6 pl-3">
                  <Link 
                    href="/en"
                    className="text-base font-semibold text-theme-dark hover:text-theme-blue"
                  >
                    EN
                  </Link>
                  <Link 
                    href="/fr"
                    className="text-base font-semibold text-theme-dark hover:text-theme-blue"
                  >
                    FR
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
} 