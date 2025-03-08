import { Toaster } from "@pheralb/toast";
import Image from "next/image";
import Nav from "./_components/nav";
import { FavoritesProvider } from "./_context/FavoritesContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-[430px] p-4">
        <header className="flex flex-col items-center pt-8 pb-4">
          <Image
            className="mb-6"
            src="/logo.png"
            width={400}
            height={81}
            alt="Rick and Morty"
          />

          <Nav />
        </header>

        <FavoritesProvider>
          <main>{children}</main>
        </FavoritesProvider>
        <Toaster />
      </body>
    </html>
  );
}
