/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./design-deals/*.html", "./news/*.html"],
  theme: {
    extend: {
      colors: {
        sme_lightBlack: "#151515",
        sme_purple: "#9b3994",
        sme_grey: "#c2c2c2",
        sme_joy: "#ffb6c1",
        sme_deepPink: "#ff1493",
        sme_lightPink: "#fbf5f3",
        sme_slateGray: "#708090",
        sme_neutral: "#f5f5f5",
        sme_hotPink: "#ffc0cb",
      },
      backgroundImage: {
        sme_home:
          "url('https://res.cloudinary.com/dzomirrk1/image/upload/v1529666683/Ribbons%20Website/Images/hheader.jpg')",
      },
    },
  },
  plugins: [],
};
