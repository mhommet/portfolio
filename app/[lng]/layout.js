import '../globals.css';
import { Inter } from 'next/font/google';
import { languages, fallbackLng } from '../i18n/settings';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Milan Hommet | Développeur Fullstack',
  description: 'Portfolio de Milan Hommet, développeur fullstack freelance. Découvrez mes services, mes compétences et mes réalisations.',
  keywords: ['développeur', 'fullstack', 'freelance', 'web', 'mobile', 'javascript', 'react', 'nextjs', 'flutter'],
  authors: [{ name: 'Milan Hommet' }],
  creator: 'Milan Hommet',
  publisher: 'Milan Hommet',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout(props) {
  const params = await props.params;
  const lng = params?.lng || fallbackLng;
  
  return (
    <html lang={lng}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  document.documentElement.setAttribute('data-theme', savedTheme);
                  document.body ? document.body.setAttribute('data-theme', savedTheme) : null;
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.body ? document.body.setAttribute('data-theme', 'dark') : null;
                }
              } catch (e) {
                console.error('Erreur lors de l\'initialisation du thème:', e);
              }
            })();
          `
        }} />
      </head>
      <body className={`${inter.className} theme-transition`}>
        <Navbar lng={lng} />
        <main>{props.children}</main>
      </body>
    </html>
  );
} 