import clsx from "clsx";

const variantClasses = {
  danger: "bg-red-500 text-white",
  primary: "bg-primary text-white",
  default: "bg-gray-200 text-gray-800",
};

type ButtonVariants = keyof typeof variantClasses;

export default function Button({
  className,
  variant = "default",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
}) {
  return (
    <button
      className={clsx(
        "w-full px-4 py-2 rounded-lg",
        className,
        variantClasses[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
