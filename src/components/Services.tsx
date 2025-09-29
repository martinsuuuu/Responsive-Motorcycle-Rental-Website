import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Clock, MapPin, Shield, Wrench, Headphones } from "lucide-react";

const services = [
  {
    icon: CheckCircle,
    title: "Easy Booking",
    description: "Reserve your motorcycle online in just a few clicks. Choose your dates, pick your bike, and you're ready to ride.",
    features: ["Online reservation", "Instant confirmation", "Flexible dates", "Mobile app"]
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description: "Ride with confidence knowing you're fully covered. Our comprehensive insurance protects you and the motorcycle.",
    features: ["Collision coverage", "Theft protection", "Liability insurance", "Roadside assistance"]
  },
  {
    icon: MapPin,
    title: "Free Delivery",
    description: "We'll bring the motorcycle to you within the city limits. No need to visit our location unless you want to.",
    features: ["City-wide delivery", "Flexible pickup", "Hotel delivery", "GPS included"]
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "All our motorcycles are professionally maintained and inspected before every rental to ensure your safety.",
    features: ["Regular servicing", "Safety checks", "Quality parts", "Clean & sanitized"]
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Pick up and drop off at times that work for you. We offer extended hours and weekend availability.",
    features: ["Early pickup", "Late return", "Weekend service", "Holiday availability"]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is always available to help you during your rental period. Emergency assistance included.",
    features: ["Phone support", "Emergency hotline", "Technical help", "Route assistance"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose RideRental?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make motorcycle rental simple, safe, and convenient. Focus on the ride, we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary text-white rounded-full w-fit">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Choose Your Bike</h4>
              <p className="text-sm text-gray-600">Browse our fleet and select the perfect motorcycle for your adventure.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary text-white rounded-full w-fit">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Book Online</h4>
              <p className="text-sm text-gray-600">Complete your reservation with our secure online booking system.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary text-white rounded-full w-fit">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Get Delivery</h4>
              <p className="text-sm text-gray-600">We'll deliver the motorcycle to your location or meet at our facility.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary text-white rounded-full w-fit">
                <span className="text-xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Ride & Enjoy</h4>
              <p className="text-sm text-gray-600">Hit the road and create unforgettable memories on your adventure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}