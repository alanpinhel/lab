"use client";

import { ActionIcon } from "@mantine/core";
import { IconColumns3 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./speed-dial.module.css";

export function SpeedDial() {
  const pathname = usePathname();

  return pathname === "/" ? null : (
    <ActionIcon
      className={classes.speedDial}
      color="indigo"
      component={Link}
      href="/"
      pos="fixed"
      radius="md"
      size="xl"
    >
      <IconColumns3 />
    </ActionIcon>
  );
}
