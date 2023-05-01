/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "kryptokurz-background": "rgb(33,33,33)",
        "kryptokurz-gray": "rgb(120,120,120)",
        "kryptokurz-green": "#2A7E2E",
        "kryptokurz-cookie-banner": "rgb(20,27,33)",
      },
    },
  },
  plugins: [],
};
