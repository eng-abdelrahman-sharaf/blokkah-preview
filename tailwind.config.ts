import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'Gray': {
        '25': '#FCFCFD',
        '50': '#F9FAFB',
        '100': '#F2F4F7',
        '200': '#E4E7EC',
        '300': '#D0D5DD',
        '400': '#98A2B3',
        '500': '#667085',
        '600': '#475467',
        '700': '#344054',
        '800': '#101828',
        '900': '#101828'
      },
      'Brand': {
        '25': '#FCFDFF',
        '50': '#E3E8ED',
        '100': '#CAD3DB',
        '200': '#B0BDC8',
        '300': '#97A8B6',
        '400': '#657E92',
        '500': '#32536D',
        '600': '#002949',
        '700': '#00213A',
        '800': '#00192C',
        '900': '#00101D'
      },
    },
    boxShadow: {
      'inputBoxShadow': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      'inputFocusedBoxShadow': '0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #E3F6FF'
    },
    fontFamily: {
      "Cairo" :["Cairo", 'sans-serif'],
    },
    fontSize: {
      'display-2xl': ['7.2rem', {
        lineHeight: '9rem',
        letterSpacing: "-0.02em",
      }],
      'display-xl': ['6rem', {
        lineHeight: '7.2rem',
        letterSpacing: "-0.02em",
      }],
      'display-lg': ['4.8rem', {
        lineHeight: '6rem',
        letterSpacing: "-0.02em",
      }],
      'display-md': ['3.6rem', {
        lineHeight: '4.4rem',
        letterSpacing: "-0.02em",
      }],
      'display-sm': ['3rem', {
        lineHeight: '3.8rem',
      }],
      'display-xs': ['2.4rem', {
        lineHeight: '3.2rem',
      }],
      'text-xl': ['2rem', {
        lineHeight: '3rem',
      }],
      'text-lg': ['1.8rem', {
        lineHeight: '2.8rem',
      }],
      'text-md': ['1.6rem', {
        lineHeight: '2.4rem',
      }],
      'text-sm': ['1.4rem', {
        lineHeight: '2rem',
      }],
      'text-xs': ['1.2rem', {
        lineHeight: '1.8rem',
      }],
    },
    fontWeight: {
      regular: "400",
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;