import type { Metadata } from "next";
import { Poppins, Train_One } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const trainOne = Train_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Barbrew",
  description: `interface de app sobre cerveja para treinar habilidades front-end`,
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
