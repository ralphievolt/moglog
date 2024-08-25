import { Flex, Text } from "@mantine/core";
import Link from "next/link";
import classes from "./Logo.module.css";

interface Props {
	width?: string;
	height?: string;
}

export const Logo: React.FC<Props> = () => {
	return (
		<Flex direction="row" align="center" gap={4}>
			<Link
				href="/"
				style={{ textDecoration: "none" }}
				className={classes.heading}
			>
				<Text fw="bolder" size="xl" c="emerald">
					mog
					<Text component="span" fw="normal" className={classes.subheading} c="gray">
						log
					</Text>
				</Text>
			</Link>
		</Flex>
	);
};
