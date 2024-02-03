import { faviconTemplate } from "@/utils/favicon-template";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        rel="icon"
        href={`data:image/svg+xml,${faviconTemplate`🦜`}`}
      />
      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
    </>
  );
}
