// "use client";
// import { useState, useEffect } from "react";

// import { useTheme } from "next-themes";

// const BackToTop = () => {
//   const [showTopBtn, setShowTopBtn] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 400) {
//         setShowTopBtn(true);
//       } else {
//         setShowTopBtn(false);
//       }
//     };

//     // Ajout de l'événement de défilement
//     window.addEventListener("scroll", handleScroll);

//     // Nettoyage de l'événement lorsque le composant est démonté
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const { theme } = useTheme();
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {showTopBtn && (
//         <button
//           onClick={scrollToTop}
//           className={`fixed bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 bg-orange-500 ${
//             theme === "light" ? "text-white" : "text-white"
//           } rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition duration-300`}
//         >
//           ↑
//         </button>
//       )}
//     </>
//   );
// };

// export default BackToTop;

// BEGIN 27/04/2025
// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// const BackToTop = () => {
//   const [showTopBtn, setShowTopBtn] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowTopBtn(window.scrollY > 400);
//     };

//     // Debounce pour améliorer les performances
//     const debouncedScroll = () => {
//       let ticking = false;
//       return () => {
//         if (!ticking) {
//           window.requestAnimationFrame(() => {
//             handleScroll();
//             ticking = false;
//           });
//           ticking = true;
//         }
//       };
//     };

//     window.addEventListener("scroll", debouncedScroll());
//     return () => window.removeEventListener("scroll", debouncedScroll());
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {showTopBtn && (
//         <button
//           aria-label="Retour en haut de page"
//           onClick={scrollToTop}
//           className={`fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
//             theme === "light"
//               ? "bg-gray-700 hover:bg-gray-600"
//               : "bg-gray-700 hover:bg-gray-600"
//           }`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke={theme === "light" ? "#fff" : "#f97316"} // blanc en light, orange clair en dark
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="m18 15-6-6-6 6" />
//           </svg>
//         </button>
//       )}
//     </>
//   );
// };

// export default BackToTop;

// BEGIN 05/05/2025

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowTopBtn(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTopBtn && (
        <button
          aria-label="Retour en haut de page"
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in ${
            theme === "light"
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme === "light" ? "#fff" : "#f97316"} // blanc sur orange / orange clair sur gris
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 15L12 9L6 15" />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
