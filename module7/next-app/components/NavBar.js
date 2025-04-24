"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const path = usePathname();
  return (
    <>
      <div className="h-24 bg-blue-800 flex justify-between items-center px-12">
        <Link href="/">
          <span className="text-green-500 uppercase text-2xl font-bold hover:text-white">
            Aina's App
          </span>
        </Link>
        <ul className="flex gap-3">
          <li className="text-xl hover:text-green-500">
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              path.startsWith("/about")
                ? "text-xl text-blue-500 font-bold hover:text-green-500"
                : "text-xl hover:text-green-500"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li className="text-xl hover:text-green-500">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-xl hover:text-green-500">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="text-xl hover:text-green-500">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-xl hover:text-green-500">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
