"use client";

import { faviconTemplate } from "@/utils/favicon-template";
import { Card, Container, SimpleGrid } from "@mantine/core";
import { useFavicon } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

const challenges = [
  {
    title: "Dokterian",
    href: "/dokterian",
    image: "/dokterian/cover.png",
    alt: "Dokterian",
  },
  {
    title: "Rolex Store",
    href: "/rolex",
    image: "/rolex/cover.webp",
    alt: "Cover Rolex Store",
  },
  {
    title: "Electric Scooter",
    href: "/electric-scooter",
    image: "/electric-scooter/cover.png",
    alt: "Cover Electric Scooter",
  },
  {
    title: "Birds",
    href: "/birds",
    image: "/birds/cover.png",
    alt: "Cover Birds",
  },
  {
    title: "Watch Store",
    href: "/watch-store",
    image: "/watch-store/cover.png",
    alt: "Cover Watch Store",
  },
  {
    title: "Skin Care",
    href: "/skin-care",
    image: "/skin-care/cover.png",
    alt: "Cover Skin Care",
  },
  {
    title: "Beer",
    href: "/beer",
    image: "/beer/cover.png",
    alt: "Cover Beer",
  },
];

export default function HomePage() {
  useFavicon(`data:image/svg+xml,${faviconTemplate`🎯`}`);

  return (
    <Container py="md">
      <SimpleGrid cols={3}>
        {challenges.map((challenge) => (
          <Card
            key={challenge.title}
            href={challenge.href}
            component={Link}
            padding={0}
            radius="md"
          >
            <Image
              alt={challenge.alt}
              height={1920}
              sizes="33vw"
              src={challenge.image}
              style={{ width: "100%", height: "auto" }}
              width={1080}
            />
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
