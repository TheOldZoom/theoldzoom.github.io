import { useRouter } from "next/router";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              alt="Zoom"
              src="https://zoom.is-a.dev/api/i/ZoomProfile.png"
              className={utilStyles.borderCircle}
              height={64}
              width={64}
            />
          </Link>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link
              href="/"
              passHref
              className={router.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              passHref
              className={router.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              passHref
              className={router.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/post"
              passHref
              className={router.pathname === "/post" ? "active" : ""}
            >
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
