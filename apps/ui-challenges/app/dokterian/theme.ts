"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";
import { poppins } from "./fonts";

export const theme: any = createTheme({
  fontFamily: poppins.style.fontFamily,
  colors: {
    blue: generateColors("#4894fe"),
  },
  headings: {
    fontFamily: poppins.style.fontFamily,
  },
});
