import React from 'react';
import { CreditCard, MapPin, Star, Sparkles } from 'lucide-react';

interface PaylessCardProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showAnimation?: boolean;
}

const PaylessCard: React.FC<PaylessCardProps> = ({ 
  className = '', 
  size = 'medium',
  showAnimation = true 
}) => {
  const sizeClasses = {
    small: 'w-64 h-40',
    medium: 'w-80 h-48',
    large: 'w-96 h-56'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} ${showAnimation ? 'animate-float' : ''}`}>
      <img 
        src="/website-card.png" 
        alt="Payless Travel Card"
        className="w-full h-full object-cover rounded-3xl shadow-2xl hover:shadow-glow transition-shadow duration-300"
        onError={(e) => {
          e.currentTarget.style.display = 'flex';
          e.currentTarget.nextElementSibling!.style.display = 'none';
        }}
      />
      {/* Enhanced Fallback Card Design */}
      <div 
        className="w-full h-full bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700 rounded-xl shadow-2xl flex flex-col justify-between p-6 text-white relative overflow-hidden hover:shadow-glow transition-all duration-300 group"
        style={{display: 'none'}}
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 group-hover:animate-pulse">
            <Sparkles className="h-8 w-8" />
          </div>
          <div className="absolute bottom-4 left-4 group-hover:animate-bounce">
            <MapPin className="h-6 w-6" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 border border-white/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          </div>
          <div className="absolute top-8 left-8">
            <div className="w-4 h-4 bg-white/30 rounded-full"></div>
          </div>
          <div className="absolute bottom-8 right-8">
            <div className="w-6 h-6 bg-white/20 rounded-full"></div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-2">
            <CreditCard className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-bold tracking-wider">PAYLESS</span>
          </div>
          <p className="text-sm opacity-90 font-manrope">Travel Discount Card</p>
          <div className="mt-2 w-12 h-1 bg-white/50 rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs opacity-75 font-manrope">SAVE UP TO</p>
              <p className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">70%</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-75 font-manrope">VALID IN</p>
              <p className="text-sm font-semibold">EGYPT</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current text-yellow-300" />
              ))}
            </div>
            <span className="text-xs opacity-75 font-manrope">500+ Partners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaylessCard;