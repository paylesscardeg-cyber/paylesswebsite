import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  User, 
  Phone, 
  MapPin, 
  CheckCircle,
  ArrowLeft,
  Star,
  Shield,
  Clock
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  governorate: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  governorate?: string;
}

const GetYourCard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    governorate: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const egyptianGovernorates = [
    'Cairo',
    'Alexandria',
    'Giza',
    'Qalyubia',
    'Port Said',
    'Suez',
    'Luxor',
    'Aswan',
    'Asyut',
    'Beheira',
    'Beni Suef',
    'Dakahlia',
    'Damietta',
    'Fayyum',
    'Gharbia',
    'Ismailia',
    'Kafr el-Sheikh',
    'Matrouh',
    'Minya',
    'Monufia',
    'New Valley',
    'North Sinai',
    'Qena',
    'Red Sea',
    'Sharqia',
    'Sohag',
    'South Sinai'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 11) {
      newErrors.phone = 'Phone number must be at least 11 digits';
    }

    if (!formData.governorate) {
      newErrors.governorate = 'Please select a governorate';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Restrict to English characters only for text inputs
    if (e.target.type === 'text') {
      const englishOnlyRegex = /^[a-zA-Z\s]*$/;
      if (!englishOnlyRegex.test(value)) {
        return;
      }
    }
    
    // Restrict to numbers only for phone
    if (name === 'phone') {
      const numbersOnlyRegex = /^[0-9]*$/;
      if (!numbersOnlyRegex.test(value)) {
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  try {
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      governorate: formData.governorate,
    };

    await emailjs.send(
      'service_yir3c7j',     // ✅ Service ID
      'template_4inqu47',    // ✅ Template ID
      templateParams
    );

    setIsSubmitted(true);
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for choosing Payless! We've received your card application and will contact you within 24 hours to complete the process.
            </p>
            
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <div className="space-y-2 text-sm text-gray-600 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>We'll verify your information</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Your Payless card will be activated within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Start enjoying discounts immediately at partner locations</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <Link
                to="/reservation"
                className="border border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Make a Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="bg-sky-500 p-4 rounded-full">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Payless Card
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of smart travelers and start saving up to 20% on your next Egyptian adventure
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Benefits Sidebar */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Why Choose Payless?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Guaranteed Savings</p>
                    <p className="text-sm text-gray-600">Up to 20% off at 500+ locations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Instant Activation</p>
                    <p className="text-sm text-gray-600">Start saving within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Star className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Premium Support</p>
                    <p className="text-sm text-gray-600">24/7 customer assistance</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500 text-center">
                  Trusted by 50,000+ travelers across Egypt
                </p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <User className="h-5 w-5 text-sky-500" />
                    <span>Personal Information</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.name ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="+20 123 456 789"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="governorate" className="block text-sm font-medium text-gray-700 mb-2">
                        Governorate *
                      </label>
                      <select
                        id="governorate"
                        name="governorate"
                        value={formData.governorate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.governorate ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select your governorate</option>
                        {egyptianGovernorates.map((gov) => (
                          <option key={gov} value={gov}>{gov}</option>
                        ))}
                      </select>
                      {errors.governorate && (
                        <p className="mt-1 text-sm text-red-600">{errors.governorate}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <CreditCard className="h-5 w-5" />
                        <span>Get My Payless Card</span>
                      </div>
                    )}
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourCard;