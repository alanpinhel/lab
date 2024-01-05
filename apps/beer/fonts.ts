import { Allerta_Stencil, Poppins, Train_One } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const trainOne = Train_One({ subsets: ["latin"], weight: ["400"] });
const allertaStencil = Allerta_Stencil({ subsets: ["latin"], weight: ["400"] });

export { allertaStencil, poppins, trainOne };
