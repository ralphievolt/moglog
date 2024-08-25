"use client";

import React from "react";
import {
	Button,
	Center,
	NumberInput,
	Space,
	TextInput,
	Title,
	Paper,
} from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { registerItem } from "@/app/(dashboard)/dashboard/actions/register-item";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

type FormData = {
	itemId: string;
	itemName: string;
	itemBrand: string;
	quantity: number;
	sku: string;
	info2: string;
};

const ItemRegistration: React.FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		try {
			await registerItem(data);

			notifications.show({
				title: "Success",
				message: "Item registered successfully",
				color: "green",
				position: "top-right",
				icon: <IconCheck size={20} />,
			});
		} catch (error) {
			notifications.show({
				title: "Error",
				message:
					error instanceof Error ? error.message : "Failed to register item",
				color: "red",
				position: "top-right",
				icon: <IconX size={20} />,
			});
		}
	};

	return (
		<Center>
			<Paper withBorder shadow="md" p="xl" w="450px">
				<Title style={{ textAlign: "center" }}>Register New Item</Title>
				<Space h="md" />
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="itemId"
						control={control}
						defaultValue=""
						rules={{ required: "Item Part Number is required" }}
						render={({ field }) => (
							<TextInput
								label="Item Part Number"
								placeholder="Enter item part number"
								{...field}
								error={errors.itemId?.message}
							/>
						)}
					/>
					<Space h="sm" />
					<Controller
						name="itemName"
						control={control}
						defaultValue=""
						rules={{ required: "Item Name is required" }}
						render={({ field }) => (
							<TextInput
								label="Item Name"
								placeholder="Enter item name"
								{...field}
								error={errors.itemName?.message}
							/>
						)}
					/>
					<Space h="sm" />
					<Controller
						name="itemBrand"
						control={control}
						defaultValue=""
						rules={{ required: "Brand Name is required" }}
						render={({ field }) => (
							<TextInput
								label="Brand Name"
								placeholder="Enter brand name"
								{...field}
								error={errors.itemBrand?.message}
							/>
						)}
					/>
					<Space h="sm" />
					<Controller
						name="sku"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextInput
								label="SKU"
								placeholder="Enter additional information"
								{...field}
								error={errors.sku?.message}
							/>
						)}
					/>
					<Space h="sm" />
					<Controller
						name="info2"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextInput
								label="Additional Information"
								placeholder="Enter additional information"
								{...field}
								error={errors.sku?.message}
							/>
						)}
					/>
					<Space h="sm" />
					<Controller
						name="quantity"
						control={control}
						defaultValue={1}
						rules={{ required: "Quantity is required", min: 1 }}
						render={({ field }) => (
							<NumberInput
								label="Quantity"
								placeholder="Enter quantity"
								{...field}
								error={
									errors.quantity &&
									"Quantity is required and must be at least 1"
								}
							/>
						)}
					/>
					<Space h="xl" />
					<Center>
						<Button type="submit">Register Item</Button>
					</Center>
				</form>
			</Paper>
		</Center>
	);
};

export default ItemRegistration;
