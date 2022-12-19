/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    colors: {
      text: "#FFFFFF",
      boxcolor: "#1e212a",
      placeholder: "#E1E1E1",
      primarycolor: "#AA91F0",
      primaryhover: "#805BE8",
      buttontext: "#FFFFFF",
      backgroundcolor: "#333333",
      inputbackground: "#212529",
      deletecolor: "#DD4B4B",
      hovercard: "#000000",

      borderColor1:'rgba(233, 236, 239, 1)',
      texttocansado: '#5d5b5c',
      backgroundHeader: "#F8F9FA",
      backgroundlanding: "rgba(0, 0, 0, 0.72)",
      backgroundButton1:'rgba(253, 55, 126, 1)',
      backgroundButton2:'#E9ECEF',
    },
    
    extend: {
      boxShadow:{
        '3xl': '0px 4px 32px -12px rgba(0, 0, 0, 0.25)',
      },
      width: {
        '70vw': '70vw',
      },
    },
  },
  plugins: [],
}
