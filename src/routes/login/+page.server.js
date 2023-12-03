import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_CLIENT_ID = process.env.SECRET_CLIENT_ID;
const SECRET_CLIENT_SECRET = process.env.SECRET_CLIENT_SECRET;
const production = process.env.NODE_ENV === 'production';

export const actions = {
	OAuth2: async ({}) => {
		const redirectURL = production
			? 'https://supportify-svelte.vercel.app/oauth'
			: 'http://localhost:5173/oauth';

		const oAuth2Client = new OAuth2Client(SECRET_CLIENT_ID, SECRET_CLIENT_SECRET, redirectURL);

		// Generate the url that will be used for the consent dialog.
		const authorizeUrl = oAuth2Client.generateAuthUrl({
			access_type: production ? 'online' : 'offline',
			scope: 'https://www.googleapis.com/auth/userinfo.profile  openid ',
			prompt: 'consent'
		});

		throw redirect(302, authorizeUrl);
	}
};
