import {
  ActionIcon,
  Avatar,
  Card,
  Container,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCalendar,
  IconChevronRight,
  IconClock,
} from "@tabler/icons-react";

export default function DokterianHomePage() {
  return (
    <Container
      maw={390}
      mih="100dvh"
      px={24}
      py={20}
      size="xs"
    >
      <Group mb="xl" justify="space-between">
        <Stack gap={0}>
          <Text c="dimmed">Hello,</Text>
          <Text fw={700} fz="lg">
            Hi James
          </Text>
        </Stack>

        <Avatar size="lg" src="https://i.pravatar.cc/300" />
      </Group>

      <Card bg="primary" radius="lg" padding="lg">
        <Group justify="space-between">
          <Group>
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/300"
            />
            <Stack gap={0}>
              <Text c="white" fw={700} fz="lg">
                Dr. Imran Syahir
              </Text>
              <Text c="gray.2">General Doctor</Text>
            </Stack>
          </Group>

          <ActionIcon>
            <IconChevronRight stroke={1.5} />
          </ActionIcon>
        </Group>

        <Divider my="lg" color="gray.1" />

        <Group gap="lg">
          <Group gap={4} c="white">
            <IconCalendar stroke={1.5} />
            <Text fz="sm">Sunday, 12 June</Text>
          </Group>
          <Group gap={4} c="white">
            <IconClock stroke={1.5} />
            <Text fz="sm">11:00 - 12:00 AM</Text>
          </Group>
        </Group>
      </Card>
    </Container>
  );
}
