/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary : "#66FCF1",
      secondary : "#1F2833",
      accent : "#FFFFFF",
      // primary: "#61bee0",
      // secondary: "#aebdef",
      // accent: "#2343af",
      be: "#05386B",
      le: "#379683",
      gn: "#5CDB95",
      ln: "#8EE4AF",
      we: "#EDF5E1",
    },

    // Define custom keyframes and animations
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    animation: {
      "fade-in": "fadeIn 1s ease-in-out", // Apply the fadeIn animation with a 1s duration
    },
  },
  plugins: [],
};
