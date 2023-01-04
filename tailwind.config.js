/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green: "#017737",
                lime: "#D7F9D3",
                violet: "#6861F2",
            },
        },
    },
    plugins: [],
};
