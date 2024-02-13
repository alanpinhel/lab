import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data-intensive",
  description: "app to practice data-intensive challenges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
