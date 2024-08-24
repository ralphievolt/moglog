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
    const result = await collection.insertOne({
      ...item,
      locationId: "Not Assigned",
      status: "active",
      createdAt: new Date(),
      createdBy: "User Name",
    });

    console.log("Item registered successfully:", result.insertedId);
  } catch (error) {
    console.error("Error registering item:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Failed to register item");
    }
  }
}
