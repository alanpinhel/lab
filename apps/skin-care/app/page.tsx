import { BottomNavigation } from "@/components/bottom-navigation";
import { Navbar } from "@/components/navbar";
import { ACTION_BAR_HEIGHT } from "@/constants/action-bar-height";
import { prata } from "@/fonts";
import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Card,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export default function Home() {
  return (
    <Box
      bg="#F9F5F0"
      c="#020953"
      mih="100dvh"
      miw={rem(375)}
      pb={ACTION_BAR_HEIGHT}
    >
      <Container pos="relative" p={0} size="xs">
        <Image
          alt="midnight lotion"
          src="/midnight-lotion.png"
          w="100%"
          mah={rem(580)}
        />

        <Stack bottom={0} left={0} pos="absolute" right={0} top={0}>
          <Navbar />

          <Stack justify="space-between" pb="xl" px="lg" style={{ flex: 1 }}>
            <Box>
              <Stack gap={rem(4)}>
                <Text fz="xs" tt="uppercase" lts={1.2}>
                  selection du jour
                </Text>

                <Text
                  className={prata.className}
                  fz={rem(26)}
                  tt="uppercase"
                  w="8ch"
                >
                  midnight lotion
                </Text>

                <Text mt={rem(4)} fw={700} fz="lg">
                  55€
                </Text>
              </Stack>
              <Group
                justify="flex-end"
                gap="xs"
                style={{
                  transform: "rotate(270deg) translate(80px)",
                  transformOrigin: "right bottom",
                }}
              >
                <Badge c="#020953" size="lg" variant="transparent">
                  <Text lts={0.9} fz={rem(9)} fw={700}>
                    peau grasse
                  </Text>
                </Badge>

                <Badge size="lg" variant="transparent" c="#020953">
                  <Text lts={0.9} fz={rem(9)} fw={700}>
                    peau normale
                  </Text>
                </Badge>

                <Badge size="lg" color="#020953">
                  <Text lts={0.9} fz={rem(9)} fw={700}>
                    peau sensible
                  </Text>
                </Badge>
              </Group>
            </Box>

            <Group justify="space-between" mb="md">
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="2"
                viewBox="0 0 39 2"
                fill="none"
              >
                <path
                  d="M1 1L14 0.999999"
                  stroke="#020953"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M19 1L22 1"
                  stroke="#020953"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M27 1L30 1"
                  stroke="#020953"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M35 1L38 1"
                  stroke="#020953"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                G
              </Box>

              <ActionIcon size="lg" c="#020953" variant="transparent" mr="xl">
                <IconArrowRight stroke={2} />
              </ActionIcon>
            </Group>
          </Stack>
        </Stack>
      </Container>

      <Container p={0} size="xs" my="-xl">
        <Paper
          pb={rem(36)}
          pos="relative"
          pt={rem(36)}
          px={rem(28)}
          radius="xl"
        >
          <Stack gap="xs">
            <Group justify="space-between">
              <Text fz="xs" fw={700} lts="1.2" tt="uppercase" c="#020953">
                nouveautés
              </Text>
              <Anchor fz="xs" fw={300} lts="1.2" tt="uppercase" c="#020953">
                see all
              </Anchor>
            </Group>

            <SimpleGrid cols={3} spacing="xs">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} radius="md" bg="#F9F5F0" h={rem(96)} />
              ))}
            </SimpleGrid>
          </Stack>
        </Paper>
      </Container>

      <BottomNavigation />
    </Box>
  );
}
