import { Shield, Target, Globe, Users, CheckCircle, MapPin, Lightbulb, Heart } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#030F6D] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="text-[#2aa006]">Steerify</span>
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            We're building Africa's most trusted marketplace for local services, 
            starting with Nigeria and expanding across the continent.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#2aa006] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solving the Trust Gap in Local Services
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Connect people and businesses with vetted local service providers through 
                a trusted escrow-first marketplace. We believe everyone deserves access to 
                reliable, quality services without the fear of fraud or disappointment.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-8 h-8 text-[#2aa006] mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Escrow Protection</h3>
                    <p className="text-gray-600 text-sm">Funds held safely until service completion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-8 h-8 text-[#2aa006] mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Vetted Providers</h3>
                    <p className="text-gray-600 text-sm">Background checks and skill verification</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Target className="w-16 h-16 text-[#030F6D] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#2aa006] rounded-full"></div>
                  <span className="font-semibold text-gray-900">Booking + Escrow + Reviews = Trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#2aa006] rounded-full"></div>
                  <span className="font-semibold text-gray-900">Quality over quantity in service providers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#2aa006] rounded-full"></div>
                  <span className="font-semibold text-gray-900">Customer satisfaction guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#2aa006] rounded-full"></div>
                  <span className="font-semibold text-gray-900">Transparency in all transactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Plan Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Growth <span className="text-[#030F6D]">Strategy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're launching strategically, focusing on quality and trust before scaling 
              across Nigeria, Africa, and global urban hubs.
            </p>
          </div>

          {/* Current Phase */}
          <div className="mb-16">
            <div className="bg-[#030F6D] text-white rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="inline-block bg-[#2aa006] text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Current Phase
                  </div>
                  <h3 className="text-3xl font-bold">Phase 1: Cleaning & Maintenance</h3>
                </div>
                <MapPin className="w-12 h-12 text-[#2aa006]" />
              </div>
              <p className="text-xl opacity-90 mb-6">
                Launching in Lagos with essential cleaning and maintenance services. 
                Building trust and establishing our reputation for quality and reliability.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Services</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Laundry Services</li>
                    <li>• Home Cleaning</li>
                    <li>• Industrial Cleaning</li>
                    <li>• Fumigation</li>
                    <li>• Pool Cleaning</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Target Market</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Lagos Urban Centers</li>
                    <li>• Residential Properties</li>
                    <li>• Commercial Buildings</li>
                    <li>• Industrial Facilities</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2">Key Features</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Escrow Protection</li>
                    <li>• LGA-based Search</li>
                    <li>• Verified Providers</li>
                    <li>• Real-time Booking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Future Phases */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 2",
                title: "Personal Care & Home Repair",
                description: "Beauty services, handyman services, electrical, plumbing",
                status: "Coming Soon"
              },
              {
                phase: "Phase 3", 
                title: "High-Trust Services",
                description: "Childcare, eldercare, pet care, tutoring",
                status: "Future"
              },
              {
                phase: "Phase 4",
                title: "Specialized Niches", 
                description: "Professional services, consulting, specialized trades",
                status: "Future"
              },
              {
                phase: "Phase 5",
                title: "Rural & Emerging Markets",
                description: "Expansion to rural areas and emerging markets",
                status: "Future"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-center mb-4">
                  <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {phase.status}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <h4 className="font-semibold text-[#030F6D]">{phase.title}</h4>
                </div>
                <p className="text-sm text-gray-600 text-center">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Vision */}
      <section className="py-20 bg-[#030F6D] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Globe className="w-16 h-16 text-[#2aa006] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Global Vision</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Building for international expansion from day one with multi-currency, 
              multi-language support and localized features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Multi-Currency",
                description: "Support for local currencies in each market"
              },
              {
                icon: Users,
                title: "Multi-Language", 
                description: "Localized interface and customer support"
              },
              {
                icon: Shield,
                title: "Local Payment Rails",
                description: "Integration with local payment systems"
              },
              {
                icon: CheckCircle,
                title: "Localized Compliance",
                description: "KYC, tax, and invoicing compliance"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <feature.icon className="w-12 h-12 text-[#2aa006] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Drives <span className="text-[#030F6D]">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Heart className="w-16 h-16 text-[#2aa006] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make prioritizes customer satisfaction and security. 
                Your trust is our most valuable asset.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Lightbulb className="w-16 h-16 text-[#030F6D] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We're constantly improving our platform with new features and 
                technologies to make service booking seamless.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Users className="w-16 h-16 text-[#2aa006] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Building a trusted community where service providers can thrive 
                and customers feel confident in every booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2aa006] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Steerify Revolution</h2>
          <p className="text-xl opacity-90 mb-8">
            Be part of the future of local services. Whether you're a customer looking for 
            trusted providers or a service professional wanting to grow your business, 
            we're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2aa006] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
              Book a Service
            </button>
            <button className="bg-[#030F6D] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#030F6D]/90 transition">
              Become a Provider
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;