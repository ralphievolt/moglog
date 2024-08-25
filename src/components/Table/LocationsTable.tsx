"use client";

import React from "react";
import { Paper } from "@mantine/core";
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
	locationId: string;
	locationName: string;
	quantity: number;
}

// Define the props for SimpleTable
interface SimpleTableProps {
	items: Item[];
}

const LocationsTable: React.FC<{ items: Item[] }> = ({ items }) => {
	const [tableData, setTableData] = React.useState<Item[]>(() => items);

	const columns = React.useMemo<MRT_ColumnDef<Item>[]>(
		() => [
			{
				accessorKey: "locationId",
				header: "Location Id",
				enableEditing: false,
				size: 75,
			},
			{
				accessorKey: "locationName",
				header: "Name",
			},

			{
				accessorKey: "quantity",
				header: "Qty",
				size: 30,
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
			<MantineReactTable
				columns={columns}
				data={tableData}
				mantinePaperProps={{ shadow: "0", withBorder: false }}
				enableDensityToggle={false} // Remove toggle density button
				initialState={{
					density: "xs",
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

export default LocationsTable;
