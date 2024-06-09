import type { Config } from "tailwindcss";


const config: Config = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-to-blue": {
          from: "#ff6e7f", // Pink color
          to: "#bfe9ff",   // Blue color
        },
      },
    },
  },
  plugins: [],
  variants: {
      extend: {
          borderColor: ['focus'],
          ring: ['focus'],
          borderWidth: ['focus'],
      },
  },
};
export default config;
