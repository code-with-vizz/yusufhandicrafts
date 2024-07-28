/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '45': '45deg',
        '60': '60deg',
        // Add more custom rotations as needed
      },
    },
  },
 
    

}