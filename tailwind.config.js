/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        subscribeButton: "3px 3px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
