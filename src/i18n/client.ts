import { useState, useEffect, useCallback } from "react";
import {
  t as serverT,
  setLanguage as serverSetLanguage,
  getLanguageFromURL,
} from "./index";

/**
 * Hook pour utiliser les traductions dans les composants React
 * Permet de réagir aux changements de langue
 */
export function useTranslation() {
  const [language, setLanguage] = useState<"fr" | "en">(() => {
    // Initialisation avec la langue actuelle au montage du composant
    return getLanguageFromURL();
  });

  // Effet pour écouter les changements de langue
  useEffect(() => {
    const handleLanguageChange = () => {
      const newLang = getLanguageFromURL();
      setLanguage(newLang);
    };

    // S'abonner à l'événement de changement de langue
    window.addEventListener("languageChanged", handleLanguageChange);

    // Initialiser la langue au montage
    const initialLang = getLanguageFromURL();
    setLanguage(initialLang);

    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, []);

  // Fonction pour changer la langue avec optimisation via useCallback
  const changeLanguage = useCallback(
    (newLang: "fr" | "en") => {
      if (newLang === language) return;

      // Mettre à jour l'état local
      setLanguage(newLang);

      // Utiliser la fonction du fichier index.ts
      serverSetLanguage(newLang);

      // Déclencher un événement pour informer les autres composants
      window.dispatchEvent(new Event("languageChanged"));

      console.log("Langue changée pour:", newLang);
    },
    [language],
  );

  // Fonction de traduction optimisée avec useCallback
  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      return serverT(key);
    },
    [language],
  );

  return { t, language, changeLanguage };
}
