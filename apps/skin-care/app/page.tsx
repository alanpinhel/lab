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
  UnstyledButton,
  rem,
} from "@mantine/core";
import {
  IconAlignJustified,
  IconArrowRight,
  IconCategory,
  IconEye,
  IconHome,
  IconSearch,
  IconShoppingBag,
  IconUserCircle,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <Box pos="relative" c="#020953">
      <Box pos="absolute" top={0} right={0} left={0} style={{ zIndex: -1 }}>
        <Group
          gap="xs"
          pos="fixed"
          right={0}
          style={{ transform: "rotate(270deg) translate(-250px, 120px)" }}
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

        <Image src="/midnight-lotion.png" w="100%" alt="midnight lotion" />
      </Box>

      <Container px="xl" py="lg">
        <Stack>
          <Group justify="space-between">
            <ActionIcon variant="white" radius="xl" c="#020953">
              <IconAlignJustified size="1rem" stroke={1.5} />
            </ActionIcon>

            <Group gap="sm">
              <ActionIcon variant="white" radius="xl" c="#020953">
                <IconSearch size="1rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon variant="white" radius="xl" c="#020953">
                <IconShoppingBag size="1rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </Group>

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
        </Stack>
      </Container>

      <Box pos="fixed" bottom={0} left={0} right={0}>
        <Group justify="space-between" pl="xl" pr={rem(40)} pb="xs">
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

          <ActionIcon size="lg" c="#020953" variant="transparent">
            <IconArrowRight stroke={2} />
          </ActionIcon>
        </Group>

        <Paper radius="xl" p="xl">
          <Group justify="space-between">
            <Text tt="uppercase" fz="xs" fw={700} lts={1.2}>
              nouveautés
            </Text>

            <Anchor tt="uppercase" fz="xs" fw={300} c="#020953" lts={1.2}>
              see all
            </Anchor>
          </Group>

          <SimpleGrid cols={3} mt="xs" spacing="xs">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} bg="#F9F5F0" h={rem(96)} radius="md" />
            ))}
          </SimpleGrid>
        </Paper>
      </Box>

      <Box pos="fixed" bottom={0} left={0} right={0} style={{ zIndex: 10 }}>
        <Paper px={rem(42)} py="xl">
          <Group justify="space-between">
            <UnstyledButton>
              <Stack gap={rem(2)} align="center">
                <IconHome stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  home
                </Text>
              </Stack>
            </UnstyledButton>

            <UnstyledButton>
              <Stack gap={rem(2)} align="center">
                <IconCategory stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  products
                </Text>
              </Stack>
            </UnstyledButton>

            <UnstyledButton>
              <Stack gap={rem(2)} align="center">
                <IconEye stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  wishlist
                </Text>
              </Stack>
            </UnstyledButton>

            <UnstyledButton>
              <Stack gap={rem(2)} align="center">
                <IconUserCircle stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  account
                </Text>
              </Stack>
            </UnstyledButton>
          </Group>
        </Paper>
      </Box>
    </Box>
  );
}
