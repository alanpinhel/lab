"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";
import { outfit } from "./fonts";

export const theme: any = createTheme({
  fontFamily: outfit.style.fontFamily,
  primaryColor: "yellow",
  colors: {
    yellow: generateColors("#f59c1d"),
  },
  headings: {
    fontFamily: outfit.style.fontFamily,
  },
});
