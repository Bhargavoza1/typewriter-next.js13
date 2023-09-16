import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 0.5s ease-in-out infinite alternate "
      },
      keyframes: {
        typing: {
          "0%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          }
        },
      },
      screens: {
        '3xl': '2000px',
        'myimg': '1300px' ,
        'navcenter': {'min': '768px', 'max': '1300px'},
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },


  plugins: [],
}
export default config
