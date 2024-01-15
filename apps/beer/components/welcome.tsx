import { trainOne } from "@/fonts";
import {
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import Link from "next/link";
import classes from "./welcome.module.css";

export function Welcome() {
  return (
    <Stack h="100dvh">
      <Stack align="center" gap={0} justify="center" h="50%">
        <Image src="/barbrew.svg" alt="Beer" mah="150px" w="auto" />
        <Title
          className={trainOne.className}
          fz={rem(50)}
          order={1}
          tt="uppercase"
        >
          Barbrew
        </Title>
        <Text tt="uppercase" fw={500} fz={rem(20)} lts={8}>
          Beer Cafe
        </Text>
      </Stack>

      <Card
        withBorder
        bg="yellow"
        h="50%"
        bottom={0}
        className={classes.welcome}
        pos="fixed"
        w="100%"
      >
        <Stack gap="xl">
          <Title size="h2" order={2} fw={600}>
            Welcome
          </Title>
          <Text fw={500}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Group gap="xl" wrap="nowrap">
            <Button
              fullWidth
              color="dark"
              component={Link}
              href="/sign-in"
              radius="xl"
              size="lg"
            >
              Sign In
            </Button>
            <Button color="dark" radius="xl" size="lg" fullWidth>
              Sign Up
            </Button>
          </Group>
          <Button
            color="dark"
            variant="transparent"
            rightSection={<IconArrowRight />}
          >
            Continue as a guest
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
