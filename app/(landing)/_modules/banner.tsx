import { FC, ReactElement } from "react";
import Image from "next/image";

export const Banner: FC = (): ReactElement => {
  return (
    <section className="flex justify-between items-center  h-screen">
      <div className="flex flex-col gap-y-6 w-full font-semibold text-5xl text-primary-2">
        <span>Himpunan Perawat</span>
        <span>Holistik Indonesia</span>
        <p className="text-lg font-normal ">
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
