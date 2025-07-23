import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import { Palette } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: "clean-code", name: "Clean Code", description: "Light & Professional" },
    { id: "deep-tech", name: "Deep Tech", description: "Dark & Vibrant" },
    { id: "data-flow", name: "Data Flow", description: "Blues & Purples" },
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-6 right-6 z-50 shadow-elegant">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
            className={`cursor-pointer ${theme === themeOption.id ? 'bg-accent text-accent-foreground' : ''}`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{themeOption.name}</span>
              <span className="text-xs text-muted-foreground">{themeOption.description}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;