/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      extend: {
        typography: {
            DEFAULT: {
                css: {
                    maxWidth: '100%',
                    img: {
                        marginTop: '1.5em',
                        marginBottom: '1.5em',
                    },
                    table: {
                        borderCollapse: 'collapse',
                        width: '100%',
                    },
                    'th,td': {
                        padding: '0.75rem',
                        borderWidth: '1px',
                        borderColor: 'var(--tw-prose-td-borders)',
                    },
                    th: {
                        backgroundColor: 'rgba(236, 253, 245, 1)',
                    },
                },
            },
        },
        fontFamily: {
            butler: ['var(--font-butler)', 'serif'],
            serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
            sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
          },
        animation: {
          'slow-spin': 'spin 20s linear infinite',
        },
        colors: {
          pepper: {
            900: '#111111',
            800: '#222222',
            700: '#333333',
            600: '#444444',
            500: '#555555',
            400: '#666666',
            300: '#777777',
            200: '#888888',
            100: '#999999',
            50: '#aaaaaa',
          },
        },
      },
    },
    plugins: [],
  }