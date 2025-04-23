/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',    // dark blue
        secondary: '#2d3748',  // slate
        accent: '#ed8936',     // orange
        'nav-dark': '#1A252F',  // Used in: navigation background, text gradients
        'nav-light': '#0F1519', // Used in: navigation gradient, darker text
        'green-light': '#8BC34A', // Light green
        'green-dark': '#4CAF50',  // Dark green
        'red-light': '#f05252',   // Light red
        'red-dark': '#c81e1e',    // Dark red
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, rgba(15, 21, 25, 0.9), rgba(26, 37, 47, 0.9))',
        'green-gradient': 'linear-gradient(to right, #8BC34A, #4CAF50)',
        'red-gradient': 'linear-gradient(to right, #f05252, #c81e1e)',
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'hero-pattern': "url('/subtle-dots.svg')",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 14px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    }
  },
  plugins: [],
  safelist: [
    'bg-gradient-to-r',
    'from-[#8BC34A]',
    'to-[#4CAF50]',
    'from-blue-500',
    'to-blue-700',
    'from-blue-600',
    'to-blue-800',
    'from-green-500',
    'to-green-700',
    'text-white',
    'text-black',
    'bg-white',
    'bg-black',
    'bg-[#1a1a1a]',
    'bg-[#0a0a0a]',
    'animate-float',
    'animate-pulse-slow',
    'animate-fade-in',
    'animate-slide-up',
    'animate-ping-slow',
    'animate-bounce-gentle',
  ],
  corePlugins: {
    preflight: true,
  }
};
