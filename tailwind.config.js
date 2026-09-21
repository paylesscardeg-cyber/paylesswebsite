/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'card': '0 10px 25px rgba(59, 130, 246, 0.3)',
        'card-hover': '0 20px 40px rgba(59, 130, 246, 0.4)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'logo': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        }
      }
    },
  },
  plugins: [],
};