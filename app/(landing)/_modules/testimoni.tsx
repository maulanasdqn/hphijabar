import { FC, ReactElement } from "react";

export const Tesimoni: FC = (): ReactElement => {
  return (
    <section className="flex flex-col gap-6 h-[500px] justify-center items-center text-primary-2 font-bold text-3xl">
      <h1>
        {'"'} Kata Anggota {'"'}
      </h1>
      <div className="flex bg-white h-[250px] w-full rounded-md p-12">
        <div className="flex gap-6 rounded-md bg-primary-2 bg-opacity-10 h-full w-full p-16 items-center">
          <div className="flex w-20 h-20 rounded-full bg-primary items-center justify-center text-white">
            A
          </div>
          <span className="flex flex-col gap-2 text-lg text-black font-normal">
            {'"'}Dengan adanya himpunan ini perawat memiliki banyak koneksi{'"'}
            <span>
              <span className="text-end">- Ahmad Setiawan</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};
