/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Background gradient colors
          backgroundStart: "#F5F7FA", // light gray/blue
          backgroundEnd: "#E0E1DD", // soft off-white

          // Primary brand colors
          primary: "#556cd6", // modern blue
          primaryHover: "#3345a1", // darker blue for hover

          // Secondary colors
          secondary: "#0D1B2A", // deep navy
          secondaryHover: "#1B263B", // slightly lighter navy

          // Accent color
          orange: "#FF7F11", // vibrant accent
          orangeHover: "#FF9A42", // lighter orange for hover
        },
      },
      fontFamily: {
        cursive: ["'Edu NSW ACT Cursive'", "cursive"],
        italiana: ["Italiana", "serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        // Gradient backgrounds
        "hero-gradient": "linear-gradient(135deg, #F5F7FA 0%, #E0E1DD 100%)",
        "primary-gradient": "linear-gradient(90deg, #556cd6 0%, #FF7F11 100%)",
      },
    },
  },
  plugins: [],
};
