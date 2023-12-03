import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
import { get } from 'svelte/store';

const production = process.env.NODE_ENV === 'production';

import { usersData } from '$lib/store';
const api = axios.create({
	baseURL: production
		? 'https://creepy-red-fossa.cyclic.app/'
		: 'https://creepy-red-fossa.cyclic.app/'
});

export async function load({ params }) {
	const user = params.user;
	const userPresent = get(usersData);
	try {
		if (userPresent.name === undefined) {
			const response = await api.get(`https://creepy-red-fossa.cyclic.app/getData/${user}`);
			const userData = response.data;

			console.log('user data is stored and returning', userData);
			usersData.set({ name: userData.user, pfp: userData.pfp });
			return { userData };
		} else {
			return { usersData };
		}
	} catch (error) {
		console.error('Error fetching user data:', error);
		return { status: 500, error: { message: 'Internal Server Error oof' } };
	}
}
