import type { Pager } from "@/lib/types";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Pagination({ pager }: { pager: Pager }) {
  const { current, total, hasNext, hasPrev } = pager;

  return (
    <nav className="mt-8">
      <ul className="flex items-center justify-center gap-4 p-2">
        {hasPrev && (
          <li>
            <Link
              className="text-gray-600 hover:text-gray-800"
              prefetch={true}
              href={`?page=${Number(current) - 1}`}
            >
              <ChevronLeft size={20} />
            </Link>
          </li>
        )}

        {Array.from({ length: total }).map((_, index) => (
          <li key={index}>
            <Link
              prefetch={true}
              href={`?page=${index + 1}`}
              className={clsx(
                "text-lg px-2 py-1 text-gray-600 hover:text-gray-800",
                {
                  "font-semibold bg-primary text-white rounded-sm":
                    current == index + 1,
                }
              )}
            >
              {index + 1}
            </Link>
          </li>
        ))}

        {hasNext && (
          <li>
            <Link
              className="text-gray-600 hover:text-gray-800"
              prefetch={true}
              href={`?page=${Number(current) + 1}`}
            >
              <ChevronRight size={20} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
