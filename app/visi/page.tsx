import { NextPage } from "next";
import { ReactElement } from "react";

const VisiPage: NextPage = (): ReactElement => {
  return (
    <section className="flex flex-col gap-12 w-full h-full py-24 justify-center items-center">
      <h1 className="text-primary-2 text-3xl font-bold">Visi & Misi</h1>
      <div className="grid grid-cols-2 gap-[120px] text-white font-bold text-xl">
        <div className="flex flex-col gap-4 w-[500px] h-[300px] justify-center items-center px-6 bg-primary rounded-md ">
          <h1>Visi :</h1>
          <p className="text-center">
            {'"'} Menjadi organisasi profesi yang handal, yang disayangi
            anggota, dicintai pemerintah dan disegani organisasi lain {'"'}
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[500px] h-[300px] justify-center text-sm px-6 bg-primary-2 rounded-md">
          <h1>Misi :</h1>
          <div className="flex flex-col gap-1 ">
            <span>
              1. Penguatan kepengurusan pada setiap level dan badan kelengkapan{" "}
            </span>
            <span>
              2. Mengupayakan dan mengutamakan kepentingan anggota dalam
              pelaksanaan
            </span>
            <span>
              3. Membangun jejaring yang luas dan efektif dalam melaksanakan
              peran.
            </span>
            <span>
              4. Bekerjasama dan berkoordinasi dengan pemerintah dalam kebijakan
              keperawatan.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiPage;
