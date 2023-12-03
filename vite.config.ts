import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.cwd': JSON.stringify(process.cwd()),
		'process.env': {
			APP_ENV: '...'
		}
	}
});
// vite.config.js
