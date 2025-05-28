import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";

const HeroButtons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-4">
      <Button
        asChild
        size="lg"
        className="px-8 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
      >
        <a href="#contact">{t("header.contact")}</a>
      </Button>
      <Button
        variant="outline"
        size="lg"
        asChild
        className="px-8 font-medium border-primary/20 hover:border-primary/40 transition-all"
      >
        <a href="#projects">{t("header.projects")}</a>
      </Button>
    </div>
  );
};

export default HeroButtons;
