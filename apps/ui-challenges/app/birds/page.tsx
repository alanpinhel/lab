import {
  ActionIcon,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAlignLeft,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";

export default function BirdsPage() {
  return (
    <Container
      bg="url(/birds/bg.png)"
      bgp="center"
      bgsz="100%"
      c="white"
      h="100%"
      px={40}
      py={64}
      size="xs"
    >
      <Stack h="100%" justify="space-between">
        <Group justify="space-between">
          <Image src="/birds/logo.svg" h={40} />
          <ActionIcon
            variant="outline"
            color="white"
            radius="xl"
            size="xl"
          >
            <IconAlignLeft stroke={1} />
          </ActionIcon>
        </Group>

        <Stack gap={32}>
          <Text fz={20} fw={400} lh={1}>
            Natural habitat
          </Text>

          <Group wrap="nowrap" gap="xl">
            <Title fz={48} fw={400} lh={1}>
              Exhibiting over{" "}
              <Text inherit span c="yellow">
                350
              </Text>{" "}
              birds.
            </Title>

            <ActionIcon
              color="white"
              component={Link}
              href="/birds/list"
              radius="xl"
              size="xl"
              variant="outline"
            >
              <IconArrowRight stroke={1} />
            </ActionIcon>
          </Group>
        </Stack>
      </Stack>
    </Container>
  );
}
