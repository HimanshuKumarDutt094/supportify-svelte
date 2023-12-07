// +page.js
import { searchCreators } from '$lib/searchCreator';
import { page } from '$app/stores';
import { creatorData } from '$lib/store';
export const load = async () => {
	const { images, users, creatorUID } = await searchCreators();

	// Store the search results in the page store
	creatorData.set({ images: images, users: users, creatorUID: creatorUID });

	return {
		props: {
			images,
			users,
			creatorUID
		}
	};
};
