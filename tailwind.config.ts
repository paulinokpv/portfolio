import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'banner': "url('/imagem-projeto.jpg')",
        'img-html': "url('/icon-html5.png')",
      },
      colors: {
        'branco': '#ffffff',
        'preto': '#000000',
        'bg-color1': '#323B45',
        'bg-color2': '#101623',
        'container-bg-color': '#1e1f24',
        'header-color1': '#2c2e45',
        'header-color2': '#545d70',
        'link-hover-color': '#ffae00',
        'banner-shadow-color-1': '#000000f4',
        'banner-shadow-color-2': '#00000000',
        'box-bg-color': '#2b2c44',
        'bar-color1': '#787f9a',
        'bar-color2': '#ffae00',
        'btn-color1': '#449225',
        'btn-color2': '#c1ffa8',

      },
      height: {
        'calc-100vh-minus-100px': 'calc(100vh - 100px)',
        'screen-90': '90vh',
        'screen-80': '80vh',
        'screen-70': '70vh',
        'screen-100': '100vh',
        '120': '30rem',
          // Adicione outras alturas conforme necessário
        
      },
      width: {
        'screen-3': '3vw',
        'screen-90': '90vw',
        'screen-80': '80vw',
        'screen-70': '70vw',
        'screen-100': '100vw',
          // Adicione outras alturas conforme necessário
        
      },
      maxWidth: {
        '1280': '980px',
        '45%':'45%',
        '100%': '100%'
      },
      boxShadow: {
        'custom': '-10px 10px 40px #000000',
      },
    margin: {
      'custom-margin': '10px 3vw',
      '12': '3rem',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    zIndex: {
      '100': '100',
    },
  }
  },
  plugins: [],
};
export default config;
