"use client";

import { useTheme } from "next-themes";

const BackToTop = () => {
  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 bg-orange-500 ${
        theme === "light" ? "text-white" : "text-white"
      } rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition duration-300`}
    >
      ↑
    </button>
  );
};

export default BackToTop;
