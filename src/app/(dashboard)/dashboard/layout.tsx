"use client";

import {
  AppShell,
  Burger,
  Text,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AdminHeader } from "@/components/Headers/AdminHeader";
import { Navbar } from "@/components/Navbar/Navbar";
import { navLinks } from "@/config";
import { IconChevronLeft } from "@tabler/icons-react";
import styles from './DashboardLayout.module.css'; // Import the CSS module

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const bg =
    colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Navbar hidden={!opened}>
        <Navbar data={navLinks} />
      </AppShell.Navbar>
      <AppShell.Header>
        <AdminHeader
          burger={
            opened ? (
              <ActionIcon onClick={toggle} size="lg" mr="xl" className={styles.noHover}>
                <IconChevronLeft size={20} />
              </ActionIcon>
            ) : (
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                mr="xl"
                color="gray"
              />
            )
          }
        />
      </AppShell.Header>
      <AppShell.Main bg={bg}>{children}</AppShell.Main>
      <AppShell.Footer>
        <Text w="full" size="sm" c="gray" pl={20}>
          support contact: ralphie
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
