import clsx from "clsx";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={clsx(
      "border border-gray-100 rounded-sm bg-white shadow-xs hover:shadow-md transition-shadow cursor-pointer",
      className
    )}
  >
    {children}
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-0 text-lg font-semibold">{children}</h2>
);

const CardHeader = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={clsx("p-4", className)}>{children}</div>;

const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={clsx("p-4 pt-0", className)}>{children}</div>;

export { Card, CardTitle, CardHeader, CardContent };
