import "@mantine/core/styles.css";

import { theme } from "@/theme";
import {
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Store",
  description: `watch store app interface to train front-end skills`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
