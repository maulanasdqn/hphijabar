import { Footer } from "@/components/molecules/footer";
import { FC, PropsWithChildren, ReactElement } from "react";
import { NavbarMobile } from "@/components/molecules/navbar/navbar-mobile";

const HistoryTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="w-full h-full items-center flex flex-col bg-white">
      <NavbarMobile />
      <section className="flex flex-col w-full h-full p-4 max-w-[1000px]">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default HistoryTemplate;
