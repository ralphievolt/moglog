"use server";

import { ObjectId } from "mongodb";

import clientPromise from "lib/mongodb";

interface LOCATION {
	locationId: string;
	locationName: string;
	quantity: number;
	status: string;
}

export async function updateLocation(location: LOCATION): Promise<void> {
	const client = await clientPromise;
	const db = client.db("model_shop");
	const locationCollection = db.collection("locations");

	try {
		await locationCollection.updateOne(
			{ locationId: location.locationId },
			{
				$set: {
					locationName: location.locationName,
					quantity: location.quantity,
					status: location.status,
				},
			}
		);
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("Failed to update location");
		}
	}
}
