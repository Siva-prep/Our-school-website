import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#ede9e6',
          100: '#e1dbd7',
          200: '#d5ccc7',
        },
        brand: {
          soft: '#ede9e6',
          main: '#c9996b',
          dark: '#5c4f4a'
        },
        accent: {
          light: '#5c766d'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(92, 76, 74, 0.12)'
      }
    }
  },
  plugins: [],
};

export default config;
