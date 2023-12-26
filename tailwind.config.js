module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            
            keyframes: {
                fadeInDown: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-2rem)",
                    },

                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },

                fadeInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(2rem)",
                    },

                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },

            animation: {
                "fade-up": "fadeInUp 1s ease-out",
                "fade-down": "fadeInDown 1s ease-out",
            },
        },
    },
    plugins: [],
};
