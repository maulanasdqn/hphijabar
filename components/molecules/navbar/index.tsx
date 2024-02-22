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
    title: "Berita",
    href: "/",
  },
  {
    title: "Profil",
    href: "/profil",
  },
  {
    title: "Galeri",
    href: "/gallery",
  },
  {
    title: "Tentang Kami",
    href: "/about",
  },
];

export const Navbar: FC = (): ReactElement => {
  return (
    <header className="flex justify-between w-full bg-transparent items-center py-10">
      <figure className="flex items-center gap-x-2">
        <Image
          alt="logo"
          className="object-fill"
          src="/logo.png"
          width={32}
          height={32}
        />
        <figcaption className="text-2xl text-white font-bold">
          HPHI Jabar
        </figcaption>
      </figure>
      <nav className="flex items-center gap-x-4">
        {NAVBAR_MENU.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className="font-semibold text-primary-2 shadow-xs text-lg hover:text-success-700"
          >
            {menu.title}
          </Link>
        ))}
      </nav>
      <Button variant={"primary"} size={"md"}>
        Kontak Kami
      </Button>
    </header>
  );
};
