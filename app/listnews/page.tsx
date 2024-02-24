import { NextPage } from "next";
import { ReactElement } from "react";
import { Dummy_News } from "./store";
import Image from "next/image";
import Link from "next/link";

const ListNewsPage: NextPage = (): ReactElement => {
  return (
    <section className="flex flex-col gap-8 py-24 ">
      <h1 className="text-2xl font-semibold">Berita Terkini</h1>
      {Dummy_News.map((x, i) => (
        <Link key={i} href={x.href}>
          <div className="flex gap-8 w-full h-[200px] rounded-md shadow shadow-lg">
            <Image
              alt="news"
              className="w-[300px] rounded-md"
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
