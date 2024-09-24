"use client";
import { useState, useEffect } from "react";

import { useTheme } from "next-themes";

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    // Ajout de l'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 bg-orange-500 ${
            theme === "light" ? "text-white" : "text-white"
          } rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition duration-300`}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTop;
