/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xl: "1440px",
                hd: "1900px",
            },
            colors: {
                primary: "#5356FF",
                secondary: "#0B60B0",
                dark: "#0A0A0B",
                light: "#F4F4F2",
                ink: "#0A0A0B",
                paper: "#F4F4F2",
                basin: {
                    depth: "#0A1A33",
                    current: "#1E2D4A",
                    dilute: "#606D80",
                },
            },
            fontFamily: {
                display: [
                    "var(--font-display)",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                ],
                sans: [
                    "var(--font-sans)",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                ],
            },
        },
    },
}
