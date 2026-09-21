import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Star, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Download,
  Gift,
  TrendingUp,
  UserCheck,
  Zap,
  Percent,
  Award,
  Heart,
  Target,
  Compass,
  Ticket,
  CreditCard,
  Hotel,
  Plane,
  FileText,
  Building2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import AnimationWrapper from '../components/AnimationWrapper';
import PaylessCard from '../components/PaylessCard';

const Home: React.FC = () => {
  const [showAllVouchers, setShowAllVouchers] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const destinations = [
    {
      name: 'North Coast',
      description: 'Pristine beaches and luxury resorts',
      discount: '20%',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '3000',
      discountedPrice: '2400'
    },
    {
      name: 'Sharm El Sheikh',
      description: 'World-class diving and coral reefs',
      discount: '18%',
      image: 'https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2500',
      discountedPrice: '2050'
    },
    {
      name: 'El Gouna',
      description: 'Modern lagoon town paradise',
      discount: '15%',
      image: 'https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2800',
      discountedPrice: '2380'
    },
    {
      name: 'Dahab',
      description: 'Bohemian vibe and Blue Hole',
      discount: '12%',
      image: 'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2000',
      discountedPrice: '1760'
    },
    {
      name: 'Luxor',
      description: 'Ancient temples and royal tombs',
      discount: '10%',
      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '1800',
      discountedPrice: '1620'
    },
    {
      name: 'Aswan',
      description: 'Nubian culture and Nile cruises',
      discount: '8%',
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2200',
      discountedPrice: '2024'
    }
  ];

  const whyPaylessReasons = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Unbeatable Discounts',
      description: 'Save up to 20% on your entire trip - hotels, dining, activities, and more across Egypt',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Verified Partners',
      description: 'Over 500 trusted partners across Egypt\'s top destinations with guaranteed savings',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Activation',
      description: 'Get your digital card within 24 hours and start saving immediately on your travels',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Exclusive Access',
      description: 'Member-only deals, special experiences, and VIP treatment at premium locations',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const services = [
    {
      icon: <Hotel className="h-8 w-8" />,
      title: 'Hotels',
      description: 'Up to 20% off hotels inside and outside Egypt. We help find top-quality accommodation at the best price.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Flight Tickets',
      description: 'Up to 10% discount on global flights.',
      color: 'from-sky-500 to-sky-600',
      bgColor: 'from-sky-50 to-sky-100',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Visa',
      description: 'We assist with visa applications worldwide. Just a passport and a photo needed.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Umrah',
      description: 'Tailored Umrah packages with full service including hotels, flights, visas, and barcode.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      image: '/umrah.jpg'
    }
  ];

  const vouchers = [
    {
      title: 'Nile Dinner Discount',
      description: 'Enjoy a 30% discount on an open buffet dinner invitation for 2 persons at selected locations along the Nile.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Free Day Use',
      description: 'Day use without spending a dime!',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      location: 'Cairo',
      text: 'Saved over 2000 EGP on my North Coast vacation! This card is absolutely amazing.',
      rating: 5,
      savings: '2000 EGP'
    },
    {
      name: 'Mohamed Hassan',
      location: 'Alexandria',
      text: 'Perfect for weekend getaways. The discounts are real and substantial every time.',
      rating: 5,
      savings: '1500 EGP'
    },
    {
      name: 'Nour El-Din',
      location: 'Giza',
      text: 'Best travel investment I\'ve ever made. Highly recommended for all Egypt travelers!',
      rating: 5,
      savings: '3200 EGP'
    }
  ];

  const faqs = [
    {
      question: 'How does the Payless card work?',
      answer: 'Simply present your Payless card at any of our partner locations to receive instant discounts. The card is activated within 24 hours of registration and can be used immediately.'
    },
    {
      question: 'What destinations are covered by Payless?',
      answer: 'Payless covers all major Egyptian destinations including North Coast, Sharm El Sheikh, Hurghada, Luxor, Aswan, Dahab, El Gouna, and many more locations across Egypt.'
    },
    {
      question: 'How much can I save with Payless?',
      answer: 'You can save up to 20% on hotels, restaurants, activities, and experiences. Our vouchers can help you save over 20,000 EGP annually with special deals and exclusive offers.'
    },
    {
      question: 'Is there an annual fee for the Payless card?',
      answer: 'The Payless card has a one-time registration fee. There are no hidden charges or annual fees. Once you have the card, you can use it for unlimited savings.'
    },
    {
      question: 'Can I use the card for international travel?',
      answer: 'Yes! Payless offers discounts on international flights, visa processing, and hotel bookings outside Egypt. Some vouchers specifically apply to international destinations.'
    }
  ];

  const displayedVouchers = showAllVouchers ? vouchers : vouchers.slice(0, 6);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-100/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-100/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-100/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-sky-100/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sky-50/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white overflow-hidden z-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          {/* Logo at the beginning of header */}
          <div className="flex justify-center lg:justify-start mb-8">
            <Link to="/" className="flex items-center group">
              <div className="p-2">
                <img 
                  src="/website-logo.png"
                  alt="Payless"
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  style={{ borderRadius: '4px' }}
                />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
                Discover the world with
                <span className="block bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Payless Card
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl animate-fade-in-up stagger-2 font-manrope">
                Travel more, spend less – the best deals, anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up stagger-3">
                <Link
                  to="/get-your-card"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center space-x-2 animate-pulse-slow"
                >
                  <span>Unlock Your Discount</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Payless Card Display */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <PaylessCard size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Statement Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper animationType="scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <Target className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-manrope">
                Payless Card – Your Key to Smarter Travel
              </h2>
              <p className="text-lg text-orange-100 max-w-3xl mx-auto font-manrope leading-relaxed">
                From luxury hotels to thrilling cruises and visa assistance, we secure the best prices so you don't have to.<br/>
                <span className="font-semibold">Exclusive savings for life + gift vouchers for a year.</span><br/>
                Trusted by 3,000+ members.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animationType="slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  We Are Egypt's #1 Travel Discount Card
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-manrope">
                  Founded in 2024, Payless Card has grown to serve over 3,000 travelers in less than a year. We are dedicated to being your trusted travel partner, securing the best rates on hotels, flights, visas, and more – without the hassle of searching.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-manrope mt-4">
                  With lifetime discounts and gift vouchers valid for a year, we make every trip more affordable. Our vision is to become the ultimate discount card, offering value beyond travel.
                </p>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animationType="slide-in-right">
              <div className="flex justify-center">
                <PaylessCard size="large" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 text-sky-200/30">
            <Plane className="w-full h-full animate-bounce-slow" />
          </div>
          <div className="absolute top-20 right-20 w-12 h-12 text-orange-200/30">
            <Hotel className="w-full h-full animate-float" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-14 h-14 text-blue-200/30">
            <Building2 className="w-full h-full animate-float" style={{animationDelay: '1s'}} />
          </div>
          <div className="absolute bottom-10 right-1/3 w-10 h-10 text-green-200/30">
            <FileText className="w-full h-full animate-bounce-slow" style={{animationDelay: '2s'}} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Premium Services
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope leading-relaxed">
                Comprehensive travel solutions with exclusive discounts for Payless cardholders
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.slice(0, 4).map((service, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 200}
              >
                <div className="group relative h-full flex flex-col">
                  {/* Main Card */}
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 overflow-hidden relative z-10 flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                      <img 
                        src={service.title === 'Visa' ? '/visa.jpeg' : service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Floating Icon */}
                      <div className={`absolute top-4 left-4 text-white p-2 group-hover:scale-110 transition-all duration-500 z-20`}>
                        {service.icon}
                      </div>
                      
                      {/* Service Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg z-20">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-xs font-bold text-gray-800">PAYLESS</span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-700 text-sm leading-relaxed font-manrope mb-4 flex-1">
                        {service.title === 'Hotels' ? 'Payless gives you great hotel deals – up to 30% off – and finds you the best stays for comfort, value, and service. Just tell us where you\'re going, and we\'ll handle the rest.' :
                         service.title === 'Flight Tickets' ? 'Fly smarter with amazing savings on tickets for all major airlines – plus the freedom to adjust your plans anytime before departure.' :
                         service.title === 'Visa' ? 'Your visa made easy – best price, right documents, and interview booked for you.' :
                         service.title === 'Umrah' ? 'We\'ve crafted the perfect Umrah packages – from 3 to 5 stars hotels – at great prices. Packages include flights, visas, and the Ministry of Tourism\'s barcode permit for a smooth, worry-free journey.' :
                         service.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-xs text-gray-600 font-manrope">Exclusive member discounts</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-xs text-gray-600 font-manrope">24/7 customer support</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-xs text-gray-600 font-manrope">Instant booking confirmation</span>
                        </div>
                      </div>
                      
                      {/* Service-specific Button */}
                      <Link
                        to="/get-your-card"
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2 mt-auto`}
                      >
                        {service.icon && React.cloneElement(service.icon, { className: 'h-4 w-4' })}
                        <span>
                          {service.title === 'Hotels' ? 'Book Hotel' :
                           service.title === 'Flight Tickets' ? 'Book Flight' :
                           service.title === 'Visa' ? 'Apply for Visa' :
                           service.title === 'Umrah' ? 'Book Umrah' : 'Book Now'}
                        </span>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Decorative Background Element */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl transform rotate-1 scale-95 opacity-20 group-hover:rotate-2 group-hover:scale-98 transition-all duration-500`}></div>
                </div>
              </AnimationWrapper>
            ))}
            
            {/* Nile Cruises Service */}
            <AnimationWrapper 
              animationType="scale-in"
              delay={4 * 200}
            >
              <div className="group relative h-full flex flex-col">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 overflow-hidden relative z-10 flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src="/nile.jpeg" 
                      alt="Nile Cruises"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 text-white p-2 group-hover:scale-110 transition-all duration-500 z-20">
                      <Compass className="h-8 w-8" />
                    </div>
                    
                    {/* Service Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg z-20">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                      <span className="text-xs font-bold text-gray-800">PAYLESS</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Nile Cruises
                    </h3>
                    
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope mb-4 flex-1">
                      Experience exclusive pricing for lunch and dinner aboard unique boats on the Nile.
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <span className="text-xs text-gray-600 font-manrope">Exclusive member discounts</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <span className="text-xs text-gray-600 font-manrope">24/7 customer support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <span className="text-xs text-gray-600 font-manrope">Instant booking confirmation</span>
                      </div>
                    </div>
                    
                    {/* Service-specific Button */}
                    <Link
                      to="/get-your-card"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2 mt-auto"
                    >
                      <Compass className="h-4 w-4" />
                      <span>Book Cruise</span>
                    </Link>
                  </div>
                </div>
                
                {/* Decorative Background Element */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl transform rotate-1 scale-95 opacity-20 group-hover:rotate-2 group-hover:scale-98 transition-all duration-500"></div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Why Choose Payless Section */}
      <section className="py-20 bg-white relative pattern-background">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-20 h-20 text-sky-100/40">
            <Shield className="w-full h-full animate-float" />
          </div>
          <div className="absolute top-1/3 right-10 w-16 h-16 text-orange-100/40">
            <Award className="w-full h-full animate-bounce-slow" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-18 h-18 text-green-100/40">
            <TrendingUp className="w-full h-full animate-float" style={{animationDelay: '1s'}} />
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-14 h-14 text-purple-100/40">
            <Zap className="w-full h-full animate-bounce-slow" style={{animationDelay: '2s'}} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Payless?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
                More than just a discount card - it's your gateway to experiencing Egypt like never before
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
            {[
              {
                icon: <Percent className="h-8 w-8" />,
                title: 'Unbeatable Discounts',
                description: 'Enjoy discounts up to 30% all year round – whether it\'s high season, low season, or no season at all.',
                color: 'text-sky-500'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Trusted by Thousands',
                description: 'Over 3,000 satisfied customers trust Payless Card for their travel needs.',
                color: 'text-blue-600'
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: '24/7 Booking & Support',
                description: 'Available 24/7 – we don\'t sleep much anyway, you can book a trip at midnight, sunrise, or whenever your travel mood kicks in!',
                color: 'text-orange-500'
              },
              {
                icon: <CreditCard className="h-8 w-8" />,
                title: 'Small Fee, Big Savings',
                description: 'Cheaper than one night out… but saves you all year round!',
                color: 'text-sky-500'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Secure & Reliable',
                description: 'Your bookings and personal information are protected with bank-level security.',
                color: 'text-blue-600'
              }
            ].map((reason, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 200}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group text-center">
                  <div className={`${reason.color} bg-gray-50 p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-manrope">
                    {reason.description}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          <AnimationWrapper animationType="scale-in">
            <div className="flex justify-center relative z-10">
              <PaylessCard size="large" showAnimation={false} />
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Our Vouchers Section */}
      <section id="vouchers" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-1/4 w-24 h-24 text-orange-200/20">
            <Gift className="w-full h-full animate-float" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 text-sky-200/20">
            <Ticket className="w-full h-full animate-bounce-slow" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 text-blue-200/20">
            <CreditCard className="w-full h-full animate-float" style={{animationDelay: '1s'}} />
          </div>
          <div className="absolute bottom-10 right-10 w-18 h-18 text-green-200/20">
            <Percent className="w-full h-full animate-bounce-slow" style={{animationDelay: '2s'}} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vouchers
              </h2>
              <p className="text-2xl text-sky-600 font-semibold mb-4 font-manrope">
                Unlock exclusive vouchers that can save you over 20,000 EGP each year!
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-manrope">
                Discover amazing deals and exclusive offers available only to Payless cardholders
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Dinner Date',
                description: 'Enjoy a 30% discount on an open buffet dinner invitation for 2 persons at selected locations along the Nile.',
                image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Free Dayuse',
                description: 'Your perfect day out… for zero cost!',
                image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((voucher, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 150}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={voucher.image} 
                      alt={voucher.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      <Gift className="h-4 w-4 inline mr-2" />
                      VOUCHER
                    </div>
                    
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                      <CreditCard className="w-4 h-4 text-sky-600" />
                      <span className="text-sm font-bold text-gray-800">PAYLESS</span>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {voucher.title}
                      </h3>
                      <div className="w-16 h-1 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-700 text-lg leading-relaxed font-manrope mb-6">
                      {voucher.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
                        <span className="text-sm text-gray-600 font-manrope">Exclusive for Payless members</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
                        <span className="text-sm text-gray-600 font-manrope">Valid at partner locations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
                        <span className="text-sm text-gray-600 font-manrope">No expiration date</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                      to="/get-your-card"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2"
                    >
                      <Gift className="h-4 w-4" />
                      <span>Claim This Voucher</span>
                    </Link>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
          
          <AnimationWrapper animationType="fade-in">
            <div className="text-center">
              <p className="text-lg text-gray-600 font-manrope italic">
                These aren't the only vouchers – join us and unlock even more surprises!
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-16 h-16 text-yellow-200/30">
            <Star className="w-full h-full animate-float" />
          </div>
          <div className="absolute top-1/3 right-20 w-20 h-20 text-green-200/30">
            <Heart className="w-full h-full animate-bounce-slow" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-14 h-14 text-blue-200/30">
            <Users className="w-full h-full animate-float" style={{animationDelay: '1s'}} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real Savings, Real Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-manrope">
                See what our customers are saying about Payless
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Gehad Ahmed',
                text: 'Excellent lifetime deal, valuable vouchers, and good discounts. You can regain the subscription amount by using some vouchers. Highly recommended 👍 and special thanks to Mr. Hossam, Ms. Mira for the professionalism.',
                rating: 5
              },
              {
                name: 'Yassmin Saied',
                text: 'Honestly, a very respectable company. I booked a flight ticket a few hours in advance, but they managed to book it for me at the exact time I wanted. The discount on the ticket was excellent, much less than the airline\'s price. Thank you Mr. Hossam for your interest and follow-up!',
                rating: 5
              },
              {
                name: 'Lamiaa Elshall',
                text: 'I\'ve dealt with them more than once and got a hotel discount lower than Booking.com, plus a discount on the Nile Crystal. All respectful people, especially Mr. Hossam, Nour, and Ms. Dina.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <AnimationWrapper 
                key={index}
                animationType="slide-in-left"
                delay={index * 200}
              >
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-100 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic text-lg font-manrope">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-manrope">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 w-24 h-24 text-sky-200/20">
            <HelpCircle className="w-full h-full animate-float" />
          </div>
          <div className="absolute bottom-20 left-10 w-20 h-20 text-blue-200/20">
            <CheckCircle className="w-full h-full animate-bounce-slow" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 font-manrope">
                Everything you need to know about Payless
              </p>
            </div>
          </AnimationWrapper>

          <div className="space-y-4">
            {[
              {
                question: 'What is the Payless Card?',
                answer: 'The Payless Card is a travel discount card that helps you save money on trips, hotel bookings, and transportation services.'
              },
              {
                question: 'How can I apply for a Payless Card?',
                answer: 'You can apply directly through our website by filling in the "Get Your Card" form and following the instructions.'
              },
              {
                question: 'How does the Payless Card save me money?',
                answer: 'We have partnerships with trusted travel and service providers, offering exclusive discounts that you can access with your Payless Card.'
              },
              {
                question: 'Is the Payless Card free?',
                answer: 'No, there is a one-time payment or subscription fee depending on the plan you choose.'
              },
              {
                question: 'How long is my Payless Card valid?',
                answer: 'Your card is valid for lifetime from the date of activation.'
              },
              {
                question: 'Can I use the Payless Card internationally?',
                answer: 'Yes! Our discounts and offers are available for both domestic and international travel.'
              },
              {
                question: 'What should I do if I lose my Payless Card?',
                answer: 'Contact our support team immediately to block the lost card and request a replacement.'
              },
              {
                question: 'How can I check the latest offers and discounts?',
                answer: 'Stay connected – check our website anytime and follow us on Facebook & Instagram for the latest updates.'
              }
            ].map((faq, index) => (
              <AnimationWrapper 
                key={index}
                animationType="fade-in"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-sky-100 p-2 rounded-lg">
                        <HelpCircle className="h-5 w-5 text-sky-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <div className="pl-12">
                        <p className="text-gray-600 leading-relaxed font-manrope">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animationType="slide-in-left">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start Your Journey with Payless?
                </h2>
                <p className="text-xl text-blue-100 mb-8 font-manrope">
                  Join thousands of smart travelers who've already discovered the power of Payless. 
                  Your Egyptian adventure awaits - for less!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Link
                    to="/get-your-card"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 animate-glow"
                  >
                    <Gift className="h-5 w-5" />
                    <span>Book Now and Save Big</span>
                  </Link>
                  
                  <div className="flex items-center space-x-4 text-blue-100">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-manrope">24-hour activation</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-manrope">No hidden fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animationType="slide-in-right">
              <div className="flex justify-center lg:justify-end">
                <PaylessCard size="large" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Final CTA Before Footer */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper animationType="scale-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
              <Compass className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Don't Miss Out on Egypt's Best Deals
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-manrope">
                Every day you wait is money you could be saving. Get your Payless card today!
              </p>
              <Link
                to="/get-your-card"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
              >
                <span>Start Your Journey with Payless</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;