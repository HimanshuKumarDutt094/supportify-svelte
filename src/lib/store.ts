// $lib/user.js
import { writable } from 'svelte/store';

// Create a writable store with initial value set to stored user data or null
export const usersData = writable({});
