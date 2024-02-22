import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

type TNavbarMenu = {
  title: string;
  href: string;
};

const NAVBAR_MENU: Array<TNavbarMenu> = [
  {
    title: "Profil",
    href: "/profile",
  },
  {
    title: "Berita",
    href: "/news",
  },
  {
    title: "Informasi",
    href: "/information",
  },
];

export const Navbar: FC = (): ReactElement => {
  return (
    <header className="flex justify-between w-full z-40 bg-primary text-white fixed items-center px-40 py-4">
      <figure className="flex items-center gap-x-2">
        <Image
          alt="logo"
          className="object-fill"
          src="/logo.png"
          width={40}
          height={40}
        />
        <figcaption className="text-2xl  font-bold">HPHI Jabar</figcaption>
      </figure>
      <nav className="flex items-center gap-x-8">
        {NAVBAR_MENU.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className="font-semibold  shadow-xs text-lg hover:text-success-700"
          >
            {menu.title}
          </Link>
        ))}
      </nav>
      <Button variant={"secondary"} size={"md"}>
        Kontak Kami
      </Button>
    </header>
  );
};
