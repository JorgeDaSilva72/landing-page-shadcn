import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      {/* <div className="flex items-center gap-2 dark:hidden">
        <Moon className="w-16 h-16" />
        <span className="block lg:hidden"> Sombre </span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun className="w-6 h-6" />
        <span className="block lg:hidden">Clair</span>
      </div> */}
      <div className="flex items-center gap-2">
        {theme === "light" ? (
          <Moon size={24} fill="orange" color="orange" />
        ) : (
          <Sun size={24} fill="orange" color="orange" />
        )}
        <span className="block lg:hidden">
          {theme === "light" ? "Sombre" : "Clair"}
        </span>
      </div>

      <span className="sr-only">Changer de theme</span>
    </Button>
  );
};
