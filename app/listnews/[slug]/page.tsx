"use client";
import { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DetailNewsPage: NextPage = (): ReactElement => {
  const router = useRouter();
  return (
    <section className="flex flex-col bg-white w-full h-full py-4 p-8 lg:p-0 pt-24 justify-center">
      <span className="flex text-white lg:text-3xl text-md font-bold bg-primary-2 rounded-md w-full text-center items-center justify-center h-14">
        Kunjungan ke Labschool, Menpora Coba Kipin ATM
      </span>
      <Image
        alt="news"
        className="w-full h-[400px] "
        src="/news3.png"
        width={1000}
        height={1000}
      />
      <p>detail</p>
    </section>
  );
};

export default DetailNewsPage;
