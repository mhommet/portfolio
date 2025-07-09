import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const RotatingSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return; // Créer la scène
    const scene = new THREE.Scene();
    // Pas de fond pour laisser le fond du site visible

    // Créer la caméra
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5; // Créer le renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Fond transparent
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.innerHTML = ""; // Vider le conteneur au cas où
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Créer les segments comme dans l'exemple
    const widthSegments = 32;
    const heightSegments = 16;

    // Créer la géométrie de la sphère
    const geometry = new THREE.SphereGeometry(
      1.2,
      widthSegments,
      heightSegments
    );

    // Créer le wireframe pour le style grille
    const wireframe = new THREE.WireframeGeometry(geometry);

    // Créer une ligne à partir du wireframe
    const line = new THREE.LineSegments(
      wireframe,
      new THREE.LineBasicMaterial({ color: 0xffffff })
    );

    scene.add(line);

    // Créer une sphère solide à l'intérieur (optionnel, pour plus d'effet)
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.5,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation de la sphère
    const animate = () => {
      line.rotation.x += 0.005;
      line.rotation.y += 0.01;

      if (sphere) {
        sphere.rotation.x = line.rotation.x;
        sphere.rotation.y = line.rotation.y;
      }

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Gérer le redimensionnement
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-64 md:h-72 lg:h-80 flex items-center justify-center mt-8"
    />
  );
};

export default RotatingSphere;
