import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Calendar as CalendarIcon, Clock, Users, Shield, CreditCard } from "lucide-react";
import logo from "figma:asset/edac472701ced8fbf11da00e07e77b057680a6ab.png";

export function ReservationsPage() {
  const [showEmbedded, setShowEmbedded] = useState(false);

  const handleBookNow = () => {
    // Option 1: Open in new tab (recommended for better UX)
    window.open('https://lilypadpos.app/pinkflamingo/onlinesales/tickets1.php', '_blank');
    
    // Option 2: Show embedded version
    // setShowEmbedded(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img 
            src={logo} 
            alt="The Pink Flamingo Play Cafe Logo" 
            className="h-20 w-auto"
          />
          <h1 className="text-4xl font-bold text-primary">Make a Reservation</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Book your table at The Pink Flamingo Play Cafe for a magical family experience. 
          Our secure booking system handles everything from reservations to waivers.
        </p>
      </div>

      {!showEmbedded ? (
        <>
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-pink-200 hover:border-pink-300 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-2 text-primary">Digital Waivers</h3>
                <p className="text-muted-foreground text-sm">
                  Complete your liability waivers online during booking for a seamless check-in experience
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-pink-200 hover:border-pink-300 transition-colors">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-2 text-primary">Secure Payment</h3>
                <p className="text-muted-foreground text-sm">
                  Pay securely online with credit card or book now and pay at the cafe
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-pink-200 hover:border-pink-300 transition-colors">
              <CardContent className="p-6 text-center">
                <CalendarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-2 text-primary">Real-Time Availability</h3>
                <p className="text-muted-foreground text-sm">
                  See available time slots in real-time and get instant confirmation
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Quick Book */}
            <Card className="relative overflow-hidden border-2 border-primary">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-pink-500 to-pink-600 flex items-center gap-1">
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-4 w-auto filter brightness-0 invert"
                  />
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-primary text-2xl flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6" />
                  Book Your Visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Choose your date, time, and party size. Complete waivers and payment all in one place.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Available 7 days a week</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Perfect for families & parties</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Digital waivers included</span>
                  </div>
                </div>

                <Button 
                  onClick={handleBookNow}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-lg py-6 flex items-center gap-2"
                  size="lg"
                >
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-6 w-auto filter brightness-0 invert"
                  />
                  Book Now - LilyPad System
                  <ExternalLink className="h-5 w-5 ml-2" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Opens in secure LilyPad booking system
                </p>
              </CardContent>
            </Card>

            {/* Pricing Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Pricing & Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-medium">Toddlers (0-2 years)</h4>
                      <p className="text-sm text-muted-foreground">With paying adult</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">Free</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-medium">Children (3-12 years)</h4>
                      <p className="text-sm text-muted-foreground">2-hour play session</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$12</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-medium">Adults</h4>
                      <p className="text-sm text-muted-foreground">Includes coffee/tea</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">$8</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg border border-pink-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🎉</span>
                    <img 
                      src={logo} 
                      alt="Logo" 
                      className="h-5 w-auto"
                    />
                    <h4 className="font-medium text-primary">Party Packages Available</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ask about our birthday party packages when booking. Includes decorations, cake table, and party host!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-primary mb-4">What to Expect</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Before Your Visit:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Complete digital waivers online</li>
                    <li>• Receive confirmation email</li>
                    <li>• Add any special requests</li>
                    <li>• Choose add-on food packages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">During Your Visit:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Quick check-in with QR code</li>
                    <li>• Supervised play areas</li>
                    <li>• Fresh coffee & snacks available</li>
                    <li>• Free WiFi for parents</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        /* Embedded Booking System */
        <Card className="min-h-[800px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>LilyPad Booking System</CardTitle>
            <Button 
              variant="outline" 
              onClick={() => setShowEmbedded(false)}
            >
              Back to Info
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src="https://lilypadpos.app/pinkflamingo/onlinesales/tickets1.php"
              className="w-full h-[700px] border-0 rounded-b-lg"
              title="The Pink Flamingo Booking System"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}