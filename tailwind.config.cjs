/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:  {
          100: "#161c31",
          305: "#df66cf",
          200: "#4338ca",
        },
        secondary: {
          100: "#161c31",
          900: "#111525",
          300: "#0A0C21",
          228: "#2b3043", //hr

        },
      },
   
  },
},
  plugins: [require("@headlessui/tailwindcss")],
};
