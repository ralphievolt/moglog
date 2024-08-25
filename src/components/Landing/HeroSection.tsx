"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";
import { IconArrowRight, IconStar } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import classes from "./HeroSection.module.css";
import clazzes from "@/components//Logo/Logo.module.css";

export function HeroSection() {
	const router = useRouter();

	return (
		<Container pt="sm" size="lg">
			<div className={classes.inner}>
				<Text className={classes.description} style={{fontSize:"50px",fontWeight:700}}>moglog</Text>
				{/* <Title className={classes.subtitle}>
					inventory management application
				</Title> */}

				<Text className={classes.description} mt={30} style={{fontSize:40}}>
					fully functional web application
				</Text>

				<Group mt={40}>
					<Button
						size="lg"
						className={classes.control}
						onClick={() => {
							router.push("/dashboard/items/list");
						}}
						rightSection={<IconArrowRight />}
					>
						Get started
					</Button>
				</Group>
			</div>
		</Container>
	);
}
