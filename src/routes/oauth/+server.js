// /src/routes/oauth/+server.js
import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { insertUser } from '../user-db';
import { getUserData } from '../user-db';
import dotenv from 'dotenv';
dotenv.config();
const production = process.env.NODE_ENV === 'production';

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

		// Store user data in MongoDB
		await insertUser(user);
		// Redirect to the unique user slug
		console.log('Redirecting to user slug...');
		throw redirect(303, `/home/${user.sub.toString()}`);
	} catch (err) {
		console.error('Error occured sending to cret:', err);
		throw err;
	}
};
