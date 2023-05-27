"use client";

import { classNames } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts/new", label: "New Post" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="justify-center h-16 bg-slate-900 flex items-center px-14 m-2 rounded-xl lg:justify-start">
      <nav>
        <ul className="flex gap-x-6">
          {links.map(({ href, label }) => (
            <li
              key={`${href}`}
              className={classNames(
                pathname === href
                  ? "font-bold text-purple-600 underline"
                  : "text-slate-400",
                "text-lg hover:text-purple-400 transition-colors"
              )}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
