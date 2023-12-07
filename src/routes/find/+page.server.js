// src/routes/+page.js
import { page } from '$app/stores';
import { searchCreators } from '$lib/db.js';
import { creatorData } from '$lib/store';
import axios from 'axios';
const api = axios.create({
	baseURL: 'http://localhost:5173'
});
// src/routes/+page.server.js
export async function load() {
	try {
		const d = await api.get('http://localhost:5173/dbCon');
		const creators = d.data;
		const uid = creators.uid;
		const user = creators.user;
		const images = creators.image;
		creatorData.set({ [uid]: { user: user, images: images } });

		return {
			props: {
				uid,
				user,
				images
			}
		};
	} catch (error) {
		console.error('Error fetching user data:', error);
		return { status: 500, error: { message: 'Internal Server Error oof' } };
	}
}
