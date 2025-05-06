import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { Locale } from '../types';

type PageProps = {
  params: {
    lng: Locale;
  };
}

export default function LangPage({ params: { lng } }: PageProps) {
  return (
    <main className="min-h-screen">
      <Navbar lng={lng} />
      <Hero lng={lng} />
      <Education lng={lng} />
      <Skills lng={lng} />
      <Contact lng={lng} />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { lng: 'en' },
    { lng: 'fr' }
  ] as const;
} 