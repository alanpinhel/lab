import {
  Anchor,
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
import { BottomNavigation } from "../components/bottom-navigation";
import { Navbar } from "../components/navbar";
import { ACTION_BAR_HEIGHT } from "../constants/action-bar-height";
import { prata } from "../fonts";

export default function SkinCareOnePage() {
  return (
    <Box
      bg="#f9f5f0"
      mih="100dvh"
      miw={rem(375)}
      pb={ACTION_BAR_HEIGHT}
    >
      <Container p={0} size="xs">
        <Navbar />

        <Paper
          mb="-xl"
          pb={rem(36)}
          pos="relative"
          pt={rem(36)}
          px={rem(28)}
          radius="xl"
        >
          <Stack gap="xs">
            <Group justify="space-between">
              <Text
                fz="xs"
                fw={700}
                lts="1.2"
                tt="uppercase"
                c="#020953"
              >
                nouveautés
              </Text>
              <Anchor
                fz="xs"
                fw={300}
                lts="1.2"
                tt="uppercase"
                c="#020953"
              >
                see all
              </Anchor>
            </Group>

            <SimpleGrid cols={3} spacing="xs">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card
                  key={i}
                  radius="md"
                  bg="#F9F5F0"
                  h={rem(96)}
                />
              ))}
            </SimpleGrid>
          </Stack>

          <Stack mt="md" gap="xs">
            <Text
              fz="xs"
              fw={700}
              lts="1.2"
              tt="uppercase"
              c="#020953"
            >
              routines visage
            </Text>

            <Box pos="relative">
              <Image src="/skin-care/comblez-votre-peau.png" />
              <Text
                c="#020953"
                className={prata.className}
                fz="xl"
                left="var(--mantine-spacing-md)"
                pos="absolute"
                top="var(--mantine-spacing-md)"
                tt="uppercase"
                w="7ch"
              >
                comblez votre peau
              </Text>
            </Box>
          </Stack>

          <Stack mt="md" gap="xs">
            <Group justify="space-between">
              <Text
                fz="xs"
                fw={700}
                lts="1.2"
                tt="uppercase"
                c="#020953"
              >
                top ventes
              </Text>
              <Anchor
                fz="xs"
                fw={300}
                lts="1.2"
                tt="uppercase"
                c="#020953"
              >
                see all
              </Anchor>
            </Group>

            <SimpleGrid cols={3} spacing="xs">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card
                  key={i}
                  radius="md"
                  bg="#F9F5F0"
                  h={rem(96)}
                />
              ))}
            </SimpleGrid>
          </Stack>

          <Stack mt="md" gap="xs">
            <Group justify="space-between">
              <Text
                fz="xs"
                fw={700}
                lts="1.2"
                tt="uppercase"
                c="#020953"
              >
                le teint
              </Text>
              <Anchor
                fz="xs"
                fw={300}
                lts="1.2"
                tt="uppercase"
                c="#020953"
              >
                see all
              </Anchor>
            </Group>

            <SimpleGrid cols={3} spacing="xs">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card
                  key={i}
                  radius="md"
                  bg="#F9F5F0"
                  h={rem(96)}
                />
              ))}
            </SimpleGrid>
          </Stack>
        </Paper>
      </Container>

      <BottomNavigation />
    </Box>
  );
}
