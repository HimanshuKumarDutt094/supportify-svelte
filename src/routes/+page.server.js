// src/routes/+page.js
import { page } from '$app/stores';
import { searchCreators } from '$lib/db.js';
import { creatorData } from '$lib/store';
import axios from 'axios';
const production = import.meta.env.VITE_MODE === 'production';

const api = axios.create({
	baseURL: production ? 'https://supportify-svelte.vercel.app' : 'http://localhost:5173'
});
// src/routes/+page.server.js
export async function load() {
	try {
		let uid, user, images;
		const d = await api.get(
			production ? 'https://supportify-svelte.vercel.app' : 'http://localhost:5173'
		);
		const creators = d.data.creators;
		Object.keys(creators).forEach((key) => {
			uid = key;
			user = creators[key].user;
			images = creators[key].images;
		});
		creatorData.set({ ...creators });

		return {
			creators
		};
	} catch (error) {
		console.error('Error fetching user data:', error);
		return { status: 500, error: { message: 'Internal Server Error oof' } };
	}
}
