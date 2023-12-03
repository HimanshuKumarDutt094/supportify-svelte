// $lib/user.js
import { writable } from 'svelte/store';

let storedUserData;

// Check if running on the client side
if (typeof window !== 'undefined') {
	// Retrieve user data from local storage on page load
	storedUserData = JSON.parse(localStorage.getItem('usersData'));
}

// Create a writable store with initial value set to stored user data or null
export const usersData = writable(storedUserData);

// Subscribe to changes in the store and update local storage
usersData.subscribe((value) => {
	// Check if running on the client side before updating local storage
	if (typeof window !== 'undefined') {
		localStorage.setItem('usersData', JSON.stringify(value));
	}
});
