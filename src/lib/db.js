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
