"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-6 py-4">
      {/*ESQUERDA*/}
      <div className="flex items-center gap-10">
        <Image src="logo.svg" width={173} height={39} alt="Finace Flow" />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscriptions"
          className={
            pathname === "/subscriptions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinaturas
        </Link>
      </div>
      {/*DIREITA*/}
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
