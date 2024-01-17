import {
  ActionIcon,
  Badge,
  Box,
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
import {
  IconCircleArrowLeft,
  IconPlus,
  IconShoppingCart,
  IconSmartHome,
  IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./detail.module.css";

export default function Detail() {
  return (
    <Box bg="yellow" h="100dvh">
      <Stack h="100%" align="stretch">
        <Container py="md" w="100%">
          <Stack gap="xl">
            <Group justify="space-between">
              <Group gap="xs">
                <ActionIcon
                  color="dark"
                  component={Link}
                  href="/list"
                  size="xl"
                  variant="transparent"
                >
                  <IconCircleArrowLeft stroke={1} size={rem(32)} />
                </ActionIcon>
                <ActionIcon
                  color="dark"
                  component={Link}
                  href="/"
                  size="xl"
                  variant="transparent"
                >
                  <IconSmartHome stroke={1} size={rem(32)} />
                </ActionIcon>
              </Group>

              <ActionIcon
                color="dark"
                component={Link}
                href="/"
                size="xl"
                variant="transparent"
              >
                <IconShoppingCart stroke={1} size={rem(32)} />
              </ActionIcon>
            </Group>

            <Stack gap="xl" pos="relative">
              <Box pos="absolute" right={20} style={{ zIndex: 2 }}>
                <Image src="/corona-pack.png" h={rem(390)} />
              </Box>
              <Stack>
                <Title fz={rem(45)} c="white" w="6ch">
                  Corona Extra
                </Title>
                <Text fw={600} fz="xl">
                  350ml
                </Text>
              </Stack>
              <ActionIcon size="xl" variant="white" radius="xl" color="dark">
                <IconPlus stroke={1} size={rem(32)} />
              </ActionIcon>
            </Stack>
          </Stack>
        </Container>

        <Card bg="gray.1" className={classes.card}>
          <Stack justify="space-between" h="100%">
            <Stack>
              <Group c="yellow.4" gap="xs">
                <IconStarFilled />
                <Text fz="xl" fw={600} c="black">
                  4.9
                </Text>
              </Group>

              <Badge size="xl" c="black" radius="xl">
                Description
              </Badge>

              <Text fz="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Stack>

            <Group justify="space-between">
              <Text fz={45} fw={600}>
                $4.56
              </Text>
              <Button
                c="black"
                gradient={{ from: "yellow", to: "orange" }}
                size="xl"
                radius="lg"
                variant="gradient"
              >
                Buy Now
              </Button>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
