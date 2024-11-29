/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(99, 102, 241)",
        secondaryColor: "rgb(161, 163, 247)",
        primaryText: "rgb(255,255,255)",
        secondaryText: "rgb(174, 178, 183)",
        bgDark1: "#030712",
        bgDark2: "rgb(31, 32, 35)",
        bgDark3: "rgb(48, 49, 54)",
        bgDark3Hover: "rgb(55, 56, 62)",
        bgDarkTransparent: "rgb(31, 32, 35, 0.7)",
        bgDarkTransparentDarker: "rgb(0,0,0,0.5)",
        bgDarkTransparentLighter: "rgb(48, 49, 54, 0.7)",
        mainBorder: "rgb(255,255,255,0.15)",
        mainBorderDarker: "rgb(255,255,255,0.07)",
        quoteIconColor: "rgb(178, 184, 205)",
        greenPrimary: "#9ACC00",
        blackPrimary: "#121312",
        secondary: {
        '50': '#faf6fe',
        '100': '#f2eafd',
        '200': '#e7d9fb',
        '300': '#d5bcf6',
        '400': '#bb90f0',
        '500': '#a165e7',
        '600': '#8b46d7',
        '700': '#7633bd',
        '800': '#652f9a',
        '900': '#53277c',
        '950': '#2e0e4d',
    },
        primary: {
          '50': '#fcffe5',
          '100': '#f7ffc7',
          '200': '#eeff95',
          '300': '#ddff53',
          '400': '#caf625',
          '500': '#abdd05',
          '600': '#85b100',
          '700': '#648605',
          '800': '#50690b',
          '900': '#43590e',
          '950': '#223201',
        },

    
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};

