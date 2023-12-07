import { MongoClient } from 'mongodb';
const MONGO_URI = import.meta.env.VITE_MONGO_URI;
let client;

export async function connectToDatabase() {
	if (!client) {
		client = new MongoClient(MONGO_URI);

		try {
			await client.connect();
		} catch (error) {
			console.error('Error connecting to MongoDB:', error);
			throw error;
		}
	}

	return client;
}

export async function searchCreators() {
	let creatorsObj = {};

	const client = await connectToDatabase();
	const db = client.db('supportify-svelte');
	const collection = db.collection('creators');

	const documents = await collection.find().toArray();

	creatorsObj = documents.reduce((obj, document) => {
		obj[document.uid] = { user: document.users, images: document.images };
		return obj;
	}, {});

	const result = Object.entries(creatorsObj).map(([uid, { user, images }]) => ({
		uid,
		user,
		images
	}));

	return result;
}
