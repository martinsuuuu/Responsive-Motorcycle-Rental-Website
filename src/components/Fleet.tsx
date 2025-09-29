import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Gauge, Fuel, Settings } from "lucide-react";

const motorcycles = [
  {
    id: 1,
    name: "Sport Thunder",
    category: "Sport",
    image: "https://images.unsplash.com/photo-1642302708393-4139db2b02da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMG1vdG9yY3ljbGUlMjBibGFjayUyMG1vZGVybnxlbnwxfHx8fDE3NTkxMzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$89",
    features: ["600cc Engine", "Sport Position", "ABS Brakes", "Quick Shift"],
    specs: {
      passengers: 2,
      topSpeed: "180 mph",
      fuelType: "Gasoline",
      transmission: "6-speed"
    }
  },
  {
    id: 2,
    name: "Adventure Explorer",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1690540293148-affdded8f45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3RvcmN5Y2xlJTIwdG91cmluZ3xlbnwxfHx8fDE3NTkxMzQxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$95",
    features: ["800cc Engine", "Off-road Ready", "Luggage System", "GPS Mount"],
    specs: {
      passengers: 2,
      topSpeed: "140 mph",
      fuelType: "Gasoline",
      transmission: "6-speed"
    }
  },
  {
    id: 3,
    name: "Classic Vintage",
    category: "Cruiser",
    image: "https://images.unsplash.com/photo-1565625078391-42a8daecf4bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbW90b3JjeWNsZSUyMGNsYXNzaWN8ZW58MXx8fHwxNzU5MDk2ODExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$79",
    features: ["500cc Engine", "Comfortable Ride", "Classic Styling", "Low Seat"],
    specs: {
      passengers: 2,
      topSpeed: "110 mph",
      fuelType: "Gasoline",
      transmission: "5-speed"
    }
  }
];

export function Fleet() {
  return (
    <section id="fleet" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully maintained collection of motorcycles, perfect for any adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((bike) => (
            <Card key={bike.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                  {bike.category}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{bike.name}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{bike.price}</div>
                    <div className="text-sm text-gray-500">per day</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{bike.specs.passengers} passengers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Gauge className="h-4 w-4" />
                    <span>{bike.specs.topSpeed}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Fuel className="h-4 w-4" />
                    <span>{bike.specs.fuelType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Settings className="h-4 w-4" />
                    <span>{bike.specs.transmission}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {bike.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full">
                  Book This Bike
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}