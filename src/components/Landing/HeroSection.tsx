"use client";

import { Button, Container, Group, Text, Flex } from "@mantine/core";
import { useRouter } from "next/navigation";
import classes from "./HeroSection.module.css";

export function HeroSection() {
	const router = useRouter();

	return (
		<Container pt="sm" size="lg">
			<div className={classes.inner}>
				<Flex align="center">
					<Text
						style={{
							fontSize: "50px",
							fontWeight: 700,
						}}
						c="emerald"
					>
						mog
					</Text>
					<Text
						style={{
							fontSize: "50px",
							// fontWeight: 700,
						}}
						c="gray"
					>
						log
					</Text>
				</Flex>

				<Text
					component="span"
					className={classes.description}
					mt={30}
					style={{ fontSize: 40 }}
				>
					parts tracking application
				</Text>

				<Group mt={40}>
					<Button
						size="lg"
						className={classes.control}
						onClick={() => {
							router.push("/dashboard/items/list");
						}}
					>
						Get started
					</Button>
				</Group>
			</div>
		</Container>
	);
}
