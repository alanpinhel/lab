"use client";

import { faviconTemplate } from "@/utils/favicon-template";
import {
  Card,
  Container,
  Image,
  SimpleGrid,
} from "@mantine/core";
import { useFavicon } from "@mantine/hooks";
import Link from "next/link";

export default function HomePage() {
  useFavicon(`data:image/svg+xml,${faviconTemplate`🎯`}`);

  return (
    <Container py="md">
      <SimpleGrid cols={3}>
        <Card
          href="/electric-scooter"
          component={Link}
          padding={0}
          radius="md"
        >
          <Image
            src="/electric-scooter/cover.png"
            alt="Cover Electric Scooter"
          />
        </Card>
        <Card
          href="/birds"
          component={Link}
          padding={0}
          radius="md"
        >
          <Image src="/birds/cover.png" alt="Cover Birds" />
        </Card>
        <Card
          href="/watch-store"
          component={Link}
          padding={0}
          radius="md"
        >
          <Image
            src="/watch-store/cover.png"
            alt="Cover Watch Store"
          />
        </Card>
        <Card
          href="/skin-care"
          component={Link}
          padding={0}
          radius="md"
        >
          <Image
            src="/skin-care/cover.png"
            alt="Cover Skin Care"
          />
        </Card>
        <Card
          href="/beer"
          component={Link}
          padding={0}
          radius="md"
        >
          <Image src="/beer/cover.png" alt="Cover Beer" />
        </Card>
      </SimpleGrid>
    </Container>
  );
}
