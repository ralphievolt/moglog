import {
	IconComponents,
	IconDashboard,
	IconLock,
	IconMoodSmile,
	IconListNumbers,
	IconPencilPlus,
	IconStack3
} from "@tabler/icons-react";
import type { NavItem } from "@/types/nav-item";

export const navLinks: NavItem[] = [
	// { label: "Dashboard", icon: IconDashboard, link: "/dashboard" },
	{
		label: "Inventory",
		icon: IconComponents,
		initiallyOpened: true,
		links: [
			{
				label: "Item List",
				icon: IconListNumbers,
				link: "/dashboard/items/list",
			},
			{
				label: "Location List",
				icon: IconStack3,
				link: "/dashboard/locations/list",
			},
			{
				label: "Register Item",
				icon: IconPencilPlus,
				link: "/dashboard/items/register",
			},

			{
				label: "Register Location",
				icon: IconPencilPlus,
				link: "/dashboard/locations/register",
			},

		],
	},
	// {
	// 	label: "Auth",
	// 	icon: IconLock,
	// 	initiallyOpened: true,
	// 	links: [
	// 		{
	// 			label: "Login",
	// 			icon: IconListNumbers,
	// 			link: "/login",
	// 		},
	// 		{
	// 			label: "Register",
	// 			icon: IconListNumbers,
	// 			link: "/register",
	// 		},
	// 	],
	// },
	// {
	// 	label: "Sample",
	// 	icon: IconMoodSmile,
	// 	initiallyOpened: true,
	// 	links: [
	// 		{
	// 			label: "Landing",
	// 			icon: IconListNumbers,
	// 			link: "/",
	// 		},
	// 	],
	// },
];
