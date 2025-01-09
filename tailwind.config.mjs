/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primarymarineblue: "var(--primary-marine-blue)",
        primarypastelblue: "var(--primary-pastel-blue)",
        primarypurplishblue: "var(--primary-purplish-blue)",
        primarylightblue: "var(--primary-light-blue)",
        primarystrawberryred: "var(--primary-strawberry-red)",
        neutralcoolgray: "var(--neutral-cool-gray)",
        primarylightgray: "var(--primary-light-gray)",
        primarymagnolia: "var(--primary-magnolia)",
        primaryalabaster: "var(--primary-alabaster)",
        primarywhite: "var(--primary-white)",
      },
      height: {
        650: "584px",
      },
    },
  },
  plugins: [],
};
// --primary-marine-blue: #02295a;
// --primary-purplish-blue: #473dff;
// --primary-pastel-blue: #adbeff;
// --primary-light-blue: #bfe2fd;
// --primary-strawberry-red: #ed3548;
// --neutral-cool-gray: #9699ab;
// --primary-light-gray: #d6d9e6;
// --primary-magnolia: #f0f6ff;
// --primary-alabaster: #fafbff;
// --primary-white: #ffffff;
