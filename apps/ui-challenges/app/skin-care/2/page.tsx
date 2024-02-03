import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import {
  IconArrowRight,
  IconEye,
} from "@tabler/icons-react";
import { BottomNavigation } from "../components/bottom-navigation";
import { Navbar } from "../components/navbar";
import { ACTION_BAR_HEIGHT } from "../constants/action-bar-height";
import { prata } from "../fonts";

export default function SkinCareTwoPage() {
  return (
    <Box
      bg="#f9f5f0"
      c="#020953"
      mih="100dvh"
      miw={rem(375)}
      pb={`calc(${rem(ACTION_BAR_HEIGHT)} + ${rem(20)})`}
    >
      <Container size="xs" px={0}>
        <Navbar />

        <Stack px="lg" mt="xl">
          <Group align="flex-end" justify="space-between">
            <Title
              className={prata.className}
              tt="uppercase"
              size="h2"
              w="8ch"
            >
              Routines visage
            </Title>

            <Text tt="uppercase" lts={0.9} fz={rem(9)}>
              voir tout
            </Text>
          </Group>

          <Text fz="xs" fw={300} lts={1.1}>
            Une bonne routine de soins doit être simple,
            efficace, et cibler les différentes
            préoccupations de la peau. Retrouvez dans ces
            routines tous les produits adaptés à vos
            besoins.
          </Text>
        </Stack>

        <Stack gap="xl" px="lg" mt="lg">
          <Stack gap="xs" lts={0.9}>
            <Text fz={rem(9)} tt="uppercase">
              Mon type de peau
            </Text>

            <Group gap="xs">
              <Badge color="#020953">peau normale</Badge>
              <Badge color="#020953" variant="transparent">
                peau sensible
              </Badge>
              <Badge color="#020953" variant="transparent">
                peau grasse
              </Badge>
            </Group>
          </Stack>

          <SimpleGrid cols={1}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} radius="lg" c="#020953">
                <Stack>
                  <Group
                    wrap="nowrap"
                    align="flex-start"
                    justify="space-between"
                  >
                    <Stack gap={rem(6)}>
                      <Text
                        tt="uppercase"
                        lts={1.2}
                        fw={700}
                        fz="xs"
                      >
                        Routine éclat
                      </Text>
                      <Text
                        fw={300}
                        fz={rem(10)}
                        lts={1}
                        w="40%"
                      >
                        Sérum Antioxydant, Huile
                        démaquillante, Crème Hydratante
                      </Text>
                    </Stack>

                    <ActionIcon variant="white" c="#020953">
                      <IconEye
                        size={rem(20)}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Group>

                  <Group
                    justify="space-between"
                    align="flex-end"
                  >
                    <Stack gap={0}>
                      <Text fz={rem(8)} fw={300} lts={0.8}>
                        Peau terne
                      </Text>
                      <Text
                        tt="uppercase"
                        lts={1.3}
                        fz={rem(13)}
                        fw={700}
                      >
                        45€
                      </Text>
                    </Stack>

                    <Button
                      color="#020953"
                      size="compact-xs"
                      radius="xl"
                      rightSection={
                        <IconArrowRight size="1rem" />
                      }
                    >
                      ajoutée au panier
                    </Button>
                  </Group>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>

        <BottomNavigation />
      </Container>
    </Box>
  );
}
