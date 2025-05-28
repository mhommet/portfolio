import frTranslation from "./i18n/locales/fr/translation.json";
import enTranslation from "./i18n/locales/en/translation.json";

type TranslationsType = {
  fr: typeof frTranslation;
  en: typeof enTranslation;
  [key: string]: any;
};

const TRANSLATIONS: TranslationsType = {
  fr: frTranslation,
  en: enTranslation,
};

// Default language
let currentLanguage = "fr";

// Détecte si le code s'exécute côté client ou serveur
const isClient = typeof window !== "undefined";

// Fonction pour extraire la langue de l'URL
const getLangFromUrl = (): "fr" | "en" => {
  if (isClient) {
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(fr|en)(\/.*)?$/);
    if (langMatch && (langMatch[1] === "fr" || langMatch[1] === "en")) {
      return langMatch[1];
    }
  }
  return "fr";
};

// Initialisation au démarrage - priorité à l'URL, puis localStorage
if (isClient) {
  try {
    // Vérifier d'abord l'URL
    const urlLang = getLangFromUrl();
    if (urlLang) {
      currentLanguage = urlLang;
      console.log("Langue détectée dans l'URL:", urlLang);
      // Mettre à jour localStorage pour être cohérent
      localStorage.setItem("language", urlLang);
    } else {
      // Ensuite vérifier localStorage
      const storedLang = localStorage.getItem("language");
      if (storedLang === "fr" || storedLang === "en") {
        currentLanguage = storedLang;
        console.log("Langue récupérée du localStorage:", storedLang);
      }
    }
    console.log("Langue initialisée:", currentLanguage);
  } catch (error) {
    console.error("Erreur lors de la lecture de la langue:", error);
  }
}

// Get current language from localStorage if available
const getLanguage = (): "fr" | "en" => {
  if (isClient) {
    try {
      // Vérifier d'abord l'URL
      const urlLang = getLangFromUrl();
      if (urlLang) {
        return urlLang;
      }

      // Ensuite vérifier localStorage
      const storedLang = localStorage.getItem("language");
      if (storedLang === "fr" || storedLang === "en") {
        return storedLang;
      }
    } catch (error) {
      console.error("Erreur lors de la lecture de la langue:", error);
    }
  }
  return currentLanguage as "fr" | "en";
};

// Set language
export const setLanguage = (lang: "fr" | "en") => {
  currentLanguage = lang;
  if (isClient) {
    try {
      localStorage.setItem("language", lang);

      // Mettre à jour l'URL si nécessaire
      const path = window.location.pathname;
      const currentUrlLang = path.match(/^\/(fr|en)(\/.*)?$/);

      if (!currentUrlLang || currentUrlLang[1] !== lang) {
        // Extraire le chemin après le préfixe de langue
        let pathWithoutLang = path;

        if (currentUrlLang) {
          // Si on a trouvé un préfixe de langue, on récupère le reste du chemin
          pathWithoutLang = currentUrlLang[2] || "";
        }

        // Construire la nouvelle URL avec la nouvelle langue
        const newUrl = `/${lang}${pathWithoutLang}`;

        console.log("URL mise à jour:", newUrl);

        // Mettre à jour l'URL sans recharger la page
        window.history.pushState({}, "", newUrl);

        // Déclencher un événement pour que les composants réagissent
        window.dispatchEvent(new Event("languageChanged"));
      }

      console.log("Langue changée pour:", lang);
      document.documentElement.setAttribute("lang", lang);
    } catch (error) {
      console.error("Erreur lors de l'écriture de la langue:", error);
    }
  }
};

// Recursive function to get nested translations
const getNestedTranslation = (
  keys: string[],
  translations: any
): string | undefined => {
  if (keys.length === 0) return undefined;
  if (keys.length === 1) return translations[keys[0]];

  const [current, ...rest] = keys;
  const nextLevel = translations[current];

  if (nextLevel === undefined) return undefined;
  return getNestedTranslation(rest, nextLevel);
};

// Translate function
export const t = (key: string, params?: Record<string, string>): string => {
  const keys = key.split(".");
  const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.fr;
  const translation = getNestedTranslation(keys, translations);

  if (translation === undefined) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }

  if (params) {
    return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
      return acc.replace(new RegExp(`{{${paramKey}}}`, "g"), paramValue);
    }, translation);
  }

  return translation;
};

export default {
  t,
  setLanguage,
  getLanguage,
};
