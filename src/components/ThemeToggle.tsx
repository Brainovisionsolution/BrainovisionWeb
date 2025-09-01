import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="transition hover:bg-yellow-100 dark:hover:bg-yellow-800/20"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" /> // Light icon (when in dark)
      ) : (
        <Moon className="w-5 h-5 text-yellow-600" /> // Dark icon (when in light)
      )}
    </Button>
  );
};
