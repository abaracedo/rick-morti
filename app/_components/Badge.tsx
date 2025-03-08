import { twMerge } from "tailwind-merge";

const variantClasses: Record<string, string> = {
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  primary: "bg-primary text-white",
  default: "bg-gray-200 text-gray-800",
};

export default function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: string;
}) {
  return (
    <span
      className={twMerge(
        "text-nowrap fit-content px-2 py-1 text-xs rounded-xl",
        variantClasses[variant]
      )}
    >
      {children}
    </span>
  );
}
