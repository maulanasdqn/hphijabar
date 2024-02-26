"use client";
import { FC, ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About: FC = (): ReactElement => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      data-aos="zoom-in-up"
      className="flex h-full justify-center items-center lg:pt-0 pt-[200px]"
    >
      <div className="flex flex-col gap-6 w-full lg:h-[300px] h-[500px] bg-primary-2 rounded-md text-white justify-center p-6 my-8">
        <h1 className="text-3xl font-bold">Tentang Kami</h1>
        <p className="line-clamp-8">
          HPHI yang merupakan paling muda dari seluruh himpunan/ikatan dibawah
          PPNI ini lahir pada tanggal 20 Oktober 2018 di Denpasar, Bali. HPHI
          adalah wadah bagi perawat yang berkecimpung di dunia keperawatan
          komplementer dan alternatif. Himpunan ini menjawab perkembangan dan
          tantangan keilmuan keperawatan yang telah diamanahkan di UU
          keperawatan Nomor 38 Tahun 2014 pasal 30 ayat 2 huruf m. Saat ini HPHI
          telah menyelesaikan rapat program kerja untuk 5 tahun ke depan dan
          membuat PoA tahun 2019, serta menyelesaikan 4 dari 15 kurikulum
          kompetensi yakni tentang bahan alam/natural product, cupping
          intervention, hipnonursing, dan acupoint.
        </p>
      </div>
    </section>
  );
};
function seEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
