// Importations directes des traductions
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

// Type pour les traductions
type TranslationsType = {
  fr: typeof translationFR;
  en: typeof translationEN;
  [key: string]: any;
};

// Ressources de traduction
const TRANSLATIONS: TranslationsType = {
  fr: translationFR,
  en: translationEN,
};

// Fonction pour détecter la langue dans l'URL
export const getLanguageFromURL = (url?: string): "fr" | "en" => {
  if (typeof window !== "undefined" && !url) {
    url = window.location.pathname;
  }

  if (url && url.startsWith("/en")) {
    return "en";
  }

  // Vérifier si la langue est stockée dans localStorage
  if (typeof window !== "undefined") {
    const storedLang = localStorage.getItem("language");
    if (storedLang === "en" || storedLang === "fr") {
      return storedLang as "fr" | "en";
    }
  }

  // Par défaut, français
  return "fr";
};

// Fonction pour changer la langue
export const setLanguage = (lang: "fr" | "en") => {
  if (typeof window !== "undefined") {
    // Sauvegarder dans localStorage
    localStorage.setItem("language", lang);

    // Mettre à jour l'URL sans recharger la page
    const path = window.location.pathname;
    const currentUrlLang = path.match(/^\/(fr|en)(\/.*)?$/);

    if (!currentUrlLang || currentUrlLang[1] !== lang) {
      // Extraire le chemin après le préfixe de langue
      let pathWithoutLang = path;

      if (currentUrlLang) {
        pathWithoutLang = currentUrlLang[2] || "";
      }

      // Construire la nouvelle URL avec la nouvelle langue
      const newUrl = `/${lang}${pathWithoutLang}`;

      // Rediriger vers la nouvelle URL
      window.location.href = newUrl;
    }
  }
};

// Fonction de traduction côté serveur
export const t = (key: string, forceLang?: "fr" | "en"): string => {
  // Utiliser la langue forcée si fournie, sinon détecter à partir de l'URL
  const lang =
    forceLang || (typeof window !== "undefined" ? getLanguageFromURL() : "fr");

  // Gestion des clés imbriquées (ex: "header.home")
  const keys = key.split(".");
  let value: any = TRANSLATIONS[lang];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // Retourner la clé si la traduction n'est pas trouvée
    }
  }

  return typeof value === "string" ? value : key;
};
