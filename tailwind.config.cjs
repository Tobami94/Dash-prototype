/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:  {
          100: "#161b2e",
          305: "#df66cf",
          200: "#4338ca",
        },
        secondary: {
          100: "#1E1F25",
          900: "#131517",
          300: "#0A0C21",

        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
