"use client";

import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Anchor,
  Badge,
  Card,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAlignLeft,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

const birds = [
  {
    id: "red-parrot",
    name: "Red Parrot",
    age: "6 years",
    height: "H.25cm",
    image: "/birds/red-parrot.jpg",
  },
  {
    id: "pink-parrot",
    name: "Pink Parrot",
    age: "3 years",
    height: "H.20cm",
    image: "/birds/pink-parrot.jpg",
  },
  {
    id: "duck",
    name: "Duck",
    age: "2 years",
    height: "H.20cm",
    image: "/birds/duck.jpg",
  },
];

const videos = [
  {
    id: "video-1",
    cover: "/birds/video-1.jpg",
    duration: "2:30",
  },
  {
    id: "video-2",
    cover: "/birds/video-2.jpg",
    duration: "2:30",
  },
  {
    id: "video-3",
    cover: "/birds/video-3.jpg",
    duration: "2:30",
  },
];

export default function BirdsListPage() {
  return (
    <Container
      bg="url(/birds/bg-2.svg)"
      bgsz="cover"
      bgr="no-repeat"
      c="white"
      mih="100%"
      px={40}
      py={64}
      size="xs"
    >
      <Group justify="space-between" mb="lg">
        <Image src="/birds/logo.svg" h={40} />
        <ActionIcon
          variant="outline"
          color="white"
          radius="xl"
          size="xl"
        >
          <IconAlignLeft stroke={1} />
        </ActionIcon>
      </Group>

      <Stack gap="xl">
        <Title fz={24} fw={100} lh={1}>
          Welcome{" "}
          <Text inherit span fw={400}>
            Emilia
          </Text>
        </Title>

        <Text fz={28} lh={1}>
          What would you like to learn about?
        </Text>

        <Group>
          <Badge
            color="dark"
            h={40}
            px={24}
            py="sm"
            size="xl"
            tt="capitalize"
            variant="white"
          >
            🦜 Birds
          </Badge>

          <Badge
            color="white"
            fw={400}
            h={40}
            px={24}
            py="sm"
            size="xl"
            tt="capitalize"
            variant="outline"
          >
            🦋 Butterflies
          </Badge>

          <Badge
            color="white"
            fw={400}
            h={40}
            px={24}
            py="sm"
            size="xl"
            tt="capitalize"
            variant="outline"
          >
            🐨 Others
          </Badge>
        </Group>

        <Carousel
          draggable
          align="start"
          containScroll="keepSnaps"
          mx={-40}
          slideGap="md"
          slideSize="45%"
          withControls={false}
          styles={{
            container: {
              marginLeft: 40,
              marginRight:
                "calc(40px - var(--mantine-spacing-md))",
            },
          }}
        >
          {birds.map((bird) => (
            <Carousel.Slide key={bird.id}>
              <Card radius="xl" bg="dark.8">
                <Card.Section>
                  <Image src={bird.image} />
                </Card.Section>

                <Stack pt="md" pb={8}>
                  <Stack gap={8}>
                    <Text c="white" fw={500} lh={1}>
                      {bird.name}
                    </Text>
                    <Text
                      c="dimmed"
                      fw={300}
                      fz={13}
                      lh={1}
                    >
                      {`${bird.age} / ${bird.height}`}
                    </Text>
                  </Stack>

                  <Anchor
                    c="yellow"
                    fz={13}
                    fw={300}
                    lh={1}
                  >
                    + Know More
                  </Anchor>
                </Stack>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>

        <Stack gap={8}>
          <Title order={2} fz={28} lh={1}>
            Video Birds
          </Title>
          <Text fw={300} fz={13} lh={1} c="dimmed">
            Experience how our birds live
          </Text>
        </Stack>

        <Carousel
          draggable
          align="start"
          containScroll="keepSnaps"
          mx={-40}
          slideGap="md"
          slideSize="45%"
          withControls={false}
          styles={{
            container: {
              marginLeft: 40,
              marginRight: `calc(40px - var(--mantine-spacing-md))`,
            },
          }}
        >
          {videos.map((video) => (
            <Carousel.Slide key={video.id}>
              <Card radius="xl" bg="dark.8">
                <Card.Section pos="relative">
                  <Group
                    bottom={16}
                    justify="space-between"
                    left={16}
                    pos="absolute"
                    right={16}
                  >
                    <ActionIcon
                      color="dark"
                      radius="xl"
                      size="lg"
                    >
                      <IconPlayerPlayFilled size={16} />
                    </ActionIcon>

                    <Badge color="dark" opacity={0.8}>
                      {video.duration}
                    </Badge>
                  </Group>

                  <Image src={video.cover} />
                </Card.Section>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
}
