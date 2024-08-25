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
  itemId: string;
  itemName: string;
  itemBrand: string;
  sku: string;
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

const ItemsTable: React.FC<{ items: Item[] }> = ({ items }) => {
  const [tableData, setTableData] = React.useState<Item[]>(() => items);

  const columns = React.useMemo<MRT_ColumnDef<Item>[]>(
    () => [
      {
        accessorKey: "itemId",
        header: "Item Id",
        enableEditing: false,
        size: 75,
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
        accessorKey: "sku",
        header: "SKU",
      },
      {
        accessorKey: "info2",
        header: "Info 2",
        size: 50,
      },
      {
        accessorKey: "quantity",
        header: "Qty",
        size: 30,
      },
      {
        accessorKey: "locationId",
        header: "Location Id",
        enableEditing: false,
        size: 50,
      },
      {
        accessorKey: "status",
        header: "Status",
        editVariant: "select",
        mantineEditSelectProps: {
          data: ["Active", "OBS"],
        },
        size: 50,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        enableEditing: false,
        Cell: ({ cell }) => dayjs(cell.getValue<Date>()).format("YYYY-MM-DD"),
        size: 50,
      },
      {
        accessorKey: "createdBy",
        header: "Created By",
        enableEditing: false,
        size: 50,
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

export default ItemsTable;
