import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Realisations from '../components/Realisations';
import { languages, fallbackLng } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home(props) {
  const params = await props.params;
  const lng = params?.lng || fallbackLng;
  
  return (
    <>
      <Hero lng={lng} />
      <Skills lng={lng} />
      <Experience lng={lng} />
      <Education lng={lng} />
      <Realisations lng={lng} />
    </>
  );
} 