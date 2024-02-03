import { ActionIcon } from "@mantine/core";
import { IconColumns3 } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./speed-dial.module.css";

export function SpeedDial() {
  return (
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
