import clsx from "clsx";
import Image from "next/image";

export default function Avatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      className={clsx("rounded-full max-w-[80px]", className)}
      src={src}
      width={80}
      height={80}
      alt={alt}
      loading="lazy"
    />
  );
}
