import React from 'react';
import { MapPin, Calendar, CreditCard, MessageSquare, Shield, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Search",
      description: "Find service providers in your local government area (LGA) with accurate distance and availability."
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Schedule services at your convenience with real-time provider availability."
    },
    {
      icon: CreditCard,
      title: "Secure Escrow Payment",
      description: "Funds are held safely until service completion. Pay with confidence."
    },
    {
      icon: MessageSquare,
      title: "Real-Time Communication",
      description: "Chat directly with service providers through our secure messaging system."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All providers are background-checked, skill-verified, and monitored for quality."
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guarantee",
      description: "Not satisfied? We'll make it right or refund your money. No questions asked."
    }
  ];

  return (
    <section className="py-20 bg-[#030F6D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How Steerify <span className="text-[#2aa006]">Works</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our platform combines booking, escrow protection, and reviews to create 
            a trustworthy marketplace for local services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-14 h-14 bg-[#2aa006] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Search", desc: "Find providers by location & rating" },
            { step: "2", title: "Book", desc: "Schedule and pay into secure escrow" },
            { step: "3", title: "Receive", desc: "Get your service completed perfectly" },
            { step: "4", title: "Review", desc: "Rate provider and release payment" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#2aa006] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm opacity-80">{item.desc}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#2aa006]/30 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;