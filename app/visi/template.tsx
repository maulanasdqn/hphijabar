import { Footer } from "@/components/molecules/footer";
import { FC, PropsWithChildren, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";

const VisiTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="w-full h-full items-center flex flex-col bg-white">
      <header className="flex justify-between w-full z-40 bg-primary text-white fixed items-center px-40 py-4">
        <Link href="/">
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
        </Link>
        <Button variant={"secondary"} size={"md"}>
          Kontak Kami
        </Button>
      </header>
      <section className="flex flex-col w-full h-full max-w-[1000px]">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default VisiTemplate;
