import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
<<<<<<< HEAD
	plugins: [sveltekit()]
	
=======
	plugins: [sveltekit()],
	define: {
		'process.cwd': JSON.stringify(process.cwd()),
		'process.env': {
			APP_ENV: '...'
		}
>>>>>>> 7642566d6529106be040e854c0ca6c5938ca95e4
	}
});
// vite.config.js
