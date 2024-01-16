"use client";

import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Group,
  Input,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import classes from "./sign-in.module.css";

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push("/list");
  };

  return (
    <Box bg="yellow" h="100dvh">
      <Stack h="100%">
        <Container py="md">
          <Group justify="space-between" align="center">
            <ActionIcon
              color="dark"
              component={Link}
              href="/"
              size="lg"
              variant="transparent"
            >
              <IconArrowLeft />
            </ActionIcon>
            <Button
              component={Link}
              href="/sign-up"
              variant="transparent"
              size="md"
              color="dark"
            >
              Register
            </Button>
          </Group>

          <Stack gap="xl" mt={rem(54)}>
            <Title size="h2" fw={600}>
              Sign In
            </Title>
            <Text fw={500}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Stack>
        </Container>

        <Card bg="gray.1" className={classes.card}>
          <Stack component="form" gap="xl" onSubmit={handleSubmit}>
            <Input required size="xl" radius="xl" placeholder="Username" />
            <Stack gap="xs">
              <Input
                required
                placeholder="Password"
                radius="xl"
                size="xl"
                type="password"
              />
              <Anchor c="dark" ta="right" fz="sm">
                Forgot Password?
              </Anchor>
            </Stack>

            <Button type="submit" radius="xl" color="dark" size="xl" mx="md">
              Sign In
            </Button>

            <Stack mt="xl">
              <Button
                color="dark"
                justify="flex-start"
                leftSection={<IconBrandGoogleFilled size={32} />}
                radius="xl"
                size="lg"
                styles={{ label: { flex: 1 } }}
                variant="white"
              >
                <Group justify="space-between" w="100%">
                  Continue with Google
                  <IconArrowRight />
                </Group>
              </Button>
              <Button
                color="dark"
                justify="flex-start"
                leftSection={<IconBrandFacebookFilled size={32} />}
                radius="xl"
                size="lg"
                styles={{ label: { flex: 1 } }}
                variant="white"
              >
                <Group justify="space-between" w="100%">
                  Continue with Facebook
                  <IconArrowRight />
                </Group>
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
