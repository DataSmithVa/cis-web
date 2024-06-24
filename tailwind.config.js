// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        russo: ['"Russo One"', "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
