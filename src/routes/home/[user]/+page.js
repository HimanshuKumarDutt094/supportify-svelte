import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const production = process.env.NODE_ENV === 'production';

import { usersData } from '../../lib/store';
const api = axios.create({
	baseURL: production ? 'https://supportify-svelte.vercel.app' : 'http://localhost:3000'
});

export async function load({ params }) {
	const user = params.user;

	try {
		const response = await api.get(`https://creepy-red-fossa.cyclic.app/getData/${user}`);
		const userData = response.data;

		usersData.set(userData);
		return { name: userData.user, pfp: userData.pfp };
	} catch (error) {
		console.error('Error fetching user data:', error);
		return { status: 500, error: { message: 'Internal Server Error' } };
	}
}
