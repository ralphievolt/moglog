"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";
import { IconArrowRight, IconStar } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import classes from "./HeroSection.module.css";

export function HeroSection() {
	const router = useRouter();

	return (
		<Container pt="sm" size="lg">
			<div className={classes.inner}>
				<Title className={classes.title}>moglog</Title>
				<Title className={classes.subtitle}>
					inventory management application
				</Title>

				<Text className={classes.description} mt={30}>
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
