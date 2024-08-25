"use client";

import { Button, Container, Group, Text, Title, Flex } from "@mantine/core";
import { IconArrowRight, IconStar } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import classes from "./HeroSection.module.css";

export function HeroSection() {
	const router = useRouter();

	return (
		<Container pt="sm" size="lg">
			<div className={classes.inner}>
				{/* <Text
						component="span"
						className={classes.description}
						style={{ fontSize: "50px", fontWeight: 700 }}
						c="emerald"
					>
						mog
					</Text>
					<Text
						className={classes.description}
						style={{ fontSize: "50px", fontWeight: 700 }}
						c="gray"
					>
						log

					</Text> */}
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
					asset tracking web application
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
