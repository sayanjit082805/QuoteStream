/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      boxShadow: {
        "3xl": "0 2px 8px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
