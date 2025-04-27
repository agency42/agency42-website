/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Swap background/foreground for dark theme
          background: '#0C0C0C', // Main background (dark)
          foreground: '#FFFFFF', // Main text color (light)
          primary: '#FFFFFF',    // Primary elements (light)
          secondary: '#A3A3A3',  // Muted text (neutral-400)
          // Removed accent colors
          neutral: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          // Adjust base names for clarity
          'base-light': '#FFFFFF',
          'base-dark': '#0C0C0C',
          // Removed accent colors
        },
        fontFamily: {
          // Define semantic font families
          sans: ['Inter', 'system-ui', 'sans-serif'],       // Body font
          heading: ['Inter', 'system-ui', 'sans-serif'],  // Heading font (Update when Founders Grotesk ready)
          mono: ['var(--font-mono)'],                       // Mono font
        },
      },
    },
    plugins: [],
  }
  
  