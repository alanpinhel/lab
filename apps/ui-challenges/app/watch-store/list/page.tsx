import {
  ActionIcon,
  Box,
  Button,
  Card,
  Center,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import {
  IconAlignLeft,
  IconArrowRightBar,
  IconChevronLeft,
  IconChevronRight,
  IconHeartFilled,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";
import { khand } from "../fonts";
import { backgroundColor, primaryColor } from "../theme";

const watches = [
  {
    id: "watch-1",
    image: "/watch-store/thommen.png",
    brand: "fossil",
    name: "Thommen Watches",
  },
  {
    id: "watch-2",
    image: "/watch-store/cat.png",
    brand: "tommy wilfised",
    name: "CAT Watches",
  },
  {
    id: "watch-3",
    image: "/watch-store/tommy.png",
    brand: "fossil",
    name: "Men`s Watch Tommy Hilfiger Decker",
  },
  {
    id: "watch-4",
    image: "/watch-store/zurich.png",
    brand: "tommy wilfised",
    name: "Zurich Mauriac Swiss Watches",
  },
];

export default function ListPage() {
  return (
    <Box bg={backgroundColor} mih="100dvh" c="white">
      <Container
        px="lg"
        py={rem(46)}
        h="100%"
        pos="relative"
        size="xs"
      >
        <Group justify="space-between">
          <ActionIcon
            variant="transparent"
            color="white"
            size="xl"
          >
            <IconAlignLeft size={40} />
          </ActionIcon>

          <Group gap="xl">
            <ActionIcon
              variant="transparent"
              color="white"
              size="xl"
            >
              <IconSearch size={40} />
            </ActionIcon>

            <ActionIcon
              variant="transparent"
              color="white"
              size="xl"
            >
              <IconShoppingCart size={40} />
            </ActionIcon>
          </Group>
        </Group>

        <Stack mt={rem(50)}>
          <Group justify="space-between" align="flex-end">
            <Stack gap={0}>
              <Text tt="uppercase" lts={3.6} fw={500}>
                featured
              </Text>
              <Text
                fz={rem(30)}
                tt="uppercase"
                lts={3}
                fw={500}
              >
                products
              </Text>
            </Stack>

            <Group gap={rem(4)}>
              <ActionIcon
                variant="transparent"
                color="white"
                size="lg"
              >
                <IconChevronLeft size={32} />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                color="white"
                size="xl"
              >
                <IconChevronRight size={32} />
              </ActionIcon>
            </Group>
          </Group>

          <Card bg={primaryColor} radius="xl" py={rem(32)}>
            <Group pos="relative">
              <Image
                bottom={-32}
                h="auto"
                pos="absolute"
                right={-16}
                src="/watch-store/bremont.png"
                w="50%"
              />

              <Stack gap={0} align="flex-start" w="50%">
                <Text
                  lts={1.9}
                  fw={600}
                  fz={rem(10)}
                  c="#6B6B6B"
                >
                  New Arrival
                </Text>
                <Text
                  c={backgroundColor}
                  fz={rem(30)}
                  fw={600}
                  tt="uppercase"
                >
                  Bremont
                </Text>
                <Text
                  mt={rem(4)}
                  mb={rem(14)}
                  c="#757575"
                  fz={rem(12)}
                >
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna
                  aliqua.
                </Text>
                <Button
                  c="black"
                  fw={600}
                  lts={1.9}
                  radius="md"
                  rightSection={<IconArrowRightBar />}
                  tt="uppercase"
                  variant="white"
                >
                  Buy now
                </Button>
              </Stack>
            </Group>
          </Card>
        </Stack>

        <Stack mt={38}>
          <Group justify="space-between" align="flex-end">
            <Stack gap={0}>
              <Text tt="uppercase" lts={3.6} fw={500}>
                trending
              </Text>
              <Text
                fz={rem(30)}
                tt="uppercase"
                lts={3}
                fw={500}
              >
                products
              </Text>
            </Stack>

            <Group gap={rem(4)}>
              <ActionIcon
                variant="transparent"
                color="white"
                size="lg"
              >
                <IconChevronLeft size={32} />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                color="white"
                size="xl"
              >
                <IconChevronRight size={32} />
              </ActionIcon>
            </Group>
          </Group>

          <SimpleGrid cols={2}>
            {watches.map((watch, index) => (
              <Stack key={watch.id}>
                <Card
                  bg={primaryColor}
                  component={Link}
                  h={240}
                  href="detail"
                  pos="relative"
                  radius="lg"
                >
                  <ActionIcon
                    color={
                      index % 2 === 0 ? "red" : "white"
                    }
                    pos="absolute"
                    radius="md"
                    right={16}
                    size="lg"
                    top={16}
                    variant="light"
                  >
                    {<IconHeartFilled size={20} />}
                  </ActionIcon>
                  <Center h="100%">
                    <Image src={watch.image} h={168} />
                  </Center>
                </Card>

                <Stack gap={0}>
                  <Text
                    fw={700}
                    lts={2.4}
                    fz={10}
                    tt="uppercase"
                    className={khand.className}
                  >
                    {watch.brand}
                  </Text>
                  <Text
                    fw={500}
                    fz={22}
                    className={khand.className}
                  >
                    {watch.name}
                  </Text>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
