/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos React donde usarás Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'dishColor':'#ffbd59',
      }
    },
  },  
  plugins: [],
};
