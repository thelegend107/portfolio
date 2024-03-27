/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xl: '1440px',
                hd: '1900px'
            },
            colors: {
                primary: "#5356FF",
                secondary: "#0B60B0",
                dark: "#000000",
                light: "#e5e4e2"
            },
        },
    },
};
