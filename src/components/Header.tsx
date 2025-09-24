import { Coffee, Calendar, Home } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/edac472701ced8fbf11da00e07e77b057680a6ab.png";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="bg-card border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange("home")}>
            <img 
              src={logo} 
              alt="The Pink Flamingo Play Cafe Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="flex gap-2">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              onClick={() => onTabChange("home")}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.open("https://lilypadpos.app/pinkflamingo/onlinesales/tickets1.php", "_blank")}
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Reservations
            </Button>
            <Button
              variant={activeTab === "menu" ? "default" : "ghost"}
              onClick={() => onTabChange("menu")}
              className="flex items-center gap-2"
            >
              <Coffee className="h-4 w-4" />
              Menu & Orders
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}