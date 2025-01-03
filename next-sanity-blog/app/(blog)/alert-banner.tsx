// "use client";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur"
    >
      <div className="py-0 text-sm">
      
      <header className="text-white bg-black body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 ml-4 mb-4 md:mb-0">
      <Image src={"/logoimage.jpg"} alt="Essa Abbas" width={56} height={40} className="rounded-full"/>
      <span className={`${inter.variable} ml-3 text-white font-bold text-xl`}>AI.Blogs</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-white">Home</Link>
      <Link href={""} className="mr-5 hover:text-white">Blogs</Link>
      <Link href={""} className="mr-5 hover:text-white">Author</Link>
      <Link href={""} className="mr-5 hover:text-white">Contact</Link>
    </nav>
  </div>
</header>
      </div>
    </div>
  );
}
