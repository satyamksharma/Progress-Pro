/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                'bg-light': '#f5f5f5',
                'bg-dark': '#1a202c',
                'primary-light': {
                    100: '#ff6363',
                    200: '#ec4242',
                },
                'secondary-light': {
                    100: '#232D3F',
                    200: '#0F0F0F',
                },
                'primary-dark': {
                    100: '#471a58',
                    200: '#22092C',
                },
                'secondary-dark': {
                    100: '#e2e2d5',
                    200: '#888883',
                },
            },
            fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
                roboto: ['Roboto', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
                sans: ['Roboto', 'sans-serif'],
            },
            animation: {
                ['infinite-slider']: 'infiniteSlider 25s linear infinite',
            },
            keyframes: {
                infiniteSlider: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': {
                        transform: 'translateX(calc(-250px * 5))',
                    },
                },
            },
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px',
        },
    },
    plugins: [],
};
