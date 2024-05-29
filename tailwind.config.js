module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      spacing: {
        1200: "1200px",
        1500: "1500px",
        vw80: "80vw",
      },
      animation: {
        slideIn: "slideIn 1s ease-in forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      fontFamily: {
        Bigfish: ["Bigfish", "sans-serif"],
        NotoSerifJPRegular: ["NotoSerifJP-Regular", "sans-serif"],
        AlternateRegular: ["Alternate-Regular", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-hamburgers")],
};
