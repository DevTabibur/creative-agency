/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FBD062",

          secondary: "#7AB259",

          accent: "#111430",

          neutral: "#191D24",

          "base-100": "#FFFFFF",

          info: "#3F90FC",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  //...
  plugins: [require("daisyui")],
};
