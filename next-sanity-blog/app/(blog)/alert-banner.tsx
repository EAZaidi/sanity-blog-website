import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex items-center justify-between px-4 h-14">
      <div className="py-2 text-center text-sm">AI.Blogs</div>
      <nav className="flex space-x-6 text-md font-medium text-black">
        <Link href={"/"} className="hover:text-green-800">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-green-800">
          About
        </Link>
        <Link href={"/contact"} className="hover:text-green-800">
          Contact
        </Link>
      </nav>
    </div>
  );
}
