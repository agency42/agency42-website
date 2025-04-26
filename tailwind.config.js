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
          'base-light': '#FFFFFF',
          'base-dark': '#0C0C0C',
          'accent-start': '#FF6B00', // Neon Magma start
          'accent-end': '#FF005C',   // Neon Magma end
        },
        fontFamily: {
          // Reverted to Inter temporarily until Satoshi/Founders Grotesk are sourced
          sans: ['Inter', 'system-ui', 'sans-serif'],
          heading: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['var(--font-mono)'], 
        },
      },
    },
    plugins: [],
  }
  
  