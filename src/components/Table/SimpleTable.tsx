"use client";

import React from "react";
import { Paper, Space, Title } from "@mantine/core";
import { type MRT_ColumnDef, MantineReactTable } from "mantine-react-table";

import { ObjectId } from "mongodb";

// Define the structure of an individual item
interface Item {
	_id: ObjectId;
	itemId: string;
	itemName: string;
	itemBrand: string;
	info1: string;
	info2: string;
	quantity: number;
	locationId: string;
	status: string;
	createdAt: Date;
	createdBy: string;
}

// Define the props for SimpleTable
interface SimpleTableProps {
	items: Item[];
}

const SimpleTable: React.FC<{ items: Item[] }> = ({ items }) => {
	const columns = React.useMemo<MRT_ColumnDef<Item>[]>(
		() => [
			{
				accessorKey: "itemId",
				header: "Item ID",
			},
			{
				accessorKey: "itemName",
				header: "Item Name",
			},
			{
				accessorKey: "itemBrand",
				header: "Item Brand",
			},
			{
				accessorKey: "info1",
				header: "Info 1",
			},
			{
				accessorKey: "info2",
				header: "Info 2",
			},
			{
				accessorKey: "quantity",
				header: "Quantity",
			},
			{
				accessorKey: "locationId",
				header: "Location ID",
			},
			{
				accessorKey: "status",
				header: "Status",
			},
			{
				accessorKey: "createdAt",
				header: "Created At",
				Cell: ({ cell }) => new Date(cell.getValue<Date>()).toLocaleString(),
			},
			{
				accessorKey: "createdBy",
				header: "Created By",
			},
		],
		[]
	);
	return (
		<Paper withBorder radius="md" p="md">
			{/* change this name depending on the item registered by user */}
			<Title order={5}>Vacforms</Title>
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={items}
				mantinePaperProps={{ shadow: "0", withBorder: false }}
				enableDensityToggle={false} // Remove toggle density button
				initialState={{ density: "xs" }}
				mantineTableProps={{
					striped: true, // Make the table striped
					highlightOnHover: true, // Optional: Highlight rows on hover
				}}
			/>
		</Paper>
	);
};

export default SimpleTable;
