/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 2px 8px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
