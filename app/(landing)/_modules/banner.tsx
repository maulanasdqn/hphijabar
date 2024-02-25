import { FC, ReactElement } from "react";
import Image from "next/image";

export const Banner: FC = (): ReactElement => {
  return (
    <section className="flex lg:flex-row  flex-col justify-between items-center lg:p-0 p-8 lg:pt-0 pt-32 h-screen">
      <div className="flex flex-col lg:gap-6 gap-2 w-full font-semibold lg:text-5xl text-3xl text-primary-2">
        <span>Himpunan Perawat</span>
        <span>Holistik Indonesia</span>
        <p className="lg:text-lg text-sm font-normal ">
          Himpunan maupun Ikatan perawat yang berada dibawah kepengurusan
          Persatuan Perawat Nasional Indonesia (PPNI) semakin bertambah seiring
          dengan waktu dan keilmuan keperawatan yang berkembang.
        </p>
      </div>
      <div className="flex items-start relative">
        <Image
          width={600}
          height={600}
          className="object-cover"
          alt="bg"
          src="/logo.png"
        />
      </div>
    </section>
  );
};
