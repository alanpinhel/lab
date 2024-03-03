import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "./globals.css";

import { SpeedDial } from "@/components/speed-dial";
import {
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Challenges",
  description: "app to practice ui coding skills",
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
        <MantineProvider>
          {children}
          <SpeedDial />
        </MantineProvider>
      </body>
    </html>
  );
}
