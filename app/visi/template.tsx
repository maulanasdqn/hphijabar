import { Footer } from "@/components/molecules/footer";
import { FC, PropsWithChildren, ReactElement, useState } from "react";
import { NavbarMobile } from "@/components/molecules/navbar/navbar-mobile";

const VisiTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="w-full h-full items-center flex flex-col bg-white">
      <NavbarMobile />
      <section className="flex flex-col w-full h-full max-w-[1000px]">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default VisiTemplate;
