import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import logo from "figma:asset/edac472701ced8fbf11da00e07e77b057680a6ab.png";
import menuImage from "figma:asset/7b024d726ab2fc43f7da812fc4bfbe2ce9aef02b.png";
import seasonalMenu from "figma:asset/d2d038f04b0fed757c472d20b88d5b82767d8d17.png";
import classicsMenu from "figma:asset/ff1733ad9333b01d7abca1f7fdafb698f9419061.png";

export function MenuPage() {
  const handleOrderNow = () => {
    window.open('https://direct.chownow.com/order/42519/locations/64210?menu_status=preview', '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header with Order Button */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img 
            src={logo} 
            alt="The Pink Flamingo Play Cafe Logo" 
            className="h-20 w-auto"
          />
          <h1 className="text-4xl text-primary">Menu & Online Ordering</h1>
        </div>
        
        <Button 
          onClick={handleOrderNow}
          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-xl py-6 px-12 mb-8"
          size="lg"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="h-6 w-auto filter brightness-0 invert mr-3"
          />
          Order Coffee
          <ExternalLink className="h-6 w-6 ml-3" />
        </Button>
      </div>

      {/* Menu Images */}
      <div className="space-y-8">
        {/* Main Menu */}
        <div className="flex justify-center">
          <img
            src={menuImage}
            alt="The Pink Flamingo Cafe Menu - Breakfast & Lunch items including The Nest Biscuit, Mingo Wrap, Stay Cozy Combo, Mingo Munch Tray, and Kids drinks like Mini Mingo, Flamingo Fizzy, Ocean Blueberry Splash, and Tiny Tots Latte"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>

        {/* Classics & Pumpkin Menu */}
        <div className="flex justify-center">
          <img
            src={classicsMenu}
            alt="The Classics & Pumpkin Classics Menu - Classic drinks including Latte, Cold Brew, Americano, Chai Latte, Matcha Latte, plus seasonal Pumpkin Spice Latte, Pumpkin Cream Cold Brew, Pumpkin Chai Latte, Pumpkin White Chocolate Mocha, and Italian Cream Sodas including Orange Dream Cream Soda"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>

        {/* Seasonal Menu */}
        <div className="flex justify-center">
          <img
            src={seasonalMenu}
            alt="Sip into September - Seasonal autumn menu featuring Snickerdoodle Chai, Caramel Cookie Latte, Stay Toasty Matcha, Orange Dream Cream Soda, and Golden Americano with fall decorations and pink flamingo"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}