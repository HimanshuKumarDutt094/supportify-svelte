// src/routes/dbCon/+server.ts
import { searchCreators } from '$lib/db.js';
import { creatorData } from '$lib/store';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (request) => {
	const creators = await searchCreators();
	const creatorObjects = {};
	creators.forEach((creator) => {
		const { uid, user, images } = creator;
		creatorObjects[uid] = { user, images };
	});
	return new Response(JSON.stringify({ creators: creatorObjects }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};
