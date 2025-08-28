import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Shield, Star, Clock } from 'lucide-react';
import { usePostSignUpMutation } from '../../services/SteerifyApi';

const SignUp = () => {
    const navigate = useNavigate();
    const [signUp, { data, error, isLoading }] = usePostSignUpMutation();
    const [successMessage, setSuccessMessage] = useState("");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }
    );

    const handleChange = ((event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    })


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signUp(form).unwrap();
            console.log(response);
            setSuccessMessage("Sign up successful... redirecting");

            setTimeout(() => {
                navigate("/");
            }, 2000);

        } catch (error) {
            console.log("Sign up unsuccessful:", error);
            setSuccessMessage("");
        }

    }

    return (
        <section className="py-20 bg-gradient-to-br from-[#030F6D] to-[#030F6D]/90 text-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Connect To Your Trusted Service Provider
                            <span className="text-[#2aa006]"> Today</span>
                        </h2>
                        <p className="text-xl opacity-90 mb-8 leading-relaxed">
                            Join thousands of satisfied customers who trust Steerify. Create your account,
                            fill in your details, and get instant access to your personalized dashboard - completely free!
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-[#2aa006] flex-shrink-0" />
                                <span className="text-sm">Personal dashboard with booking history</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-[#2aa006] flex-shrink-0" />
                                <span className="text-sm">Access to all vetted service providers</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-[#2aa006] flex-shrink-0" />
                                <span className="text-sm">Real-time booking and tracking</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-[#2aa006] flex-shrink-0" />
                                <span className="text-sm">24/7 customer support</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-[#2aa006] flex-shrink-0" />
                                <span className="text-sm">Fraud protection on all bookings</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-[#2aa006] flex-shrink-0" />
                                <span className="text-sm">Exclusive member discounts</span>
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-[#2aa006] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                <span>Create your free account with email</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-[#2aa006] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                                <span>Complete your profile and preferences</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-[#2aa006] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                                <span>Start booking trusted services immediately</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Registration Form */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border mt-12 border-white/20">
                        <div className="text-center mb-6">
                            <Shield className="w-12 h-12 text-[#2aa006] mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Start Your Free Account</h3>
                            <p className="opacity-90">No credit card required • No setup fees</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#2aa006] focus:border-transparent"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#2aa006] focus:border-transparent"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={form.email}

                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#2aa006] focus:border-transparent"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#2aa006] focus:border-transparent"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#2aa006] text-white py-4 rounded-xl font-semibold hover:bg-[#239205] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                            >
                                <span>Create Free Account</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>

                        {/* Trust Indicators */}
                        <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-white/20">
                            <div className="flex items-center space-x-2">
                                <Shield className="w-4 h-4 text-[#2aa006]" />
                                <span className="text-xs">100% Secure</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-4 h-4 text-[#2aa006]" />
                                <span className="text-xs">Trusted by 10K+</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-[#2aa006]" />
                                <span className="text-xs">2min Setup</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;