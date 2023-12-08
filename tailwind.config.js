/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: { scrollbar: ['dark'] }
	},
	plugins: [require('tailwind-scrollbar')]
};
