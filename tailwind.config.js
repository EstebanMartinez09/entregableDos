/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "rgba(224, 224, 224, 0.5)",
      },
    },
  },
  plugins: [],
};
