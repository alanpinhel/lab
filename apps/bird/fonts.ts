import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600"],
});

export { outfit };
