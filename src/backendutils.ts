import type { Collection } from 'mongodb';
export const returnURLList = async (collection: Collection) => {
	const uRLList = await collection.find().toArray();
	const serializedUrls = uRLList.map((url) =>
		JSON.parse(JSON.stringify(url, (key, val) => (key === '_id' ? val.toString() : val)))
	);
	return uRLList;
};
