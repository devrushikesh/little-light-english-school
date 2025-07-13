/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                 // Vite entry point
    "./src/**/*.{js,jsx,ts,tsx}",   // All React components and files
    "./src/**/*.{vue,html}",        // Additional template files if any
    "./public/**/*.html",           // All HTML files in public
    "./src/components/**/*.{js,jsx,ts,tsx}", // Explicit components folder
    "./src/pages/**/*.{js,jsx,ts,tsx}",      // Explicit pages folder
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'pop': 'pop 0.5s ease-out',
        'fadeIn': 'fadeIn 1s ease-in',
        'slideInUp': 'slideInUp 0.6s ease-out',
        'bounce': 'bounce 1s infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
        'jump': 'jump 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    // Ensure these classes are always included in the build
    'appearance-none',
    'bg-white',
    'cursor-pointer',
    'text-gray-500',
    'text-gray-900',
    'border-red-500',
    'bg-red-50',
    'focus:ring-2',
    'focus:ring-indigo-500',
    'focus:border-indigo-500',
    'transition-colors',
  ],
};
