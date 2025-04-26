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
          // Define semantic colors based on PRD + common use cases
          background: '#FFFFFF', // Main background
          foreground: '#0C0C0C', // Main text color
          primary: '#0C0C0C',    // Primary buttons, actions (can adjust later)
          secondary: '#525252',  // Muted text, secondary elements (example: neutral-600)
          accent: '#FF6B00',     // Primary accent (Neon Magma start)
          'accent-secondary': '#FF005C', // Secondary accent (Neon Magma end)
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
          // Keep original names for now, but prefer semantic usage
          'base-light': '#FFFFFF',
          'base-dark': '#0C0C0C',
          'accent-start': '#FF6B00',
          'accent-end': '#FF005C',
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
  
  