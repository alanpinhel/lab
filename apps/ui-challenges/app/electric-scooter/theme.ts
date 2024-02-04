"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";
import { urbanist } from "./fonts";

export const theme: any = createTheme({
  fontFamily: urbanist.style.fontFamily,
  primaryColor: "green",
  colors: {
    green: generateColors("#addbab"),
  },
  headings: {
    fontFamily: urbanist.style.fontFamily,
  },
});
