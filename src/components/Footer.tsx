import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="p-2">
                <img 
                  src="/website-logo.png"
                  alt="Payless"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your ultimate travel companion for exploring Egypt's most beautiful destinations. 
              Save money while creating unforgettable memories across the land of pharaohs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1Dvq3ejXGK/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/payless.card?igsh=cGFubXZxb2V6b3hj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://vm.tiktok.com/ZSHsWN393Wt4t-9ASDQ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/payless-card/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <a 
                  href="mailto:info@paylesscardeg.com" 
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  info@paylesscardeg.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <a 
                  href="tel:+201044503305" 
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  010 44503305 - ‭0104 4503306‬
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span className="text-gray-400 text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Payless Travel. All rights reserved. | Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;