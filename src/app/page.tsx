import Image from "next/image";
import { Readex_Pro } from "next/font/google";
import { db } from "@/lib/db";

const inter = Readex_Pro({ subsets: ["latin", "arabic"] });

export default async function Home() {
  await db.set("hello", "hello");
  return <div className="text-red-500">Hello world from razer</div>;
}
