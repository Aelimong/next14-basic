"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  // usePathname은 오직 client component에서만 작동한다!
  const path = usePathname();

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
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
