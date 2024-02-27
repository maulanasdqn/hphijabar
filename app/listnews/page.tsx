"use client";
import { NextPage } from "next";
import { ReactElement, useEffect } from "react";
import { Dummy_News } from "./store";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const ListNewsPage: NextPage = (): ReactElement => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col gap-8 lg:py-24 p-4 lg:p-0">
      <h1 className="text-2xl font-semibold">Berita Terkini</h1>
      {Dummy_News.map((x, i) => (
        <Link key={i} href={`/listnews/${x.slug}`}>
          <div
            data-aos="fade-right"
            className="flex lg:flex-row flex-col gap-8 w-full lg:h-[200px] h-auto rounded-md shadow shadow-lg"
          >
            <Image
              alt="news"
              className="lg:w-[300px] w-full rounded-md"
              src={x.src}
              width={400}
              height={250}
            />
            <div className="flex flex-col gap-2 w-full h-full justify-center px-4">
              <h1 className="font-bold text-xl">{x.title}</h1>
              <p className="text-sm text-jutisfy line-clamp-4">{x.detail}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ListNewsPage;
