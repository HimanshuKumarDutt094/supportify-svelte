import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			esbuild: {
				target: 'node20'
			}
		})
	},
	preprocess: vitePreprocess({
		include: ['src/**/*.svelte']
	})
};
export default config;
