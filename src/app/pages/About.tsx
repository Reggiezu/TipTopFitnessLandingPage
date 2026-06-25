import { Award, Target, Heart, Users } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Certified Trainer",
      description: "NASM Certified Personal Trainer & Nutrition Specialist"
    },
    {
      icon: Users,
      title: "500+ Clients",
      description: "Helped hundreds achieve their fitness goals"
    },
    {
      icon: Target,
      title: "10+ Years",
      description: "Over a decade of experience in fitness industry"
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Focus on mind, body, and lifestyle transformation"
    }
  ];

  const values = [
    {
      title: "Personalized Training",
      description: "Every body is unique. I create customized workout plans that fit your lifestyle, goals, and fitness level."
    },
    {
      title: "Sustainable Results",
      description: "No quick fixes or fad diets. I teach you sustainable habits that create lasting change."
    },
    {
      title: "Supportive Community",
      description: "Join a community of motivated individuals on the same journey. We grow stronger together."
    },
    {
      title: "Science-Based Methods",
      description: "Evidence-based training techniques backed by the latest fitness and nutrition research."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc3NTYwMzgyNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Personal Trainer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl mb-4">About TipTopFitness</h1>
            <p className="text-xl max-w-2xl">
              Your partner in achieving optimal health and fitness
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
          <h2 className="text-3xl mb-6 text-center" style={{ color: '#0ABAB5' }}>
            My Story
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hi, I'm the founder of TipTopFitness! My journey into fitness started over 10 years 
              ago when I transformed my own life through exercise and proper nutrition. What began 
              as a personal challenge became my passion and ultimately my career.
            </p>
            <p>
              I became a certified personal trainer because I wanted to help others experience the 
              same life-changing transformation I did. There's nothing more rewarding than seeing 
              my clients gain confidence, strength, and a newfound love for taking care of themselves.
            </p>
            <p>
              My approach is simple: meet you where you are and guide you to where you want to be. 
              No judgment, no unrealistic expectations—just real support, expert guidance, and proven 
              results. Whether you're just starting out or looking to take your fitness to the next 
              level, I'm here to help you succeed.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#0ABAB5' }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl mb-8 text-center" style={{ color: '#0ABAB5' }}>
            What I Believe In
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="mb-3" style={{ color: '#0ABAB5' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's work together to build a healthier, stronger, and more confident you.
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-3 text-white rounded-full hover:shadow-lg transition-shadow"
            style={{ backgroundColor: '#0ABAB5' }}
          >
            Book Your First Session
          </a>
        </div>
      </div>
    </div>
  );
}
