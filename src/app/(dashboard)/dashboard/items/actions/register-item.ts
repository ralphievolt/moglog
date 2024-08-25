"use server";

import clientPromise from "lib/mongodb";

interface ITEM {
	itemId: string;
	itemName: string;
	itemBrand: string;
	quantity: number;
	info1: string;
	info2: string;
}

export async function registerItem(item: ITEM): Promise<void> {
	const client = await clientPromise;
	const db = client.db("model_shop");
	const collection = db.collection("items");

	try {
		// Check if itemId already exists
		const existingItem = await collection.findOne({ itemId: item.itemId });
		if (existingItem) {
			throw new Error(`Item with itemId ${item.itemId} already exists.`);
		}

		// Insert the new item
		const result = await collection.insertOne({
			...item,
			locationId: "Not Assigned",
			status: "Active",
			createdAt: new Date(),
			createdBy: "User Name",
		});
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("Failed to register item");
		}
	}
}
