import '../globals.css';
import { Inter } from 'next/font/google';
import { languages, fallbackLng } from '../i18n/settings';
import { Locale } from '../types';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: 'Milan Hommet | Développeur Fullstack',
  description: 'Portfolio de Milan Hommet, développeur fullstack basé en France.',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: Locale;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const lng = params?.lng || fallbackLng;
  
  return (
    <html lang={lng} data-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 