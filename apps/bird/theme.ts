"use client";

import { createTheme } from "@mantine/core";
import { outfit } from "./fonts";

export const yellow = "#f59c1d";
export const black = "#1a1a1a";
export const red = "#e1232a";

export const theme: any = createTheme({
  fontFamily: outfit.style.fontFamily,
  headings: {
    fontFamily: outfit.style.fontFamily,
  },
});
