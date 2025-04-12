// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        display: ['Cabinet Grotesk', ...fontFamily.sans],
      },
      colors: {
        // Premium color palette
        brand: {
          50: '#f0f6ff',
          100: '#e0eeff',
          200: '#baddff',
          300: '#7cc2ff',
          400: '#3aa5ff',
          500: '#0088ff',
          600: '#0070e4',
          700: '#0058b7',
          800: '#004a96',
          900: '#003d7a',
        },
        accent: {
          50: '#fff0f6',
          100: '#ffe0ef',
          200: '#ffbada',
          300: '#ff8dc1',
          400: '#ff5aa5',
          500: '#ff2288',
          600: '#ff006e',
          700: '#e60063',
          800: '#c00052',
          900: '#9d0043',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 1s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(4)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [

  ]
};