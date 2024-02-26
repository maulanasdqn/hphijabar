"use client";
import { FC, Fragment, ReactElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

type TNews = {
  src: string;
  detail: string;
  href: string;
};

const Dummy_News: Array<TNews> = [
  {
    src: "/news1.png",
    detail: "Kunjungan ke Labschool, Menpora Coba Kipin ATM",
    href: "https://hphijabar.com/hello-world-copy/",
  },
  {
    src: "/news2.png",
    detail:
      "Sosialisasi Bahaya Berkendara Bagi Anak Remaja Melalui Komik Literasi di Majalah Dinding Sekolah",
    href: "https://hphijabar.com/hello-world-copy-2-copy/",
  },
  {
    src: "/news3.png",
    detail: "Darurat Buku di Indonesia? Ini Solusinya!",
    href: "https://hphijabar.com/darurat-buku-di-indonesia-ini-solusinya/",
  },
];

export const News: FC = (): ReactElement => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="pb-20 lg:p-0 p-8">
      <div className="flex w-full justify-between">
        <span className="text-primary-2 font-semibold lg:text-3xl text-xl pt-16">
          Berita <span className="text-white">Terkini</span>
        </span>

        <span className="text-black font-semibold lg:text-md text-xs lg:pt-20 pt-16">
          <Link href="/listnews">Lihat Selengkapnya...</Link>
        </span>
      </div>
      <div className=" py-1 w-[100px] lg:ml-[110px] bg-warning rounded-md"></div>
      <div className="grid lg:grid-cols-3 gap-8 my-6">
        {Dummy_News.map((x, i) => (
          <Link key={i} href={x.href}>
            <div
              data-aos="fade-right"
              className="w-full h-full bg-white rounded-md"
            >
              <Image
                alt="news"
                className=""
                src={x.src}
                width={400}
                height={250}
              />
              <h1 className="text-black font-semibold p-4">{x.detail}</h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
