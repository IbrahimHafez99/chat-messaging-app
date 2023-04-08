import Image from "next/image";
import { Readex_Pro } from "next/font/google";

const inter = Readex_Pro({ subsets: ["latin", "arabic"] });

export default function Home() {
  return <div className="text-red-500">Hello world from razer</div>;
}
