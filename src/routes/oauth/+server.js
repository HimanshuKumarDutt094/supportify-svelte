// /src/routes/oauth/+server.js
import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { insertUser } from '../user-db';
import { getUserData } from '../user-db';
import { usersData } from '$lib/store';
import dotenv from 'dotenv';

import { get } from 'svelte/store';
dotenv.config();
const production = process.env.NODE_ENV === 'production';
const userSotre = usersData;
const SECRET_CLIENT_ID = process.env.SECRET_CLIENT_ID;
const SECRET_CLIENT_SECRET = process.env.SECRET_CLIENT_SECRET;
export const GET = async ({ url }) => {
	const redirectURL = production
		? 'https://supportify-svelte.vercel.app/oauth'
		: 'http://localhost:5173/oauth';
	const code = await url.searchParams.get('code');

	const oAuth2Client = new OAuth2Client(SECRET_CLIENT_ID, SECRET_CLIENT_SECRET, redirectURL);
	const r = await oAuth2Client.getToken(code);

	try {
		if (!r || !r.tokens) {
			throw new Error('Access token not received.');
		}

		oAuth2Client.setCredentials(r.tokens);
		console.info('Tokens acquired.');

		// Fetch user profile information
		const userProfile = await getUserData(r.tokens.access_token);

		// Combine user data from the OAuth token and the profile information
		const user = { ...oAuth2Client.credentials, ...userProfile };
		await insertUser(user);
		const userVal = get(usersData);
		console.log('user val is ', userVal);

		throw redirect(303, `/home/${user.sub.toString()}`);
	} catch (err) {
		console.log('error is ', err);
		throw err;
	}
};
