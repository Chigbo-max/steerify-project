import { Star, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const LatestProducts = () => {
  const topProviders = [
    {
      name: "CleanPro Lagos",
      service: "Home Cleaning",
      rating: 4.9,
      reviews: 127,
      image: "https://images.pexels.com/photos/4239142/pexels-photo-4239142.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₦15,000",
      badges: ["Verified", "Top Rated", "Same Day"]
    },
    {
      name: "LaundryMaster",
      service: "Laundry Services", 
      rating: 4.8,
      reviews: 89,
      image: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₦8,000",
      badges: ["Verified", "Pickup & Delivery", "Eco-Friendly"]
    },
    {
      name: "PoolCare Experts",
      service: "Pool Cleaning",
      rating: 5.0,
      reviews: 34,
      image: "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&cs=tinysrgb&w=400", 
      price: "₦25,000",
      badges: ["Verified", "Weekly Service", "Chemical Balancing"]
    },
    {
      name: "PestAway Solutions",
      service: "Fumigation",
      rating: 4.7,
      reviews: 156,
      image: "https://images.pexels.com/photos/8964743/pexels-photo-8964743.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₦20,000", 
      badges: ["Verified", "Safe & Effective", "Residential"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[#030F6D]">Providers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Top-rated service providers with verified reviews and escrow protection
            </p>
          </div>
          <button className="hidden lg:flex items-center space-x-2 bg-[#030F6D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#030F6D]/90 transition">
            <span>View All</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
          {topProviders.map((provider, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group w-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={provider.image} 
                  alt={provider.service}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{provider.rating}</span>
                    <span className="text-xs text-gray-600">({provider.reviews})</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-[#2aa006] text-white p-2 rounded-full">
                    <Shield className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{provider.name}</h3>
                  <span className="text-[#2aa006] font-bold">{provider.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{provider.service}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {provider.badges.slice(0, 2).map((badge, idx) => (
                    <span key={idx} className="bg-[#030F6D]/10 text-[#030F6D] text-xs px-2 py-1 rounded-full font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-[#030F6D] text-white py-3 rounded-xl font-semibold hover:bg-[#030F6D]/90 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg w-full">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Customers Trust These Providers</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-[#2aa006] mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Background Verified</h4>
              <p className="text-gray-600 text-sm">All providers undergo thorough background checks and skill verification</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Shield className="w-12 h-12 text-[#030F6D] mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Escrow Protected</h4>
              <p className="text-gray-600 text-sm">Your payment is secure until service is completed to your satisfaction</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Verified Reviews</h4>
              <p className="text-gray-600 text-sm">Only real customers who booked can leave reviews</p>
            </div>
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="lg:hidden text-center mt-8 w-full">
          <button className="inline-flex items-center space-x-2 bg-[#030F6D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#030F6D]/90 transition">
            <span>View All Providers</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;