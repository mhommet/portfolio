import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer les plugins GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  sectionId: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ sectionId }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    // S'assurer que le code s'exécute uniquement côté client
    if (typeof window === "undefined") return;

    let handleHashChange: (() => void) | null = null;

    // Attendre que le DOM soit complètement chargé
    const initAnimation = () => {
      // Récupérer l'élément de section par son ID
      sectionRef.current = document.getElementById(sectionId);

      if (!sectionRef.current) return;

      // Sélectionner les éléments à animer
      const title = sectionRef.current.querySelector("h2");
      const subtitle = sectionRef.current.querySelector(
        ".text-muted-foreground"
      );
      const content = sectionRef.current.querySelectorAll(".animate-content");

      // Créer la timeline GSAP
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Démarrer l'animation quand le haut de la section atteint 80% de la fenêtre
          end: "bottom 20%", // Terminer quand le bas atteint 20% de la fenêtre
          toggleActions: "play none none none", // Jouer l'animation une seule fois
        },
      });

      // Animation du titre
      if (title) {
        tl.fromTo(
          title,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );
      }

      // Animation du sous-titre
      if (subtitle) {
        tl.fromTo(
          subtitle,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4" // Commencer légèrement avant la fin de l'animation précédente
        );
      }

      // Animation du contenu
      if (content.length > 0) {
        tl.fromTo(
          content,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Gérer le cas où on navigue directement vers une section via le menu
      const checkAndTriggerAnimation = () => {
        if (window.location.hash === `#${sectionId}`) {
          // Forcer la lecture de l'animation immédiatement
          tl.progress(1);
          tl.play();
        }
      };

      // Déclencher l'animation si on arrive directement sur cette section
      checkAndTriggerAnimation();

      // Écouter les changements de hash pour les liens d'ancrage
      handleHashChange = () => {
        if (window.location.hash === `#${sectionId}`) {
          // Déclencher l'animation après un court délai pour laisser le temps à la page de scroller
          setTimeout(() => {
            tl.progress(1);
            tl.play();
          }, 200);
        }
      };

      window.addEventListener("hashchange", handleHashChange);
    };

    // Initialiser l'animation après un court délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(initAnimation, 100);

    // Nettoyage
    return () => {
      clearTimeout(timer);
      if (handleHashChange) {
        window.removeEventListener("hashchange", handleHashChange);
      }
      // Tuer les instances de ScrollTrigger pour éviter les fuites de mémoire
      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, [sectionId]);

  return null;
};

export default ScrollAnimation;
