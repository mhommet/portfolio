import React, { useState } from "react";

interface MenuItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  items: MenuItem[];
  lang: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    const href = target.getAttribute("href");

    if (href && href.includes("#")) {
      e.preventDefault();

      // Fermer le menu mobile
      setIsOpen(false);

      // Extraire l'ID de la section
      const sectionId = href.split("#")[1];
      const section = document.getElementById(sectionId);

      if (section) {
        // Scroll fluide vers la section
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Mettre à jour l'URL
        window.history.pushState(null, "", href);

        // Déclencher l'événement hashchange pour activer les animations
        setTimeout(() => {
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        }, 300);
      }
    } else {
      // Comportement normal pour les autres liens
      toggleMenu();
    }
  };

  return (
    <>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-foreground lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
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
        >
          {isOpen ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 12h16M4 6h16M4 18h16" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto pb-6 shadow-md animate-in slide-in-from-top-1 lg:hidden">
          <div className="relative z-20 bg-background p-6">
            <nav className="grid gap-6 text-lg font-medium">
              {" "}
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex w-full items-center rounded-md py-2 text-foreground hover:text-primary"
                  onClick={handleAnchorClick}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
