export async function searchCreators() {
	const res = await fetch('https://www.randomuser.me/api/?results=50');
	const data = await res.json();
	const images = [];
	const users = [];
	const creatorUID = [];

	for (const user of data.results) {
		const userImage = user.picture.large;
		const uuid = user.login.uuid;

		// Check if the UUID already exists in creatorUID
		const alreadyExists = creatorUID.includes(uuid);

		if (!alreadyExists) {
			images.push(userImage);
			users.push(user.name.first + ' ' + user.name.last);
			creatorUID.push(uuid);
		}
	}

	return {
		images,
		users,
		creatorUID
	};
}
