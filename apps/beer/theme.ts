"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";
import { poppins } from "./fonts";

export const theme: any = createTheme({
  fontFamily: poppins.style.fontFamily,
  primaryColor: "yellow",
  colors: {
    yellow: generateColors("#F4C314"),
  },
});
