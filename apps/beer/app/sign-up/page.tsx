import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Input,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./sign-up.module.css";

export default function SignUp() {
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
              href="/sign-in"
              variant="transparent"
              size="md"
              color="dark"
            >
              Login
            </Button>
          </Group>

          <Stack gap="xl" mt={rem(54)}>
            <Title size="h2" fw={600}>
              Sign Up
            </Title>
            <Text fw={500}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Stack>
        </Container>

        <Card bg="gray.1" className={classes.card}>
          <Stack gap="xl">
            <Input size="xl" radius="xl" placeholder="Username" />
            <Input
              placeholder="Password"
              radius="xl"
              size="xl"
              type="password"
            />
            <Input
              placeholder="Re Password"
              radius="xl"
              size="xl"
              type="password"
            />

            <Divider label="or register with" color="dark" />

            <Group justify="center" gap="xl">
              <ActionIcon
                color="dark"
                radius="xl"
                size="lg"
                variant="transparent"
              >
                <IconBrandGoogleFilled size={32} />
              </ActionIcon>
              <ActionIcon
                color="dark"
                radius="xl"
                size="lg"
                variant="transparent"
              >
                <IconBrandFacebookFilled size={32} />
              </ActionIcon>
            </Group>

            <Button radius="xl" color="dark" size="xl" mx="md">
              Sign Up
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
