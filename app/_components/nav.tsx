"use client";

import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import Link from "next/link";

export default function Nav() {
  const pathName = usePathname();

  return (
    <nav className="nav py-8 text-lg">
      <ul className="flex flex-nowrap justify-center gap-8">
        <li>
          <Link
            className={clsx(
              "nav__link",
              pathName === "/" && "nav__link--active"
            )}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              "nav__link",
              pathName.includes("/episodes") && "nav__link--active"
            )}
            href="/episodes"
          >
            Episodes
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              "nav__link",
              pathName.includes("/locations") && "nav__link--active"
            )}
            href="/locations"
          >
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
}
