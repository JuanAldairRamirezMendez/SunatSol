/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0057A8",
        success: "#1D9E75",
        alert: "#EF9F27",
        background: "#F9FAFB",
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "System"],
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};