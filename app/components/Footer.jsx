'use client';

import { useTranslation } from '../i18n/client';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer({ lng }) {
  const { t } = useTranslation(lng);
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content" id="contact">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a 
            href="https://github.com/mhommet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle text-xl"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle text-xl"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:milan.hommet@protonmail.com" 
            className="btn btn-ghost btn-circle text-xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div>
        <p className="text-center">
          &copy; {currentYear} Milan Hommet | {t('header.contact')}: milan.hommet@protonmail.com
        </p>
      </div>
    </footer>
  );
} 