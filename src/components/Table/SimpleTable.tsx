"use client";

import React from "react";
import { Paper, Space, Title } from "@mantine/core";

import {
	type MRT_ColumnDef,
	MantineReactTable,
	MRT_TableOptions,
} from "mantine-react-table";
import dayjs from "dayjs";
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
	const [tableData, setTableData] = React.useState<Item[]>(() => items);

	const columns = React.useMemo<MRT_ColumnDef<Item>[]>(
		() => [
			{
				accessorKey: "itemId",
				header: "Item Id",
				enableEditing: false,
			},
			{
				accessorKey: "itemName",
				header: "Name",
			},
			{
				accessorKey: "itemBrand",
				header: "Brand",
			},
			{
				accessorKey: "info1",
				header: "Info 1",
			},
			{
				accessorKey: "info2",
				header: "Info 2",
				size: 50,
			},
			{
				accessorKey: "quantity",
				header: "Qty",
				size: 50,
			},
			{
				accessorKey: "locationId",
				header: "Location Id",
				enableEditing: false,
			},
			{
				accessorKey: "status",
				header: "Status",
				editVariant: "select",
				mantineEditSelectProps: {
					data:['Active', 'OBS']
				},
			},
			{
				accessorKey: "createdAt",
				header: "Created At",
				enableEditing: false,
				Cell: ({ cell }) => dayjs(cell.getValue<Date>()).format("YYYY-MM-DD"),
			},
			{
				accessorKey: "createdBy",
				header: "Created By",
			},
		],
		[]
	);

	const handleSaveRow: MRT_TableOptions<Item>["onEditingRowSave"] = async ({
		exitEditingMode,
		row,
		values,
	}) => {
		tableData[row.index] = values;
		setTableData([...tableData]);
		exitEditingMode();
	};

	return (
		<Paper withBorder radius="md" p="md">
			<Title order={5}>Vacforms</Title>
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={tableData}
				mantinePaperProps={{ shadow: "0", withBorder: false }}
				enableDensityToggle={false} // Remove toggle density button
				initialState={{
					density: "xs",
					columnVisibility: {
						createdBy: false,
						summary_sheet: false,
						info1: false,
						info2: false,
					},
				}}
				mantineTableProps={{
					striped: true, // Make the table striped
					highlightOnHover: true, // Optional: Highlight rows on hover
				}}
				enableEditing
				enableRowActions
				editDisplayMode="row"
				onEditingRowSave={handleSaveRow}
			/>
		</Paper>
	);
};

export default SimpleTable;
