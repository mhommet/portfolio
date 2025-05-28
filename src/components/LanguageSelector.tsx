"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "@/i18n/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface LanguageSelectorProps {
  initialLang?: string;
}

export default function LanguageSelector({
  initialLang = "fr",
}: LanguageSelectorProps) {
  const { t, language, changeLanguage } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // S'assurer que le composant est monté pour éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true);

    // Log pour déboguer
    console.log("LanguageSelector monté, langue actuelle:", language);
  }, []);

  useEffect(() => {
    // Initialiser la langue si nécessaire
    if (
      mounted &&
      initialLang &&
      (initialLang === "fr" || initialLang === "en") &&
      initialLang !== language
    ) {
      console.log("Initialisation de la langue:", initialLang);
      changeLanguage(initialLang as "fr" | "en");
    }
  }, [initialLang, language, changeLanguage, mounted]);

  const switchLanguage = (lang: "fr" | "en") => {
    if (lang === language) return; // Ne rien faire si la langue est déjà sélectionnée

    console.log("Changement de langue vers:", lang);

    // Mettre à jour localStorage avant la navigation
    localStorage.setItem("language", lang);

    // Changer l'URL pour refléter la nouvelle langue
    const currentPath = window.location.pathname;

    // Extraire le chemin après le préfixe de langue
    let pathWithoutLang = currentPath;
    const langMatch = currentPath.match(/^\/(fr|en)(\/.*)?$/);

    if (langMatch) {
      // Si on a trouvé un préfixe de langue, on récupère le reste du chemin
      pathWithoutLang = langMatch[2] || "";
    }

    // Construire la nouvelle URL avec la nouvelle langue
    const newUrl = `/${lang}${pathWithoutLang}`;

    console.log("Redirection vers:", newUrl);

    // Rediriger vers la nouvelle URL au lieu d'utiliser pushState
    window.location.href = newUrl;
  };

  // N'afficher le sélecteur que lorsque le composant est monté
  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
          <Globe className="h-4 w-4" />
          <span className="sr-only">{t("language.switch")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchLanguage("fr")}
          className={language === "fr" ? "bg-muted" : ""}
        >
          {t("language.fr")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className={language === "en" ? "bg-muted" : ""}
        >
          {t("language.en")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
