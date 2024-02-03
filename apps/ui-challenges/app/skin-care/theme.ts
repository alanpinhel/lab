"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";
import { apercu } from "./fonts";

export const theme: any = createTheme({
  fontFamily: apercu.style.fontFamily,
  colors: {
    blue: generateColors("#020953"),
  },
});
