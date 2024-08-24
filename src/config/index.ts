import {
	IconComponents,
	IconDashboard,
	IconLock,
	IconMoodSmile,
	IconListNumbers,
	IconPencilPlus
} from "@tabler/icons-react";
import type { NavItem } from "@/types/nav-item";

export const navLinks: NavItem[] = [
	// { label: "Dashboard", icon: IconDashboard, link: "/dashboard" },
	{
		label: "Item Inventory",
		icon: IconComponents,
		initiallyOpened: true,
		links: [
			{
				label: "List",
				icon: IconListNumbers,
				link: "/dashboard/items/list",
			},
			{
				label: "Register",
				icon: IconPencilPlus,
				link: "/dashboard/items/register",
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
