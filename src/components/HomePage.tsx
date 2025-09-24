import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar, Coffee, Gift, CreditCard, Users, Heart, Crown, Clock, UserPlus, Facebook, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/edac472701ced8fbf11da00e07e77b057680a6ab.png";
import birthdayCookies from "figma:asset/f07fbc209786f20d13e69caf2e7aa9cbbe081da8.png";
import partySetup from "figma:asset/8488e39c967c527614285c4db2a75c0cacd75c50.png";
import birthdayChild from "figma:asset/404deea8224992da3dd53b55a6db972d97869602.png";
import giftCard from "figma:asset/f0ba88502c720ff838d8396e3912eae1b00ceb28.png";
import membershipPhoto from "figma:asset/4998ac58bdf5ca6545338c0b405b82047e0ee18d.png";
import playAreaPhoto from "figma:asset/c76ec67c6a703f42cf3bcb31cb74def4b29478f6.png";

interface HomePageProps {
  onTabChange: (tab: string) => void;
}

export function HomePage({ onTabChange }: HomePageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Quick Actions */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-2 border-pink-200">
          <CardContent className="p-10 text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={logo} 
                alt="The Pink Flamingo Play Cafe Logo" 
                className="w-full max-w-4xl h-auto"
              />
            </div>
            <p className="text-2xl font-medium text-primary mb-8 max-w-3xl mx-auto">
              Where coffee meets community and play meets peace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onTabChange("menu")}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-base px-8 py-4"
              >
                <Coffee className="h-5 w-5 mr-2" />
                Order Drive-Up Coffee Here!
              </Button>
              <Button
                size="lg"
                onClick={() => window.open("https://lilypadpos.app/pinkflamingo/onlinesales/tickets1.php", "_blank")}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-base px-8 py-4"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book your Playtime Here!
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Pay Pass Section */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 border-2 border-cyan-200 overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative">
                <img
                  src={playAreaPhoto}
                  alt="Beautiful Pink Flamingo Play Cafe interior with colorful play structures and climbing equipment"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-8 md:p-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Play className="h-8 w-8 text-cyan-600" />
                  <h2 className="text-3xl text-cyan-700">Daily Pay Pass</h2>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-cyan-100">
                    <span className="text-lg">One Child</span>
                    <span className="text-2xl text-cyan-700">$12</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-cyan-100">
                    <span className="text-lg">Additional Children</span>
                    <span className="text-2xl text-cyan-700">$10</span>
                  </div>
                </div>

                <Button 
                  onClick={() => window.open("https://lilypadpos.app/pinkflamingo/onlinesales/tickets1.php", "_blank")} 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-xl px-8 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                >
                  <Play className="h-6 w-6 mr-3" />
                  Reserve Play Session
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Valid for 2 hours • Reservations highly recommended
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Birthday Celebration Section */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 border-4 border-pink-400 overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative">
                <img
                  src={birthdayChild}
                  alt="Happy child in pink dress playing at Pink Flamingo Play Cafe"
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text mb-4 text-center">
                  🎉 BIRTHDAY FUN! 🎉
                </h2>
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-2xl mb-6 shadow-lg">
                  <h3 className="text-2xl md:text-3xl mb-2">FREE Cake Pop + Birthday Song!</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-3xl">🧁</span>
                    <span>Complimentary cake pop for birthday child</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-3xl">🎵</span>
                    <span>Special birthday song in our playroom</span>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open("https://lilypadpos.app/pinkflamingo/onlinesales/tickets1.php", "_blank")} 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-xl px-8 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                >
                  <Gift className="h-6 w-6 mr-3" />
                  Reserve Birthday Fun!
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  *Valid during birthday week. No outside cupcakes or gift-opening in café.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Private Birthday Parties Section */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative">
                <img
                  src={partySetup}
                  alt="Pink Flamingo private birthday party setup with pink decorations"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-3 text-purple-700">🎉 Private Birthday Parties</h4>
                <p className="text-muted-foreground mb-4">
                  Make your child's birthday unforgettable at The Pink Flamingo Café! 
                  Explore our fun party packages and book your celebration today.
                </p>
                <Button 
                  onClick={() => window.open("https://lilypadpos.app/pinkflamingo/onlinebooking/step1.php", "_blank")} 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-lg px-8 py-4"
                >
                  <Gift className="h-5 w-5 mr-2" />
                  Book Private Party
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gift Cards Section */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 border-2 border-pink-300 overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative">
                <img
                  src={giftCard}
                  alt="Pink Flamingo Play Cafe gift card in pink gift box"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="p-8 md:p-12 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl text-primary">Gift Cards</h2>
                </div>
                <div className="bg-gradient-to-r from-primary to-pink-600 text-white p-6 rounded-2xl mb-6 shadow-lg">
                  <h3 className="text-2xl mb-2">Give the Gift of Play & Coffee!</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Perfect for families, friends, and anyone who deserves a little magic. 
                  Our gift cards can be used for playtime, delicious coffee, and memorable experiences.
                </p>
                <Button 
                  onClick={() => window.open("https://lilypadpos.app/pinkflamingo/onlineproductsales/sales2.php?TempID=0&ptid=23", "_blank")} 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-xl px-8 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                >
                  <CreditCard className="h-6 w-6 mr-3" />
                  Buy Gift Cards Online
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Available in any amount • Perfect for birthdays, holidays, or just because
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Membership Section */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 border-2 border-purple-300 overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={membershipPhoto}
                  alt="Happy members of The Pink Flamingo Play Cafe community with pink balloon backdrop"
                  className="w-full h-full object-cover min-h-80"
                />
              </div>

              {/* Benefits Section */}
              <div className="p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Crown className="h-8 w-8 text-purple-600" />
                  <h2 className="text-3xl text-purple-700">Monthly Membership</h2>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl mb-6 text-center">
                  <h3 className="text-xl">Join Our Play Family!</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Unlimited Open Play</p>
                      <p className="text-sm text-muted-foreground">Come any time for 2 hour play sessions!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <UserPlus className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Friend Pass</p>
                      <p className="text-sm text-muted-foreground">Bring a new friend for $8 once a month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Free Coffee</p>
                      <p className="text-sm text-muted-foreground">One free medium drink added monthly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Crown className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">First Dibs</p>
                      <p className="text-sm text-muted-foreground">First access to special events</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Facebook className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Make Connections</p>
                      <p className="text-sm text-muted-foreground">Join our members-only Facebook group</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Party Discount</p>
                      <p className="text-sm text-muted-foreground">10% off party packages</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="p-8 bg-gradient-to-b from-purple-100 to-pink-100">
                <h3 className="text-2xl text-center mb-6 text-purple-700">Monthly Pricing</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">One Child</span>
                    <span className="text-2xl text-purple-700">$29</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">Two Children</span>
                    <span className="text-2xl text-purple-700">$44</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">Three Children</span>
                    <span className="text-2xl text-purple-700">$54</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-medium">Four Children</span>
                    <span className="text-2xl text-purple-700">$64</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg">
                    <span className="font-medium">Each Additional</span>
                    <span className="text-xl text-purple-700">+$10</span>
                  </div>
                </div>

                <Button 
                  onClick={() => window.open("https://lilypadpos.app/pinkflamingo/onlineproductsales/sales2.php?TempID=0&ptid=24", "_blank")} 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-8 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform mb-4"
                >
                  <Users className="h-6 w-6 mr-3" />
                  Join the Flock!
                </Button>

                <div className="text-center text-xs text-muted-foreground space-y-1">
                  <p>Auto-recurring monthly</p>
                  <p>No activation or cancellation fees</p>
                  <p>Call or email to cancel before renewal</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}