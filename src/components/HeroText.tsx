"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/client";

export default function HeroText() {
  const { t, language } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // S'assurer que le composant est monté côté client pour éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex max-w-[980px] flex-col items-center gap-4">
      <h1
        id="hero-title"
        className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-5xl mb-4 opacity-0 animate-fade-in-up animate-delay-300"
      >
        {t("hero.greeting")}
      </h1>
      <p
        id="hero-subtitle"
        className="max-w-[700px] text-xl text-muted-foreground md:text-xl lg:text-xl opacity-0 animate-fade-in-up animate-delay-1300"
      >
        {t("hero.description")}
      </p>
    </div>
  );
}
