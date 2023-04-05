/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        jost: ["Jost", "san-serif"],
        mont: ["Montserrat Alternates"],
      },
      colors: {
        darkgrey: "#292F36",
        lightpurple: "#F4F0EC",
        lightbrown: "#CDA274",
      },
    },
  },
  plugins: [],
};
