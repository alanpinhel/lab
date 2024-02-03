import {
  Button,
  Card,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { trainOne } from "../fonts";

import Link from "next/link";

export function Welcome() {
  return (
    <Container pos="relative" size="xs">
      <Stack h="100dvh">
        <Stack
          align="center"
          gap={0}
          justify="center"
          h="50%"
        >
          <Image
            src="/beer/barbrew.svg"
            alt="Beer"
            mah="150px"
            w="auto"
          />
          <Title
            className={trainOne.className}
            fz={rem(50)}
            order={1}
            tt="uppercase"
          >
            Barbrew
          </Title>
          <Text
            tt="uppercase"
            fw={500}
            fz={rem(20)}
            lts={8}
          >
            Beer Cafe
          </Text>
        </Stack>

        <Card
          bg="yellow"
          bottom={0}
          h="50%"
          left={0}
          pos="absolute"
          right={0}
          style={{
            borderTopLeftRadius: rem(50),
            borderTopRightRadius: rem(50),
            justifyContent: "center",
          }}
        >
          <Stack gap="xl">
            <Title size="h2" order={2} fw={600}>
              Welcome
            </Title>
            <Text fw={500}>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
            <Group gap="xl" wrap="nowrap">
              <Button
                fullWidth
                color="dark"
                component={Link}
                href="/beer/sign-in"
                radius="xl"
                size="lg"
              >
                Sign In
              </Button>
              <Button
                fullWidth
                color="dark"
                component={Link}
                href="/beer/sign-up"
                radius="xl"
                size="lg"
              >
                Sign Up
              </Button>
            </Group>
            <Button
              color="dark"
              component={Link}
              href="/beer/list"
              rightSection={<IconArrowRight />}
              variant="transparent"
            >
              Continue as a guest
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
