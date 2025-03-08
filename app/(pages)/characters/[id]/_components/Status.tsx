import Badge from "@/app/_components/Badge";
import type { CharacterStatus } from "@/lib/types";
import clsx from "clsx";

export default function Status({ status }: { status: CharacterStatus }) {
  return (
    <Badge
      variant={clsx(
        status === "Alive" && "success",
        status === "Dead" && "danger",
        status === "unknown" && ""
      )}
    >
      {status}
    </Badge>
  );
}
