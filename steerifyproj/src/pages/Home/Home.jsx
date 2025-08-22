import { Shield, CheckCircle, Users, Clock, Star, ArrowRight, MapPin, CreditCard } from 'lucide-react';
import HeroImg from "../../assets/dread-guy.png";
import Features from "../../components/Features";
import Products from "../../components/LatestProducts";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-[#030F6D] text-white min-h-[600px] flex items-center justify-between px-6 lg:px-32 py-20"
        style={{ clipPath: "ellipse(100% 90% at 30% 0%)" }}
      >
        {/* Left Content */}
        <div className="max-w-2xl space-y-8">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-[#2aa006]" />
            <span className="text-[#2aa006] font-semibold">100% Fraud Protected</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Quality Services.
            <span className="text-[#2aa006]"> Protected</span> Investments.
          </h1>
          
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Book trusted local service providers in Lagos with complete fraud protection. 
            Your money stays safe in escrow until the job is done perfectly.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#2aa006]" />
              <span>Vetted Providers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-[#2aa006]" />
              <span>Escrow Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-[#2aa006]" />
              <span>Verified Reviews</span>
            </div>
          </div>
          
          <button className="bg-[#2aa006] px-8 py-4 rounded-xl font-semibold text-white hover:bg-[#239205] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started - It's Free
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex w-[400px] lg:w-[500px]">
          <img
            src={HeroImg}
            alt="Steerify hero"
            className="object-contain w-full h-full"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#030F6D]">Steerify</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're solving the trust gap in local services with our escrow-first marketplace. 
              Your security is our priority.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#030F6D] text-white shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#2aa006]">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">100% Fraud Protection</h3>
              <p className="text-white/90">
                Your money is held in secure escrow until service is completed to your satisfaction. 
                No payment released until you're happy.
              </p>
              <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="text-sm font-semibold text-[#2aa006]">
                  ✓ Money back guarantee if service doesn't meet expectations
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#030F6D]">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Vetted Service Providers</h3>
              <p className="text-gray-600">
                Every provider goes through our rigorous background checks, skill verification, 
                and reference validation process.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#030F6D]">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Verified Reviews & Ratings</h3>
              <p className="text-gray-600">
                Read authentic reviews from real customers. Only verified bookings can leave reviews.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#030F6D]">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer support team is always available to help resolve any issues or concerns.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#030F6D]">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Local Focus</h3>
              <p className="text-gray-600">
                Find service providers in your specific Local Government Area (LGA) for faster, 
                more reliable service.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#030F6D]">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">
                See upfront pricing with no hidden fees. What you see is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#2aa006] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Phase 1 Launch - Lagos
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cleaning & Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning and maintenance services across Lagos. All providers are vetted, 
              insured, and backed by our fraud protection guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Laundry Services",
                description: "Professional washing, drying, and ironing with pickup & delivery",
                features: ["Same-day service", "Eco-friendly products", "Door-to-door delivery"]
              },
              {
                title: "Home Cleaning", 
                description: "Deep cleaning for apartments, houses, and condos",
                features: ["Regular/one-time", "Move-in/out cleaning", "Detailed checklist"]
              },
              {
                title: "Industrial Cleaning",
                description: "Commercial and office space cleaning solutions", 
                features: ["Office buildings", "Warehouses", "Retail spaces"]
              },
              {
                title: "Fumigation",
                description: "Safe and effective pest control services",
                features: ["Residential", "Commercial", "Preventive treatment"]
              },
              {
                title: "Pool Cleaning", 
                description: "Complete pool maintenance and cleaning",
                features: ["Weekly service", "Chemical balancing", "Equipment check"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100">
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
                <button className="w-full bg-[#030F6D] text-white py-3 rounded-xl font-semibold hover:bg-[#030F6D]/90 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-[#030F6D] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your Free Dashboard Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Steerify. Create your account, 
            fill in your details, and get instant access to your personalized dashboard - completely free!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-[#2aa006] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Create Account</h3>
              <p className="text-sm opacity-80">Sign up with your email and basic details</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-[#2aa006] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Complete Profile</h3>
              <p className="text-sm opacity-80">Add your location, preferences, and contact info</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-[#2aa006] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Start Booking</h3>
              <p className="text-sm opacity-80">Access your dashboard and book trusted services</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">What You Get For Free:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2aa006]" />
                <span>Personal dashboard with booking history</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2aa006]" />
                <span>Access to all vetted service providers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2aa006]" />
                <span>Real-time booking and tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2aa006]" />
                <span>24/7 customer support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2aa006]" />
                <span>Fraud protection on all bookings</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#2aa006]" />
                <span>Exclusive member discounts</span>
              </div>
            </div>
          </div>

          <button className="bg-[#2aa006] px-8 py-4 rounded-xl font-semibold text-white hover:bg-[#239205] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Sign Up Now - It's Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="mt-4 text-sm opacity-70">
            No credit card required • No setup fees • Cancel anytime
          </p>
        </div>
      </section>

      <Features />
      <Products />
    </div>
  );
}

export default Home;