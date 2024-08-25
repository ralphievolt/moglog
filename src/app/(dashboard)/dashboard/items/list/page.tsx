import { PageContainer } from "@/components/PageContainer/PageContainer";
import ItemsTable  from "@/components/Table/ItemsTable";
import clientPromise from "lib/mongodb";

export const revalidate = 0; // Disable caching

export default async function TablePage() {
	const client = await clientPromise;
	const db = client.db("model_shop");
	const collection = db.collection("items");

	try {
		const results = await collection.find().toArray();

		const data = JSON.parse(JSON.stringify(results));

		return (
			<PageContainer title="Item List">
				<ItemsTable items={data}/>
			</PageContainer>
		);
	} catch (error) {
		console.error("Error registering item:", error);
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("Failed to register item");
		}
	}
}
