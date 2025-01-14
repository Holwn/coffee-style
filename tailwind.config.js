/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        },
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
      backgroundImage: {
        'coffee-1-slider': 'url("/img/slider/coffee-1-slider.jpg")',
      }
    },
  },
  plugins: [],
}

