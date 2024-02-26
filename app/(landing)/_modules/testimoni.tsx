"use client";
import { FC, ReactElement, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Testimony = [
  {
    name: "Ahmad Setiawan",
    detail: "Dengan adanya himpunan ini perawat memiliki banyak koneksi",
  },
  {
    name: "Erna Irawan",
    detail: "Makin banyak teman diskusi",
  },
  {
    name: "Firhat Junaedi",
    detail: "Organisasi ini menambah kegiatan seru dan menampung aspirasi",
  },
];

export const Tesimoni: FC = (): ReactElement => {
  const getInitials = (name: string): string => {
    const words = name.split(" ");
    return words
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="flex flex-col gap-6 h-[500px] justify-center items-center text-primary-2 font-bold text-3xl">
      <h1>
        {'"'} Kata Anggota {'"'}
      </h1>
      <AliceCarousel mouseTracking infinite autoPlay autoPlayInterval={3000}>
        {Testimony.map((testimonial, index) => (
          <div
            key={index}
            className="flex bg-white  h-[250px] w-full rounded-md p-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 rounded-md bg-primary-2 bg-opacity-10 h-full w-full lg:p-16 p-4 items-center">
              <div className="flex lg:w-20 lg:h-20 w-[25px] h-[25px] rounded-full bg-primary items-center justify-center text-white lg:text-2xl text-sm">
                {getInitials(testimonial.name)}
              </div>
              <span className="flex flex-col gap-2 lg:text-lg text-sm text-black font-normal">
                {testimonial.detail}
                <span>
                  <span className="text-end">- {testimonial.name}</span>
                </span>
              </span>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </section>
  );
};
