import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const MobileMenu: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-l border-accent/20">
        <div className="grid gap-6 py-6">
          <a
            href="#about"
            className="flex w-full items-center py-3 text-lg font-medium hover:text-primary transition-colors"
          >
            À propos
          </a>
          <a
            href="#projects"
            className="flex w-full items-center py-3 text-lg font-medium hover:text-primary transition-colors"
          >
            Projets
          </a>
          <a
            href="#skills"
            className="flex w-full items-center py-3 text-lg font-medium hover:text-primary transition-colors"
          >
            Compétences
          </a>
          <a
            href="#contact"
            className="flex w-full items-center py-3 text-lg font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
