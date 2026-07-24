import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
  ActionIcon,
  Anchor,
  Card,
  Center,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";

const watches = [
  {
    body: "Steel Oystersteel",
    image: "/rolex/submariner.webp",
    name: "Submariner",
    price: "$10,750",
    size: "41 mm",
  },
  {
    body: "Oystersteel and Everose Gold",
    image: "/rolex/gmy-master-ii.webp",
    name: "GMY-Master II",
    price: "$10,750",
    size: "40 mm",
  },
];

export default function RolexPage() {
  return (
    <Container
      bg="url(/rolex/background.svg) #090B18"
      bgp="center"
      bgr="no-repeat"
      bgsz="cover"
      c="white"
      maw={390}
      mih="100dvh"
      px={32}
      py={44}
      size="xs"
    >
      <Navbar />

      <Stack gap={24} mt={30}>
        <Text fz={20} tt="uppercase" lh={1}>
          New Watches
        </Text>

        <Carousel
          align="start"
          containScroll="keepSnaps"
          draggable
          mx={-32}
          slideGap="xl"
          slideSize="70%"
          withControls={false}
          styles={{
            container: {
              marginLeft: 32,
              marginRight: "calc(32px - var(--mantine-spacing-xl))",
            },
          }}
        >
          {watches.map((watch) => (
            <CarouselSlide key={watch.name}>
              <Stack gap={20}>
                <Center>
                  <Image
                    alt={watch.name}
                    height={624}
                    src={watch.image}
                    style={{ width: 136, height: "auto", zIndex: 1 }}
                    width={360}
                  />
                </Center>

                <Card
                  bg="url(/rolex/bg-card.svg) #2C4166"
                  bgp="center top"
                  bgr="no-repeat"
                  bgsz="100%"
                  c="white"
                  mt={-132}
                  pos="relative"
                  pt={132}
                  radius="xl"
                >
                  <Stack ta="center" gap={20}>
                    <Stack gap={0}>
                      <Text tt="uppercase" fw={700} fz={18}>
                        {watch.name}
                      </Text>
                      <Text tt="uppercase" fz={13} opacity={0.8}>
                        {watch.size}
                      </Text>
                      <Text tt="uppercase" fz={13} opacity={0.8} h={42}>
                        {watch.body}
                      </Text>
                    </Stack>

                    <Text fw={700} fz={18} opacity={0.8}>
                      {watch.price}
                    </Text>
                  </Stack>

                  <ActionIcon
                    bottom={0}
                    component={Link}
                    href="/rolex/detail"
                    pos="absolute"
                    radius="xl"
                    right={0}
                    size="xl"
                    style={{ border: "3px solid #090B18" }}
                  >
                    <IconArrowRight />
                  </ActionIcon>
                </Card>
              </Stack>
            </CarouselSlide>
          ))}
        </Carousel>
      </Stack>

      <Stack gap={24} mt={30}>
        <Group justify="space-between">
          <Text tt="uppercase" fz={20}>
            Collection
          </Text>

          <Anchor
            component={Link}
            fw={700}
            fz={13}
            href="/rolex/detail"
            tt="uppercase"
          >
            See All
          </Anchor>
        </Group>

        <Stack>
          <Image
            alt="Yacht-Master 42"
            height={468}
            src="/rolex/yacht-master-42.webp"
            width={264}
            style={{ height: "auto", width: 86, marginLeft: 20, zIndex: 1 }}
          />

          <Card
            bg="url(/rolex/bg-card-horizontal.svg) #2C4166"
            bgp="left"
            bgr="no-repeat"
            bgsz="auto 80%"
            c="white"
            padding="lg"
            pos="relative"
            radius="xl"
            mt={-164}
          >
            <Stack align="flex-end">
              <Stack>
                <Stack gap={0}>
                  <Text tt="uppercase" fw={700}>
                    Yacht-master 42
                  </Text>
                  <Text tt="uppercase" fz={13} opacity={0.8}>
                    42 mm
                  </Text>
                  <Text tt="uppercase" fz={13} opacity={0.8}>
                    Yellow Gold
                  </Text>
                </Stack>

                <Text fw={700} opacity={0.8}>
                  $34,500
                </Text>
              </Stack>
            </Stack>

            <ActionIcon
              bottom={0}
              component={Link}
              href="/rolex/detail"
              pos="absolute"
              radius="xl"
              right={0}
              size="xl"
              style={{ border: "3px solid #090B18" }}
            >
              <IconArrowRight />
            </ActionIcon>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
