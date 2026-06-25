import { User, Users, Video, Apple, Dumbbell, Calendar } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: User,
      title: "1-on-1 Personal Training",
      price: "$80/session",
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTYxMTM5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Customized workout plan",
        "One-on-one attention",
        "Form correction & technique",
        "Flexible scheduling",
        "Progress tracking"
      ],
      description: "Get personalized attention with customized workouts designed specifically for your goals and fitness level."
    },
    {
      icon: Users,
      title: "Small Group Training",
      price: "$40/session",
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc3NTYwMzgyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Max 4-6 people per group",
        "Community motivation",
        "Cost-effective training",
        "Fun & energetic workouts",
        "Make fitness friends"
      ],
      description: "Train with a small group of motivated individuals. Share the energy, split the cost."
    },
    {
      icon: Video,
      title: "Online Coaching",
      price: "$150/month",
      duration: "Unlimited access",
      image: "https://images.unsplash.com/photo-1623171855411-3b686d975cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZml0bmVzcyUyMHdvbWFufGVufDF8fHx8MTc3NTUwMDc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Custom workout programs",
        "Weekly check-ins",
        "24/7 messaging support",
        "Exercise video library",
        "Nutrition guidance"
      ],
      description: "Train anywhere, anytime with personalized programs and ongoing support from your coach."
    },
    {
      icon: Apple,
      title: "Nutrition Consultation",
      price: "$100/session",
      duration: "90 minutes",
      image: "https://images.unsplash.com/photo-1634144646738-809a0f8897c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzc3xlbnwxfHx8fDE3NzU2MDQ2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Dietary assessment",
        "Custom meal planning",
        "Macro calculations",
        "Recipe suggestions",
        "Follow-up support"
      ],
      description: "Learn how to fuel your body properly with personalized nutrition guidance and meal planning."
    },
    {
      icon: Dumbbell,
      title: "Strength Training Program",
      price: "$200/month",
      duration: "3 sessions/week",
      image: "https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd29ya291dHxlbnwxfHx8fDE3NzU2MTEzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Build lean muscle",
        "Increase strength",
        "Progressive overload",
        "Performance tracking",
        "Supplement guidance"
      ],
      description: "Build strength and muscle with a structured program designed to maximize your gains."
    },
    {
      icon: Calendar,
      title: "Fitness Assessment",
      price: "$50",
      duration: "60 minutes",
      image: "https://images.unsplash.com/photo-1742239614185-b50da3deb7cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHN0dWRpb3xlbnwxfHx8fDE3NzU2MTEzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Body composition analysis",
        "Movement screening",
        "Goal setting session",
        "Fitness level evaluation",
        "Personalized recommendations"
      ],
      description: "Get a comprehensive evaluation of your current fitness level and receive a roadmap to your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl mb-4" style={{ color: '#0ABAB5' }}>
            Services & Pricing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the service that best fits your goals and lifestyle. 
            Not sure which is right for you? Book a free consultation.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div 
                    className="absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#0ABAB5' }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl" style={{ color: '#0ABAB5' }}>
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      / {service.duration}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: '#0ABAB5' }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/booking">
                    <button 
                      className="w-full py-3 text-white rounded-lg hover:shadow-md transition-shadow"
                      style={{ backgroundColor: '#0ABAB5' }}
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Package Deals */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl mb-8 text-center" style={{ color: '#0ABAB5' }}>
            Package Deals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-2 rounded-xl" style={{ borderColor: '#0ABAB5' }}>
              <h3 className="text-xl mb-2">Starter Pack</h3>
              <div className="text-3xl mb-4" style={{ color: '#0ABAB5' }}>
                $300
              </div>
              <p className="text-sm text-gray-600 mb-4">
                4 Personal Training Sessions
              </p>
              <p className="text-xs text-gray-500">
                Save $20 • Expires in 60 days
              </p>
            </div>

            <div className="text-center p-6 border-2 rounded-xl" style={{ borderColor: '#0ABAB5', backgroundColor: '#0ABAB5' }}>
              <h3 className="text-xl mb-2 text-white">Popular</h3>
              <div className="text-3xl mb-4 text-white">
                $720
              </div>
              <p className="text-sm text-white/90 mb-4">
                10 Personal Training Sessions
              </p>
              <p className="text-xs text-white/70">
                Save $80 • Expires in 90 days
              </p>
            </div>

            <div className="text-center p-6 border-2 rounded-xl" style={{ borderColor: '#0ABAB5' }}>
              <h3 className="text-xl mb-2">Premium</h3>
              <div className="text-3xl mb-4" style={{ color: '#0ABAB5' }}>
                $1,440
              </div>
              <p className="text-sm text-gray-600 mb-4">
                20 Personal Training Sessions
              </p>
              <p className="text-xs text-gray-500">
                Save $160 • Expires in 120 days
              </p>
            </div>
          </div>
        </div>

        {/* Free Consultation CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-600 mb-6">
            Book a free 15-minute consultation to discuss your goals and find the perfect program.
          </p>
          <Link to="/contact">
            <button 
              className="px-8 py-3 border-2 rounded-full hover:shadow-md transition-shadow"
              style={{ borderColor: '#0ABAB5', color: '#0ABAB5' }}
            >
              Schedule Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
