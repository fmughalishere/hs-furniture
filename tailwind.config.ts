import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: {
        extend: {
            colors: {
                furniture: {
                    primary: "#2D2424",
                    secondary: "#E0C097",
                    accent: "#B85C38",
                    light: "#F7F5F2",
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
};

export default config;