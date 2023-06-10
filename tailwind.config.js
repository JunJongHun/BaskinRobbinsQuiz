/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'baskin-robbins-background': "url('/src/assets/Background.png')",
        'baskin-robbins-title': "url('/src/assets/BaskinRobbinsTitle.png')",
        'baskin-robbins-icon': "url('/src/assets/Icon.png')",
       
      }
    },
  },
  plugins: [],
}