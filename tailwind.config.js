/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    	extend: {
    		typography: (theme) => ({
    			DEFAULT: {
    				css: {
    					'--tw-prose-body': theme('colors.neutral[900]'),
    					'--tw-prose-headings': theme('colors.neutral[900]'),
    					'--tw-prose-lead': theme('colors.neutral[700]'),
    					'--tw-prose-links': theme('colors.neutral[900]'),
    					'--tw-prose-bold': theme('colors.neutral[900]'),
    					'--tw-prose-counters': theme('colors.neutral[600]'),
    					'--tw-prose-bullets': theme('colors.neutral[400]'),
    					'--tw-prose-hr': theme('colors.neutral[200]'),
    					'--tw-prose-quotes': theme('colors.neutral[900]'),
    					'--tw-prose-quote-borders': theme('colors.neutral[200]'),
    					'--tw-prose-captions': theme('colors.neutral[600]'),
    					'--tw-prose-code': theme('colors.neutral[900]'),
    					'--tw-prose-pre-code': theme('colors.neutral[200]'),
    					'--tw-prose-pre-bg': theme('colors.neutral[800]'),
    					'--tw-prose-th-borders': theme('colors.neutral[300]'),
    					'--tw-prose-td-borders': theme('colors.neutral[200]'),

    					// Base body text
    					p: {
    						fontFamily: theme('fontFamily.sans').join(', '),
    						fontWeight: '600',
    						lineHeight: '1.75',
    					},

    					// Images
    					img: {
    						marginLeft: 'auto',
    						marginRight: 'auto',
    					},

    					// Headings
    					'h2, h3, h4, h5, h6': {
    						fontFamily: theme('fontFamily.heading').join(', '),
    						fontWeight: '600', // semibold
    					},
    					
    					// Links
    					a: {
    						fontWeight: '500',
    						textDecoration: 'underline',
    						transition: 'color 0.2s ease-in-out',
    						'&:hover': {
    							color: theme('colors.neutral[700]'),
    						},
    					},

    					// Bold
    					strong: {
    						fontWeight: '700', // bold
    					},

    					// Footnotes/Ordered lists (Notes section)
    					ol: {
    						fontSize: '0.875rem', // text-sm to match index
    						fontFamily: theme('fontFamily.mono').join(', '),
    					},
    					'ol li': {
    						fontSize: '0.875rem', // text-sm
    						fontFamily: theme('fontFamily.mono').join(', '),
    					},
    				},
    			},
    		}),
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			neutral: {
    				'50': '#FAFAFA',
    				'100': '#F5F5F5',
    				'200': '#E5E5E5',
    				'300': '#D4D4D4',
    				'400': '#A3A3A3',
    				'500': '#737373',
    				'600': '#525252',
    				'700': '#404040',
    				'800': '#262626',
    				'900': '#171717'
    			},
    			'base-light': '#FFFFFF',
    			'base-dark': '#0C0C0C',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'var(--font-inter)',
    				'system-ui',
    				'sans-serif'
    			],
    			heading: [
    				'var(--font-inter)',
    				'system-ui',
    				'sans-serif'
    			],
    			mono: [
    				'var(--font-ibm-plex-mono)',
    				'monospace'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
    plugins: [
      require("tailwindcss-animate"),
      require('@tailwindcss/typography')
    ],
  }
  
  