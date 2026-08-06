/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#111111',
        secondary: '#666666',
        navy: {
          DEFAULT: '#14213D',
          hover: '#0E172C',
        },
        border: '#ECECEC',
        surface: {
          DEFAULT: '#FFFFFF',
          hover: '#F7F7F7',
          muted: '#FAFAFA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Geist', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '18px',
        'btn': '12px',
      },
      maxWidth: {
        'grid': '1320px',
        'content': '1080px',
        'prose-custom': 'none',
      },
      lineHeight: {
        'relaxed-custom': '1.7',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '200': '200ms',
      }
    },
  },
  plugins: [],
}
