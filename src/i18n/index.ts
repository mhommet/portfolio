import frTranslation from "./locales/fr/translation.json";
import enTranslation from "./locales/en/translation.json";

const TRANSLATIONS = {
  fr: frTranslation,
  en: enTranslation,
};

// Default language
let currentLanguage = "fr";

// Get current language from localStorage if available
const getLanguage = () => {
  if (typeof window !== "undefined") {
    const storedLang = localStorage.getItem("language");
    return storedLang || currentLanguage;
  }
  return currentLanguage;
};

// Set language
export const setLanguage = (lang: "fr" | "en") => {
  currentLanguage = lang;
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
};

// Get translation
export const t = (key: string, params?: Record<string, string>) => {
  const language = getLanguage();

  // Split key by dots to access nested properties
  const keys = key.split(".");
  let translation: any = TRANSLATIONS[language as "fr" | "en"];

  // Navigate through the translation object
  for (const k of keys) {
    if (!translation || !translation[k]) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    translation = translation[k];
  }

  // Replace params in translation
  if (params && typeof translation === "string") {
    return Object.entries(params).reduce(
      (acc, [key, value]) => acc.replace(new RegExp(`{{${key}}}`, "g"), value),
      translation
    );
  }

  return translation;
};

export default {
  t,
  setLanguage,
};
