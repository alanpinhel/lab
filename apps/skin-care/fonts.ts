import { Prata } from "next/font/google";
import localFont from "next/font/local";

const prata = Prata({ subsets: ["latin"], display: "swap", weight: "400" });
const apercu = localFont({
  src: [
    {
      path: "./public/Apercu-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./public/Apercu-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./public/Apercu-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./public/Apercu-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export { apercu, prata };
