// [creatorID]/page.js
import { get } from 'svelte/store';
import { page } from '$app/stores';
import { valueStore } from '$lib/store';
export async function load({ params }) {
	const uid = params.creatorID;

	let value;
	valueStore.subscribe((v) => {
		value = v;
	});
	return {
		props: {
			uid,
			value
		}
	};
}
