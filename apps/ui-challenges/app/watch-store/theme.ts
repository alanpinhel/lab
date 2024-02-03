"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";
import { kanit } from "./fonts";

export const primaryColor = "#f3c981";
export const backgroundColor = "#253c66";

export const theme: any = createTheme({
  fontFamily: kanit.style.fontFamily,
  colors: {
    yellow: generateColors("#f3c981"),
  },
});
