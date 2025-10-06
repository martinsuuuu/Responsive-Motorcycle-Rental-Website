import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Users, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5,000+",
    label: "Happy Riders"
  },
  {
    icon: Calendar,
    number: "5+",
    label: "Years Experience"
  },
  {
    icon: Star,
    number: "4.9",
    label: "Average Rating"
  },
  {
    icon: Award,
    number: "50+",
    label: "Motorcycles"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing experience! The bike was in perfect condition and the staff was incredibly helpful. Will definitely rent again!",
    trip: "Weekend Coastal Ride"
  },
  {
    name: "Mike Chen",
    rating: 5,
    comment: "Professional service from start to finish. The motorcycle was in excellent condition and exceeded my expectations.",
    trip: "Mountain Adventure"
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    comment: "Best motorcycle rental experience I've ever had. Great prices, excellent bikes, and fantastic customer service.",
    trip: "City Tour"
  }
];

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Motorcycle Rental Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 5 years, CM Motorcycle Rental has been helping adventure seekers explore the world on two wheels. 
              We're passionate about motorcycles and committed to providing safe, reliable, and unforgettable experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">✓</Badge>
                <span>Licensed and insured motorcycle rental business</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">✓</Badge>
                <span>All motorcycles maintained by certified mechanics</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">✓</Badge>
                <span>24/7 roadside assistance and customer support</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">✓</Badge>
                <span>Flexible rental terms and competitive pricing</span>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="mx-auto mb-3 p-3 bg-yellow-100 rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            What Our Riders Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.trip}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Commitment */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Safety Commitment</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Safety is our top priority. Every motorcycle undergoes thorough inspection before rental, 
            and we provide comprehensive safety briefings to ensure you have the knowledge and confidence 
            to ride safely. All rentals include premium safety gear and 24/7 emergency support.
          </p>
        </div>
      </div>
    </section>
  );
}