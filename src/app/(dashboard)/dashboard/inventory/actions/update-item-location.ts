"use server";

import clientPromise from "lib/mongodb";

export async function updateItemLocation(data: {
  itemId: string;
  transactionType: string;
  sourceLocationId: string;
  destinationLocationId: string;
  quantity: number;
}) {
  const client = await clientPromise;
  const db = client.db("model_shop");
  const collection = db.collection("item_transactions");

  const result = await collection.insertOne({
    ...data,
    transactionDate: new Date(),
    transactedBy: "User Name",
  });

  return result;
}
