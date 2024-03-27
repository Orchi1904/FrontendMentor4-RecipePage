import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      outfitBlack: ["Outfit-Black", "sans-serif"],
      outfitBold: ["Outfit-Bold", "sans-serif"],
      outfitExtraBold: ["Outfit-ExtraBold", "sans-serif"],
      outfitExtraLight: ["Outfit-ExtraLight", "sans-serif"],
      outfitLight: ["Outfit-Light", "sans-serif"],
      outfitMedium: ["Outfit-Medium", "sans-serif"],
      outfitRegular: ["Outfit-Regular", "sans-serif"],
      outfitSemiBold: ["Outfit-SemiBold", "sans-serif"],
      outfitThin: ["Outfit-Thin", "sans-serif"],
      youngSerif: ["Young-Serif", "sans-serif"],
    },
    colors: {
      "rose-white": "hsl(330, 100%, 98%)",
      "dark-raspberry": "hsl(332, 51%, 32%)",
      "light-grey": "hsl(30, 18%, 87%)",
      "dark-charcoal": "hsl(24, 5%, 18%)",
      "wenge-brown": "hsl(30, 10%, 34%)",
      nutmeg: "hsl(14, 45%, 36%)",
      eggshell: "hsl(30, 54%, 90%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
