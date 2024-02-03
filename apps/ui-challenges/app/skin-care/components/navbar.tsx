import { ActionIcon, Group } from "@mantine/core";
import {
  IconAlignJustified,
  IconSearch,
  IconShoppingBag,
} from "@tabler/icons-react";

export function Navbar() {
  return (
    <Group component="nav" justify="space-between" px="lg" pt="lg" pb="sm">
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
  );
}
