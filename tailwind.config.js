// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Dark Slate
        secondary: '#3B82F6', // Bright Blue
        accent: '#F59E0B', // Amber
        background: '#F3F4F6', // Light Gray
        text: '#111827', // Almost Black
      },
    },
  },
  plugins: [],
};


