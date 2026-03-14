import type { Config } from 'tailwindcss'
const plugin = require("tailwindcss/plugin");
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {  
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        primary: "#FFCC21",
        secondary: "#cca01a",
        gold:'#FFD700',
        "soft-gray":"#F5F5F5",
        highlight:"#FFC821",
        'text-gray':'#777777',
        "neutral-1": "#191919",
        "neutral-2": "#222222",
        "neutral-3": "#474747",
        "neutral-4": "#5A5A5A",
        "neutral-5": "#737373",
        "neutral-6": "#9E9E9E",
        "neutral-7": "#BCBCBC",
        "neutral-8": "#CCCCCC",
        "neutral-9": "#DDDDDD",
        "neutral-10": "#F0F0F0",
        "neutral-11": "#FAFAFA",
        "neutral-12": "#FFFFFF",

      }, fontSize: {
        "2xs": "10px",
        "3xs": "8px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }:any) {
      addComponents({
        ".apply-gr-btn": {
          background:
            "linear-gradient(90deg, #cca01a , #FFCC21 ,#FFCC21,#cca01a)",
          backgroundSize: "200%",
          backgroundPosition: "right",
          transition: "all 500ms linear ",
          "&:hover": {
            backgroundPosition: "left",
          },
          "&:focus": {
            backgroundPosition: "left",
          },
        },
        
      });
      addUtilities({
        ".content-auto": {
          contentVisibility: "auto",
        },
      });
    }),
  ],
}
export default config
