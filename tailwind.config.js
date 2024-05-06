/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F26969",
        primary2: "#F4C31E",
        secondary: "#111827",
        captions: "#696D77",
      },
      fontFamily: {
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "32px",
        },
      },
      screens: {
        lg: "1280px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
