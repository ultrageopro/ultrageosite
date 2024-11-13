/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'responsive-small': 'clamp(1rem, 1.5vh + 0.5vw, 1.5rem)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
