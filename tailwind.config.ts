import type { Config } from "tailwindcss";

const colors = {
  Success: {
    "600": "#039855",
  },
  Gray: {
    "25": "#FCFCFD",
    "50": "#F9FAFB",
    "100": "#F2F4F7",
    "200": "#E4E7EC",
    "300": "#D0D5DD",
    "400": "#98A2B3",
    "500": "#667085",
    "600": "#475467",
    "700": "#344054",
    "800": "#101828",
    "900": "#101828",
  },
  Brand: {
    "25": "#FCFDFF",
    "50": "#E3E8ED",
    "100": "#CAD3DB",
    "200": "#B0BDC8",
    "300": "#97A8B6",
    "400": "#657E92",
    "500": "#32536D",
    "600": "#002949",
    "700": "#00213A",
    "800": "#00192C",
    "900": "#00101D",
  },
  Error: {
    "25": "#FFFBFA",
    "50": "#FEF3F2",
    "100": "#FEE4E2",
    "200": "#FECDCA",
    "300": "#FDA29B",
    "400": "#F97066",
    "500": "#F04438",
    "600": "#D92D20",
    "700": "#B42318",
    "800": "#912018",
    "900": "#7A271A",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      backgroundColor: colors,
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",

        inputBoxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        activeElementBoxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #E3F6FF",
      },

      blur: {
        xs: "2px",
      },

      // fontSize: {
      //   "20xl": ["72px", { lineHeight: "90px", letterSpacing: "-2px" }],
      //   "18xl": ["60px", { lineHeight: "72px", letterSpacing: "-2px" }],
      //   "16xl": ["48px", { lineHeight: "60px", letterSpacing: "-2px" }],
      //   "14xl": ["36px", { lineHeight: "44px", letterSpacing: "-2px" }],
      //   "12xl": ["30px", { lineHeight: "38px" }],
      //   "10xl": ["24px", { lineHeight: "32px" }],
      //   "5xl": ["20px", { lineHeight: "30px" }],
      //   "4xl": ["18px", { lineHeight: "28px" }],
      //   "3xl": ["16px", { lineHeight: "24px" }],
      //   "2xl": ["14px", { lineHeight: "20px" }],
      //   xl: ["12px", { lineHeight: "18px" }],
      // },

      fontSize: {
        "20xl": [
          "4.5rem",
          { lineHeight: "5.625rem", letterSpacing: "-0.125rem" },
        ],
        "18xl": [
          "3.75rem",
          { lineHeight: "4.5rem", letterSpacing: "-0.125rem" },
        ],
        "16xl": ["3rem", { lineHeight: "3.75rem", letterSpacing: "-0.125rem" }],
        "14xl": [
          "2.25rem",
          { lineHeight: "2.75rem", letterSpacing: "-0.125rem" },
        ],
        "12xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "10xl": ["1.5rem", { lineHeight: "2rem" }],
        "5xl": ["1.25rem", { lineHeight: "1.875rem" }],
        "4xl": ["1.125rem", { lineHeight: "1.75rem" }],
        "3xl": ["1rem", { lineHeight: "1.5rem" }],
        "2xl": ["0.875rem", { lineHeight: "1.25rem" }],
        xl: ["0.75rem", { lineHeight: "1.125rem" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};

export default config;
