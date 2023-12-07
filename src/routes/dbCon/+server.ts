// src/routes/dbCon/+server.ts
import { searchCreators } from '$lib/db.js';
import { creatorData } from '$lib/store';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (request) => {
	const creators = await searchCreators();
	const uid = creators.map((creator) => creator.uid);
	const user = creators.map((creator) => creator.user);
	const image = creators.map((creator) => creator.images);
	const creatorObjects = creators.map((creator) => ({
		[creator.uid]: { user: creator.user, images: creator.images }
	}));
	creatorData.set(creatorObjects);
	return new Response(JSON.stringify({ uid, user, image }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};
