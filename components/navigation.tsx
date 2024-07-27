"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  // usePathname은 오직 client component에서만 작동한다!
  const path = usePathname();
  console.log(path);
  console.log("hello");
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            {path === "/" && "🤲🏻"}
          </li>
          <li>
            <Link href="/about-us">About us</Link>
            {path === "/about-us" && "🤲🏻"}
          </li>
        </ul>
      </nav>
    </>
  );
}
