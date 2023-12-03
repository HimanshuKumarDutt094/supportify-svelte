// user-db.js
import { connectToDatabase } from './lib/db';
import { usersData } from './lib/store';
import { ObjectId } from 'mongodb';
export async function insertUser(userData) {
	const client = await connectToDatabase();
	const db = client.db('supportify-svelte'); // Replace with your database name
	const users = db.collection('users');

	try {
		// Check if a user with the same _id already exists
		const existingUser = await users.findOne({ _id: userData._id });

		if (existingUser) {
			console.warn('User with _id already exists. Skipping insertion.');
			// Optionally, you can choose to update the existing user data here if needed
		} else {
			// Insert the user data
			await users.insertOne(userData);
			usersData.set(userData);
			return userData;
		}
	} catch (error) {
		// Handle duplicate key error (E11000) and log a message
		if (error.code === 11000) {
			console.error('Error inserting user - Duplicate key:', error.message);
		} else {
			console.error('Error inserting user:', error);
		}
		throw error;
	}
}

export async function getUserData(access_token) {
	const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});

	if (!response.ok) {
		throw new Error('Failed to fetch user data from Google API');
	}

	const userData = await response.json();
	return userData;
}
export async function getUserById(userId) {
	const client = await connectToDatabase();
	const db = client.db('supportify-svelte'); // Replace with your database name
	const users = db.collection('users');
	const objectId = new ObjectId(userId);

	return await users.findOne({ _id: objectId });
}
