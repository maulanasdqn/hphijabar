import { FC, ReactElement } from "react";
import Image from "next/image";

export const LandingModule: FC = (): ReactElement => {
  return (
    <section className="flex justify-between py-14 h-screen">
      <div className="flex flex-col gap-y-6">
        <span className="font-semibold text-5xl text-white">
          Himpunan Perawat
        </span>
        <span className="font-semibold text-5xl text-white">
          Holistik Indonesia
        </span>
      </div>
      <div className="flex items-start relative">
        <Image
          width={600}
          height={600}
          className="object-cover"
          alt="bg"
          src="/bg.svg"
        />
      </div>
    </section>
  );
};
