import { allertaStencil } from "@/fonts";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import {
  IconHeartFilled,
  IconPlus,
  IconSmartHome,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

const categories = [
  {
    color: "yellow",
    id: "all",
    title: "All",
  },
  {
    color: "gray.3",
    icon: "/water-bottle.png",
    id: "water",
  },
  {
    color: "gray.3",
    icon: "/beer.png",
    id: "beer",
  },
  {
    color: "gray.3",
    icon: "/can.png",
    id: "can",
  },
  {
    color: "gray.3",
    icon: "/cocktail.png",
    id: "cocktail",
  },
];

const products = [
  {
    category: "beer",
    id: "corona",
    image: "/corona.png",
    name: "Corona Extra",
    price: "$4.56",
    volume: "356ml",
  },
  {
    category: "beer",
    id: "heineken",
    image: "/heineken.png",
    name: "Heineken Original",
    price: "$3.56",
    volume: "356ml",
  },
  {
    category: "beer",
    id: "fentimans",
    image: "/fentimans.png",
    name: "Fentimans Beer",
    price: "$2.56",
    volume: "356ml",
  },
  {
    category: "beer",
    id: "duuel",
    image: "/duuel.png",
    name: "Duuel Golden",
    price: "$6.56",
    volume: "356ml",
  },
];

export default function List() {
  return (
    <Container py="md">
      <Stack gap="xl">
        <Group justify="space-between">
          <ActionIcon
            color="dark"
            component={Link}
            href="/"
            size="xl"
            variant="transparent"
          >
            <IconSmartHome stroke={1} size={rem(32)} />
          </ActionIcon>

          <ActionIcon size="xl" variant="transparent" color="dark">
            <IconUser stroke={1} size={rem(32)} />
          </ActionIcon>
        </Group>

        <Image src="/banner.png" radius="xl" />

        <Group wrap="nowrap" gap="xs">
          {categories.map((category) => (
            <Button
              c="black"
              color={category.color}
              fw={500}
              fz="md"
              h={rem(80)}
              key={category.id}
              p={0}
              radius="lg"
              tt="uppercase"
              w={rem(70)}
            >
              {category.title}
              {category.icon && (
                <Image src={category.icon} w={rem(30)} h={rem(30)} />
              )}
            </Button>
          ))}
        </Group>

        <SimpleGrid cols={2}>
          {products.map((product) => (
            <Box pos="relative" key={product.id}>
              <Box
                pos="absolute"
                right={rem(20)}
                style={{ zIndex: 1 }}
                top={rem(-10)}
              >
                <Image src={product.image} h={rem(170)} />
              </Box>

              <Card bg="yellow" radius="lg" shadow="lg" padding="xs">
                <Stack gap="xs">
                  <ActionIcon color="red" radius="xl">
                    <IconHeartFilled size="1rem" />
                  </ActionIcon>

                  <Title
                    className={allertaStencil.className}
                    order={3}
                    size="h2"
                    w={`${product.name.split(" ").length}ch`}
                  >
                    {product.name}
                  </Title>

                  <Text tt="uppercase" fw={600} fz="lg">
                    {product.volume}
                  </Text>

                  <Group justify="space-between" mt="xs">
                    <Text fw={600} fz="xl" c="white">
                      {product.price}
                    </Text>
                    <ActionIcon variant="white" radius="xl" c="dark" size="lg">
                      <IconPlus />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Card>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
