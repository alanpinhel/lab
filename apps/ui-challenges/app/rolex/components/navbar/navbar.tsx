import { ActionIcon, Group } from "@mantine/core";
import { IconAlignLeft, IconShoppingBag } from "@tabler/icons-react";
import Image from "next/image";

export function Navbar() {
  return (
    <Group justify="space-between">
      <ActionIcon size="xl" radius="xl" color="rgba(36, 51, 78, 0.25)">
        <IconAlignLeft stroke={1} />
      </ActionIcon>

      <Image alt="Rolex Logo" src="/rolex/logo.svg" width={104} height={68} />

      <ActionIcon size="xl" radius="xl" color="rgba(36, 51, 78, 0.25)">
        <IconShoppingBag stroke={1} />
      </ActionIcon>
    </Group>
  );
}
