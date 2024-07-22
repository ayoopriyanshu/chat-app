/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-opacity': 'pulseOpacity 1s ease-in-out infinite',
      },
      keyframes: {
        pulseOpacity: {
          '0%, 100%': {
            opacity: '100%',
          },
          '50%': {
            opacity: '20%',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}