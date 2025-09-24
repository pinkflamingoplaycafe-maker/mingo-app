import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ReservationsPage } from "./components/ReservationsPage";
import { MenuPage } from "./components/MenuPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomePage onTabChange={setActiveTab} />;
      case "reservations":
        return <ReservationsPage />;
      case "menu":
        return <MenuPage />;
      default:
        return <HomePage onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main>{renderActiveTab()}</main>
      <Toaster />
    </div>
  );
}