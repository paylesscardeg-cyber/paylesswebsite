import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { egyptianGovernorates, governorateRegions } from '../data/governorates';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJaYsVxlxFVPSR3TtUlhItOYfo3y8OyR3wX5tZoNsNDEI3ixSrKghCHYAVYljM4Vlv/exec';
import {
  Calendar,
  User,
  Phone,
  CheckCircle,
  ArrowLeft,
  Star,
  Shield,
  Clock,
  MapPin,
  Tag
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  offer: string;
  governorate: string;
  region: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  offer?: string;
  governorate?: string;
  region?: string;
}

const offerOptions = [
  'El Sokhna Hotels',
  'Sharm El Sheikh Hotels',
  'Hurghada Hotels',
  'Other'
];

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    offer: '',
    governorate: '',
    region: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (!formData.offer) {
      newErrors.offer = 'Please select an offer';
    }

    if (!formData.governorate) {
      newErrors.governorate = 'Please select a governorate';
    }

    if (!formData.region) {
      newErrors.region = 'Please select a region';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (e.target.type === 'text') {
      const englishOnlyRegex = /^[a-zA-Z\s]*$/;
      if (!englishOnlyRegex.test(value)) {
        return;
      }
    }

    if (name === 'phone') {
      const numbersOnlyRegex = /^[0-9]*$/;
      if (!numbersOnlyRegex.test(value)) {
        return;
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'governorate' ? { region: '' } : {})
    }));

    if (name === 'governorate') {
      setErrors(prev => ({ ...prev, governorate: undefined, region: undefined }));
    } else if (errors[name as keyof FormErrors]) {
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
      const body = new FormData();
      body.append('name', formData.name);
      body.append('phone', formData.phone);
      body.append('offer', formData.offer);
      body.append('governorate', formData.governorate);
      body.append('region', formData.region);
      body.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body,
        mode: 'no-cors',
      });

      setFormData({ name: '', phone: '', offer: '', governorate: '', region: '' });
      setIsSubmitted(true);
      if (window.fbq) {
        window.fbq('track', 'Lead');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
              Reservation Submitted Successfully!
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Thank you for using Payless! We've received your reservation request and will contact you within 24 hours to confirm the details.
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
                  <span>Process your reservation with our partners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Send you confirmation with discount details</span>
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
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', phone: '', offer: '', governorate: '', region: '' });
                }}
                className="border border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Make Another Reservation
              </button>
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
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Make a Reservation
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Benefits Sidebar */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Reservation Benefits</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Guaranteed Discounts</p>
                    <p className="text-sm text-gray-600">Exclusive member pricing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Quick Processing</p>
                    <p className="text-sm text-gray-600">24-hour confirmation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Star className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">VIP Treatment</p>
                    <p className="text-sm text-gray-600">Priority booking</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500 text-center">
                  Exclusive access for Payless members
                </p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <User className="h-5 w-5 text-sky-500" />
                    <span>Personal Information</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
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
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
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
                      <label htmlFor="offer" className="block text-sm font-medium text-gray-700 mb-2">
                        Offer *
                      </label>
                      <select
                        id="offer"
                        name="offer"
                        value={formData.offer}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.offer ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select an offer</option>
                        {offerOptions.map((offer) => (
                          <option key={offer} value={offer}>{offer}</option>
                        ))}
                      </select>
                      {errors.offer && (
                        <p className="mt-1 text-sm text-red-600">{errors.offer}</p>
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

                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                        Region *
                      </label>
                      <select
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        disabled={!formData.governorate}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.region ? 'border-red-300' : 'border-gray-300'
                        } ${!formData.governorate ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                      >
                        <option value="">
                          {formData.governorate ? 'Select your region' : 'Please select a governorate first'}
                        </option>
                        {(governorateRegions[formData.governorate] || []).map((reg) => (
                          <option key={reg} value={reg}>{reg}</option>
                        ))}
                      </select>
                      {errors.region && (
                        <p className="mt-1 text-sm text-red-600">{errors.region}</p>
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
                        <Calendar className="h-5 w-5" />
                        <span>Submit Reservation</span>
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

export default Reservation;
