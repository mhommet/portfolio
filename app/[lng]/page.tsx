import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Realisations from '../components/Realisations';
import { languages, fallbackLng } from '../i18n/settings';
import React from 'react';

interface Params {
    lng: string;
}

export async function generateStaticParams(): Promise<Params[]> {
    return languages.map((lng) => ({ lng }));
}

interface HomeProps {
    params: Params;
}

export default async function Home({ params }: HomeProps): Promise<React.ReactElement> {
    // Accéder à params de manière asynchrone comme indiqué dans la documentation
    const { lng } = await params;
    // Utiliser la valeur par défaut si nécessaire
    const language = lng || fallbackLng;
    
    return (
        <>
            <Hero lng={language} />
            <Skills lng={language} />
            <Experience lng={language} />
            <Education lng={language} />
            <Realisations lng={language} />
        </>
    );
}
