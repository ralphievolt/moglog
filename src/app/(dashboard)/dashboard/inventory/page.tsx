import { PageContainer } from "@/components/PageContainer/PageContainer";
import SimpleTable  from "@/components/Table/SimpleTable";
import clientPromise from "lib/mongodb";

export default async function TablePage() {
	const client = await clientPromise;
	const db = client.db("model_shop");
	const collection = db.collection("items");

	try {
		const results = await collection.find().toArray();

		const data = JSON.parse(JSON.stringify(results));

		return (
			<PageContainer title="Item List">
				<SimpleTable items={data}/>
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
