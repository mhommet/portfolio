import '../globals.css';
import { Inter } from 'next/font/google';
import { languages, fallbackLng } from '../i18n/settings';
import Navbar from '../components/Navbar';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Milan Hommet | Développeur Fullstack',
    description:
        'Portfolio de Milan Hommet, développeur fullstack freelance. Découvrez mes services, mes compétences et mes réalisations.',
    keywords: [
        'développeur',
        'fullstack',
        'freelance',
        'web',
        'mobile',
        'javascript',
        'react',
        'nextjs',
        'flutter',
    ],
    authors: [{ name: 'Milan Hommet' }],
    creator: 'Milan Hommet',
    publisher: 'Milan Hommet',
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
};

type Params = Promise<{lng: string}>;

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
    children: ReactNode;
    params: Params;
}

export default async function RootLayout({
    children,
    params,
}: RootLayoutProps): Promise<React.ReactElement> {
    // Accéder à params de manière asynchrone
    const { lng } = await params;
    // Utiliser la valeur par défaut si nécessaire
    const language = lng || fallbackLng;
    
    return (
        <html lang={language} className="theme-transition">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            (function() {
              try {
                // Vérifie si un thème a été sauvegardé dans le localStorage
                var savedTheme = localStorage.getItem('theme');
                
                // Si un thème a été sauvegardé, l'utiliser
                if (savedTheme) {
                  document.documentElement.setAttribute('data-theme', savedTheme);
                  document.body && document.body.setAttribute('data-theme', savedTheme);
                } 
                // Sinon, vérifier les préférences système (thème sombre/clair)
                else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  // Si le navigateur préfère le thème sombre, l'appliquer
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.body && document.body.setAttribute('data-theme', 'dark');
                  // Et l'enregistrer dans localStorage pour les prochaines visites
                  localStorage.setItem('theme', 'dark');
                } else {
                  // Sinon, utiliser le thème clair par défaut
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.body && document.body.setAttribute('data-theme', 'light');
                  // Et l'enregistrer dans localStorage pour les prochaines visites
                  localStorage.setItem('theme', 'light');
                }
                
                // Ajouter un écouteur pour les changements de préférence système
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                  // Ne pas modifier si l'utilisateur a déjà un thème sauvegardé (choix manuel)
                  if (!localStorage.getItem('theme')) {
                    var newTheme = e.matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    document.body && document.body.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                  }
                });
              } catch (e) {
                console.error('Erreur lors de l\'initialisation du thème:', e);
              }
            })();
          `,
                    }}
                />
            </head>
            <body className={`${inter.className} theme-transition`}>
                <Navbar lng={language} />
                <main>{children}</main>
            </body>
        </html>
    );
}
