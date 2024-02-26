"use client";
import { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/navigation";

const DetailNewsPage: NextPage = (): ReactElement => {
  const router = useRouter();
  return (
    <section className="bg-white">
      <h1></h1>
    </section>
  );
};

export default DetailNewsPage;
