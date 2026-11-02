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
                primary: "#3E63D6",
                secondary: "#1B3A9A",
                neon: "#A100E8",
                dark: "#0C0C0E",
                light: "#F4F5F7",
                ink: "#0C0C0E",
                paper: "#F4F5F7",
                basin: {
                    depth: "#10182C",
                    current: "#1A2748",
                    dilute: "#5C6A82",
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
