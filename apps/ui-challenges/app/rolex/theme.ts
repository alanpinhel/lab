"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";
import { cinzel } from "./fonts";

export const theme: any = createTheme({
  fontFamily: cinzel.style.fontFamily,
  colors: {
    blue: generateColors("#458BDE"),
  },
  headings: {
    fontFamily: cinzel.style.fontFamily,
  },
});
