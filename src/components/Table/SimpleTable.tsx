"use client";

import React from "react";
import { Paper, Space, Title, ActionIcon, Box } from "@mantine/core";
import {
	type MRT_ColumnDef,
	MantineReactTable,
	MRT_Cell,
} from "mantine-react-table";
import dayjs from "dayjs";
import { IconEdit, IconSend, IconTrash } from "@tabler/icons-react";
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

	// const handleSaveCell = (cell: MRT_Cell<Item>, value: any) => {
	// 	//@ts-ignore
	// 	tableData[cell.row.index][cell.column.id] = value;
	// 	setTableData([...tableData]);

	// 	// console.log()
	// };
	const handleSaveCell = (cell: MRT_Cell<Item>, value: any) => {
    const updatedData = [...tableData];
    const columnId = cell.column.id as keyof Item;
    updatedData[cell.row.index] = {
      ...updatedData[cell.row.index],
      [columnId]: value,
    };
    setTableData(updatedData);

    // Get the edited row data
    const editedRowData = updatedData[cell.row.index];
    console.log("Edited Row Data:", editedRowData);
    // You can use the editedRowData as needed, e.g., send it to an API or update state
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
				editDisplayMode="cell"
				enableEditing
				mantineEditTextInputProps={({ cell }) => ({
					onBlur: (event) => {
						handleSaveCell(cell, event.target.value);
					},
				})}
			/>
		</Paper>
	);
};

export default SimpleTable;
