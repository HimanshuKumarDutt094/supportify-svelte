// [creatorID]/page.js
import { creatorData } from '$lib/store';
import { get } from 'svelte/store';
export async function load({ params }) {
	const uid = params.creatorID;
	creatorData.subscribe((value) => {
		const key = Object.keys(value).toString();
		if (key.includes(uid)) {
			console.log('Already have data');
			return { creatorData };
		} else {
			console.log('Getting data');
			return {
				props: {
					creatorData: get(creatorData)
				}
			};
		}
	});
	return {
		props: {
			creatorData: get(creatorData)
		}
	};
}
