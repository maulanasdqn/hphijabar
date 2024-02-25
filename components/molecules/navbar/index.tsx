"use client";
import { FC, Fragment, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

type TNavbarMenu = {
  title: string;
  children?: Array<{
    title: string;
    key: string;
    href: string;
  }>;
  href: string;
};

const NAVBAR_MENU: Array<TNavbarMenu> = [
  {
    title: "Profil",
    href: "/profile",
    children: [
      {
        title: "Sejarah",
        href: "/history",
        key: "#sejarah",
      },
      {
        title: "Visi & Misi",
        href: "/visi",
        key: "#visi",
      },
    ],
  },
  {
    title: "Berita",
    href: "/listnews",
  },
  {
    title: "Informasi",
    href: "/information",
  },
];

export const Navbar: FC = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState("");
  return (
    <header className="lg:flex hidden justify-between w-screen z-40 bg-primary text-white fixed items-center px-40 py-4">
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
          <Fragment key={index}>
            {!menu?.children ? (
              <Link
                href={menu.href}
                className="font-semibold  shadow-xs text-lg hover:text-primary-2  cursor-pointer"
              >
                {menu.title}
              </Link>
            ) : (
              <section
                onMouseEnter={() => setMenuOpen(menu.href)}
                onMouseLeave={() => setMenuOpen("")}
                className="relative  cursor-pointer"
              >
                <span className="font-semibold  shadow-xs text-lg hover:text-primary-2">
                  {menu.title}
                </span>
                {menuOpen === menu.href && (
                  <div className="absolute bg-white w-[120px] p-2 text-primary font-bold rounded-md  h-auto">
                    {menu?.children?.map((child, index) => (
                      <span className="flex flex-col py-2" key={index}>
                        <Link href={child.href}>{child.title}</Link>
                      </span>
                    ))}
                  </div>
                )}
              </section>
            )}
          </Fragment>
        ))}
      </nav>
      <Button variant={"secondary"} size={"md"}>
        Kontak Kami
      </Button>
    </header>
  );
};
