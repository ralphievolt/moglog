import { PageContainer } from "@/components/PageContainer/PageContainer";
import ItemRegistration from "@/components/inventory/item-registration";
import clientPromise from "lib/mongodb";

export const revalidate = 0;

export default async function Form() {
	const client = await clientPromise;
	const db = client.db("model_shop");
	const categoriesCollection = db.collection("categories");

	try {
		const categories = await categoriesCollection
			.find({
				status: "Active",
			})
			.toArray();


		return (
			<PageContainer title="Item Registration">
				<ItemRegistration categories={ JSON.parse(JSON.stringify(categories))} />
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
