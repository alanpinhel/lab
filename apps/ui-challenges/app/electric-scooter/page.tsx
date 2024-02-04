import {
  ActionIcon,
  Avatar,
  Box,
  Card,
  Center,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBolt,
  IconChevronUp,
  IconCircles,
  IconLock,
  IconLockOpen,
  IconRoute,
} from "@tabler/icons-react";

export default function ElectricScooterPage() {
  return (
    <Container
      bg="var(--electric-scooter-color-black)"
      c="white"
      mih="100%"
      px={28}
      py={56}
      size="xs"
    >
      <Stack gap="xl">
        <Group justify="space-between">
          <Avatar
            size={64}
            src="https://i.pravatar.cc/192"
          />
          <ActionIcon radius="xl" color="dark" size={64}>
            <IconCircles stroke={0.5} />
          </ActionIcon>
        </Group>

        <Title fz={48} fw={500} lh={1.16}>
          My electric scooter
        </Title>

        <Card
          align="flex-end"
          bg="url(/electric-scooter/scooter-1.png), var(--electric-scooter-color-green)"
          component={Group}
          px="xl"
          py={40}
          radius={32}
        >
          <Stack
            bg="white"
            gap="sm"
            p={4}
            style={{ borderRadius: 32 }}
          >
            <ActionIcon
              c="black"
              color="var(--electric-scooter-color-green)"
              radius="xl"
              size={64}
            >
              <IconLockOpen stroke={1} />
            </ActionIcon>

            <Stack align="center" gap={-2}>
              <IconChevronUp size={20} />
              <IconChevronUp size={20} opacity={0.25} />
            </Stack>

            <ActionIcon color="dark" radius="xl" size={64}>
              <IconLock stroke={1} />
            </ActionIcon>
          </Stack>
        </Card>

        <Group gap="xl" align="stretch">
          <Stack
            align="center"
            justify="flex-end"
            bg="dark"
            gap={4}
            p={4}
            style={{ borderRadius: 16, flex: 1 }}
            pos="relative"
          >
            <Stack pos="absolute" gap={8} top={8}>
              <Center
                bg="dark.9"
                h={40}
                style={{ borderRadius: 20 }}
                w={40}
              >
                <IconBolt
                  color="var(--electric-scooter-color-green)"
                  fill="var(--electric-scooter-color-green)"
                  size={16}
                />
              </Center>

              <Text fz={28} lh={1.4}>
                65
                <Text inherit span fz={20}>
                  %
                </Text>
              </Text>
            </Stack>

            <Box
              bg="var(--electric-scooter-color-green)"
              h="65%"
              style={{ borderRadius: 12 }}
              w="100%"
            />
          </Stack>

          <Stack style={{ flex: 3 }}>
            <Card bg="dark" radius={32}>
              <Group gap="sm">
                <Center
                  bg="dark.9"
                  h={64}
                  style={{ borderRadius: 32 }}
                  w={64}
                >
                  <IconRoute
                    color="var(--electric-scooter-color-green)"
                    stroke={1}
                  />
                </Center>
                <Stack gap={0}>
                  <Text fz={14} lh={1.4} c="white">
                    Last tour
                  </Text>
                  <Text
                    c="white"
                    fw={500}
                    fz={32}
                    lh={1.25}
                  >
                    250 KM
                  </Text>
                </Stack>
              </Group>
            </Card>

            <Image
              radius={32}
              src="/electric-scooter/map.png"
            />
          </Stack>
        </Group>
      </Stack>
    </Container>
  );
}
