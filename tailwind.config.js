/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing:{
        tighter: '4px',
      },
      
      fontFamily: {
        inter: ["var(--inter)"],
        oswald: ["var(--oswald)"],
        roboto: ["var(--roboto)"],
        custom: ['GTAmerica-Regular', 'sans'],
      },
      fontWeight:{
        lightWeight:500
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
