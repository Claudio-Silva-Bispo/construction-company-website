import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primeira: "#0C1D37",
        segunda: "#152A47",
        terceira: "#213C59",
        quarta: "#77CFC99D60F2",
        quinta: "#5D5D56",
        sexta: "#f4f1e8",
        setima: "#bd8f53",
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      screens: {
        's': '378px',
        'sm': '540px',
        'm': '700px',
        'md': '940px',
        'lg': '1020px',
        'lx': '1200px',
        'xl': '1400px',
        'xxl': '1600px',
      },
      fontFamily: {
        'titulo': ['Plus Jakarta Sans', 'sans-serif'],
        'descritivo': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        light: "100",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};

export default config;
