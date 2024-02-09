import {
  ActionIcon,
  Card,
  Center,
  Container,
  Group,
  RingProgress,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBolt,
  IconBrandSpeedtest,
  IconMapBolt,
  IconSettings,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ElectricScooterDetailPage() {
  return (
    <Container
      bg="url(/electric-scooter/scooter-2.png), var(--electric-scooter-color-green)"
      bgp="top center"
      bgr="no-repeat"
      bgsz="100%"
      c="black"
      mih="100%"
      pos="relative"
      px={28}
      py={56}
      size="xs"
    >
      <Group justify="space-between">
        <ActionIcon
          color="rgba(31, 32, 33, 0.15)"
          component={Link}
          href={"/electric-scooter"}
          radius={32}
          size={64}
        >
          <IconArrowLeft stroke={1} />
        </ActionIcon>

        <ActionIcon
          color="rgba(31, 32, 33, 0.15)"
          component={Link}
          href={"/electric-scooter"}
          radius={32}
          size={64}
        >
          <IconSettings stroke={1} />
        </ActionIcon>
      </Group>

      <Stack gap={0} align="center" mt="-xl">
        <IconBolt size={40} fill="#1f2021" stroke={0} />
        <Text fw={500} fz={28} lh={2} c="#1f2021">
          Electric scooter
        </Text>
      </Stack>

      <Card
        bg="dark.9"
        bottom={32}
        left={20}
        pos="absolute"
        py="lg"
        radius={32}
        right={20}
      >
        <Group gap="xl">
          <Stack gap="sm" style={{ flex: 2 }}>
            <Card radius={24} px="sm" bg="dark">
              <Group gap="sm">
                <Center
                  bg="dark.9"
                  h={40}
                  style={{ borderRadius: 20 }}
                  w={40}
                >
                  <IconBrandSpeedtest
                    color="var(--electric-scooter-color-green)"
                    stroke={1}
                  />
                </Center>

                <Stack gap={0}>
                  <Text
                    c="white"
                    fw={500}
                    fz={14}
                    lh={1.42}
                    opacity={0.5}
                  >
                    Speed
                  </Text>
                  <Text c="white" fz={20} fw={500} lh={1.6}>
                    25 km/h
                  </Text>
                </Stack>
              </Group>
            </Card>

            <Card radius={24} px="sm" bg="dark">
              <Group gap="sm">
                <Center
                  bg="dark.9"
                  h={40}
                  style={{ borderRadius: 20 }}
                  w={40}
                >
                  <IconMapBolt
                    color="var(--electric-scooter-color-green)"
                    stroke={1}
                  />
                </Center>

                <Stack gap={0}>
                  <Text
                    c="white"
                    fw={500}
                    fz={14}
                    lh={1.42}
                    opacity={0.5}
                  >
                    Power
                  </Text>
                  <Text c="white" fz={20} fw={500} lh={1.6}>
                    850 km/h
                  </Text>
                </Stack>
              </Group>
            </Card>
          </Stack>

          <Stack
            gap="xs"
            align="center"
            style={{ flex: 1.2 }}
          >
            <Text c="white" fz={14} fw={500} lh={1.28}>
              Battery
            </Text>
            <RingProgress
              roundCaps
              thickness={8}
              rootColor="dark"
              sections={[
                {
                  value: 65,
                  color:
                    "var(--electric-scooter-color-green)",
                },
              ]}
              label={
                <Stack gap={0} align="center">
                  <IconBolt
                    color="white"
                    stroke={0}
                    fill="var(--electric-scooter-color-green)"
                  />
                  <Text
                    fz={24}
                    fw={500}
                    lh={1.16}
                    c="white"
                  >
                    65%
                  </Text>
                </Stack>
              }
            />
          </Stack>
        </Group>
      </Card>
    </Container>
  );
}
