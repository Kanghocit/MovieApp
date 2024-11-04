/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        akaya: ["Akaya Telivigala", "san-serif", "asdf", "asdfsadf"],
      },
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
