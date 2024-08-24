"use server";

import clientPromise from "lib/mongodb";

export async function registerLocation(data: {
  locationId: string;
  locationName: string;
  rackId: string;
  shelfId: string;
}) {
  const client = await clientPromise;
  const db = client.db("model_shop");
  const collection = db.collection("locations");

  const result = await collection.insertOne({
    ...data,
    status: "active",
    createdAt: new Date(),
    createdBy: "User Name",
  });

  return result;
}
