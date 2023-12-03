import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.cwd': () => '/',
		'process.env': process.env,
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}
});
// vite.config.js
