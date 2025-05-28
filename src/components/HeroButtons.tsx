import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";

const HeroButtons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4 opacity-0 animate-content">
      <Button
        asChild
        size="lg"
        className="px-8 py-6 text-lg font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
      >
        <a href="#contact">{t("header.contact")}</a>
      </Button>
      <Button
        variant="outline"
        size="lg"
        asChild
        className="px-8 py-6 text-lg font-medium border-primary/20 hover:border-primary/40 transition-all"
      >
        <a href="#projects">{t("header.projects")}</a>
      </Button>
    </div>
  );
};

export default HeroButtons;
