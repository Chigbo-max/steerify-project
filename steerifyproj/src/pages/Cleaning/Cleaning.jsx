import { Shield, CheckCircle, Users, Clock, Star, ArrowRight, MapPin, CreditCard, Sparkles, Home, Building, Droplets, Bug, Waves } from 'lucide-react';
import heroImg from "../../assets/guy-photo.png"
import Laundry from "../../assets/laundry.jpeg"
import Pest from "../../assets/pest-control.jpeg"
import Pool from "../../assets/pool.jpeg"
import Industrial from "../../assets/carpet.jpeg"
import Plates from "../../assets/plates.jpeg"


function Cleaning() {
  const cleaningServices = [
    {
      icon: Sparkles,
      title: "Laundry Services",
      description: "Professional washing, drying, and ironing with pickup & delivery",
      features: ["Same-day service available", "Eco-friendly detergents", "Door-to-door pickup & delivery", "Stain removal specialists"],
      price: "From ₦5,000",
      duration: "2-24 hours",
      image: Laundry,
    },
    {
      icon: Home,
      title: "Home Cleaning", 
      description: "Deep cleaning for apartments, houses, and condos",
      features: ["Regular or one-time cleaning", "Move-in/move-out cleaning", "Detailed cleaning checklist", "Bring own supplies"],
      price: "From ₦15,000",
      duration: "3-6 hours",
      image: Plates,
    },
    {
      icon: Building,
      title: "Industrial Cleaning",
      description: "Commercial and office space cleaning solutions", 
      features: ["Office buildings", "Warehouses & factories", "Retail spaces", "Post-construction cleanup"],
      price: "From ₦50,000",
      duration: "4-8 hours",
      image: Industrial,
    },
    {
      icon: Bug,
      title: "Fumigation",
      description: "Safe and effective pest control services",
      features: ["Residential fumigation", "Commercial pest control", "Preventive treatments", "Safe for pets & children"],
      price: "From ₦20,000",
      duration: "2-4 hours",
      image: Pest
    },
    {
      icon: Waves,
      title: "Pool Cleaning", 
      description: "Complete pool maintenance and cleaning services",
      features: ["Weekly maintenance", "Chemical balancing", "Equipment inspection", "Debris removal"],
      price: "From ₦25,000",
      duration: "2-3 hours",
      image: Pool
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "100% Fraud Protection",
      description: "Your money is held in secure escrow until service completion. No payment released until you're completely satisfied."
    },
    {
      icon: CheckCircle,
      title: "Vetted Professionals",
      description: "All cleaning providers undergo background checks, skill verification, and reference validation."
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "Not satisfied with the service? We'll send another provider or refund your money."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book services at your convenience with same-day availability for most cleaning services."
    }
  ];

  const serviceAreas = [
    "Victoria Island", "Ikoyi", "Lekki", "Ajah", "Surulere", "Ikeja", 
    "Maryland", "Gbagada", "Yaba", "Lagos Island", "Apapa", "Festac"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-[#030F6D] text-white min-h-[600px] flex items-center justify-between px-6 lg:px-32 py-20"
        style={{ clipPath: "ellipse(100% 90% at 30% 0%)" }}
      >
        {/* Left Content */}
        <div className="max-w-2xl space-y-8">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-[#2aa006]" />
            <span className="text-[#2aa006] font-semibold">Phase 1 Launch - Lagos</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold ">
            Professional Cleaning &
            <span className="text-[#2aa006]"> Maintenance</span> Services
          </h1>
          
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Book trusted cleaning professionals in Lagos with complete fraud protection. 
            Your money stays safe in escrow until the job is done perfectly.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#2aa006]" />
              <span>Vetted Cleaners</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-[#2aa006]" />
              <span>Escrow Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-[#2aa006]" />
              <span>Same-Day Service</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#2aa006] px-8 py-4 rounded-xl font-semibold text-white hover:bg-[#239205] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Cleaning Service
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#030F6D] transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex w-[400px] lg:w-[500px]">
          <img
            src={heroImg}
            alt="Professional cleaning service"
            className="object-cover w-full h-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Cleaning <span className="text-[#030F6D]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning and maintenance services across Lagos. All providers are vetted, 
              insured, and backed by our fraud protection guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#030F6D] text-white p-2 rounded-full">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#2aa006] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#2aa006] rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">4.8+</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#030F6D] text-white py-3 rounded-xl font-semibold hover:bg-[#030F6D]/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#030F6D]">Steerify</span> for Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're solving the trust gap in cleaning services with our escrow-first marketplace. 
              Your security and satisfaction are our top priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#030F6D] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Fraud Protection Highlight */}
          <div className="bg-[#030F6D] text-white rounded-2xl p-8 text-center">
            <Shield className="w-16 h-16 text-[#2aa006] mx-auto mb-6" />
            <h3 className="text-3xl opacity-90 font-bold mb-4">100% Fraud Protection Guarantee</h3>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Your payment is held in secure escrow until the cleaning service is completed to your satisfaction. 
              If you're not happy, we'll send another cleaner or refund your money. No questions asked.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Step 1: Book & Pay</h4>
                <p className="text-sm opacity-90">Payment goes into secure escrow</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Step 2: Service Delivered</h4>
                <p className="text-sm opacity-90">Cleaner completes the job</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2">Step 3: You Approve</h4>
                <p className="text-sm opacity-90">Payment released only when satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Service Areas in <span className="text-[#030F6D]">Lagos</span>
            </h2>
            <p className="text-xl text-gray-600">
              We currently serve these areas in Lagos with plans to expand across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-[#030F6D] hover:text-white transition-all duration-300 cursor-pointer">
                <MapPin className="w-5 h-5 mx-auto mb-2" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't see your area? We're expanding rapidly!</p>
            <button className="bg-[#2aa006] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#239205] transition">
              Request Service in My Area
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2aa006] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
          <p className="text-xl opacity-90 mb-8">
            Book your cleaning service today and experience the peace of mind that comes 
            with our fraud protection guarantee. Professional cleaners, fair prices, zero risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2aa006] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center space-x-2">
              <span>Book Cleaning Service</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-[#030F6D] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#030F6D]/90 transition">
              Get Free Quote
            </button>
          </div>
          <p className="mt-4 text-sm opacity-70">
            No upfront payment • Escrow protection • 24/7 support
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cleaning;