import { Kanit, Khand } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const khand = Khand({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export { kanit, khand };
