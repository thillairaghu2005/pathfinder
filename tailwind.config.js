/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        foreground: '#111111',
        secondary: '#555555',
        navy: {
          DEFAULT: '#14213D',
          hover: '#0C1527',
          soft: '#1B2C4F',
        },
        gold: {
          DEFAULT: '#C5A880',
          dark: '#9E7D47',
          light: '#EADBC8',
        },
        border: '#E2E4E8',
        card: {
          DEFAULT: '#EFEFEF', // Distinct, clean lite grey for cards
          hover: '#E5E7EB',
          lite: '#F2F3F5',
        },
        surface: {
          DEFAULT: '#EFEFEF',
          card: '#EFEFEF',
          hover: '#E5E7EB',
          muted: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Geist', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'btn': '12px',
      },
      maxWidth: {
        'grid': '1280px',
        'content': '1040px',
        'prose-custom': 'none',
      },
      lineHeight: {
        'relaxed-custom': '1.7',
      },
    },
  },
  plugins: [],
}
