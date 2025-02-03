/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: '15px'
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		fontFamily: {
			primary: 'var(--font-bebas)',
			secondary: 'var(--font-inter)'
		},
		extend: {
			colors: {
				primary: '#3B403AFF',
				secondary: '#000000FF',
				accent: {
					DEFAULT: '#4E614FFF',
					hover: '#4E614FFF'
				}
			},
			boxShadow: {
				custom: 'Opx 14px 54px rgba(0,0,0,0,1)'
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
};
