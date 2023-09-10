/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#66FCF1",
        grey: "#C5C6C7",
        cyan_secondary: "#45A29E"
      }
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
