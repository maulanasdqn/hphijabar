"use client";
import { NextPage } from "next";
import { ReactElement } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Dummy_News } from "../store";

const DetailNewsPage: NextPage = (): ReactElement => {
  const { slug } = useParams();
  return (
    <section className="flex flex-col bg-white w-full h-full py-4 p-8 lg:p-0 lg:pt-24 pt-24 justify-center">
      <span className="flex text-white lg:text-3xl text-md font-bold bg-primary-2 rounded-md w-full text-center items-center justify-center h-14">
        {Dummy_News.find((news) => news.slug === slug)?.title}
      </span>
      <Image
        alt="news"
        className="w-full h-[400px] "
        src={Dummy_News.find((news) => news.slug === slug)?.src as string}
        width={1000}
        height={1000}
      />
      <p>{Dummy_News.find((news) => news.slug === slug)?.detail}</p>
    </section>
  );
};

export default DetailNewsPage;
