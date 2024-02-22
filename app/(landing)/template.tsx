import { Navbar } from "@/components/molecules/navbar";
import { FC, PropsWithChildren, ReactElement } from "react";

const LandingTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="w-full h-full items-center flex flex-col bg-gradient-to-r from-primary to-secondary">
      <section className="flex flex-col w-full h-full max-w-[1000px]">
        <Navbar />
        {children}
      </section>
    </main>
  );
};

export default LandingTemplate;
