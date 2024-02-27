"use client";
import { NextPage } from "next";
import { ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HistoryPage: NextPage = (): ReactElement => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col gap-8 w-full h-full bg-white items-center py-24">
      <h1 className="text-3xl text-primary-2 font-bold">
        Sejarah PPNI (Persatuan Perawat Nasional Indonesia)
      </h1>
      <div
        data-aos="fade-right"
        className="grid lg:grid-cols-2 lg:gap-[120px] gap-8 text-primary-2 text-justify text-lg text-semibold"
      >
        <div className="flex flex-col gap-4 lg:w-[500px] w-full h-auto rounded-md">
          <span>
            Persatuan Perawat Nasional Indonesia (PPNI) lahir pada tanggal 17
            Maret 1974. Kebulatan tekad spirit yang sama dicetuskan oleh
            perintis perawat bahwa tenaga keperawatan harus berada pada wadah
            /organisasi profesi perawat Indonesia. Pada masa itu sebelum tahun
            1974 organisasi perawat di Indonesia sudah berkembang
            peOrganisasi-organisasi perawat saat itu mengadakan pertemuan yang
            diantranya dihadiri oleh IPI, PPI dam PDKI dan diantaranya yang
            hadir adalah Ojo Radiat, HB. Barnas dan Drs. Maskoed Soerjasumantri
            sebagai pimpinan siding dan sepakat untuk melakukan fusi organisasi
            dan menyatukan diri dalam satu wadah organisasi yang saat itu masih
            bernama Persatuan Perawat Nasional.{" "}
          </span>
          <span>
            Pengabungan atau fusi organisasi perawat tersebut dilakukan di Ruang
            Demontration Jl. Prof Eykman Bandung No.34 Bandung Jawa Barat, sejak
            saat itu Tanggal 17 Maret 1974 disetujui dan dilakukan pernyataan
            bersama terbentuknya Persatuan Perawat Nasional Indonesia, serta
            membentuk suatu kepanitian untuk mempersiapkan Kongres Pertama yang
            dilangsungkan pada tahun 1976.sat sesuai dengan zamannya, sejak
            zaman penjajahan perawat Indonesia sudah ada seiring dengan adanya
            Rumah Sakit, yaitu: Residen Vpabst (1819) dibatavia saat itu berubah
            menjadi Stadsverband (1919) dan berubah menjadi CBZ (Central
            Burgerlijke Zieken Inrichting) di daerah Salemba yang saat ini
            menjadi RSCM. Saat itu perawat sudah memiliki
            perkumpulan-perkumpulan sebagai wadah organisasi perawat dan dapat
            menjalankan pergerakan dalam menentukan martabat profesi perawat.
            Ketika itu terdapat beberapa organisasi diantaranya; Perkumpulan
            Kaum Verpleger fster Indonesia (PKVI), Persatuan Djuru Kesehatan
            Indonesia (PDKI), Persatuan Perawat Indonesia (PPI), Ikatan Perawat
            Indonesia (IPI).
          </span>
        </div>
        <div className="flex flex-col gap-4 lg:w-[500px] w-full h-auto">
          <span>
            Organisasi-organisasi perawat saat itu mengadakan pertemuan yang
            diantranya dihadiri oleh IPI, PPI dam PDKI dan diantaranya yang
            hadir adalah Ojo Radiat, HB. Barnas dan Drs. Maskoed Soerjasumantri
            sebagai pimpinan siding dan sepakat untuk melakukan fusi organisasi
            dan menyatukan diri dalam satu wadah organisasi yang saat itu masih
            bernama Persatuan Perawat Nasional. Pengabungan atau fusi organisasi
            perawat tersebut dilakukan di Ruang Demontration Jl. Prof Eykman
            Bandung No.34 Bandung Jawa Barat, sejak saat itu Tanggal 17 Maret
            1974 disetujui dan dilakukan pernyataan bersama terbentuknya
            Persatuan Perawat Nasional Indonesia, serta membentuk suatu
            kepanitian untuk mempersiapkan Kongres Pertama yang dilangsungkan
            pada tahun 1976.
          </span>
          <span>
            PPNI berkomitmen untuk memberikan perlindungan bagi masyarakat dan
            profesi keperawatan dengan menyusun RUU keperawatan yang saat ini
            terus diperjuangkan untuk disyahkan menjadi undang-undang. Dalam
            usianya yang tergolong usia produktif, PPNI telah tumbuh untuk
            menjadi organisasi yang mandiri. PPNI saat ini berproses pada
            kematangan organisasi dan mempersiapkan anggotanya dalam berperan
            nyata pada masyarakat dengan memperkecil kesenjangan dalam pelayanan
            kesehatan, mempermudah masyarakat dalam mendapatkan akses pelayanan
            kesehatan, serta mendapatkan kesamaan pelayanan yang berkualitas
            (closing the gap; increasing acces and equity). dan selanjutnya PPNI
            bersama anggotanya akan besama mengkawal profesi keperawatan
            Indonesia pada arah yang benar, sehingga profesi keperawatan dapat
            mandiri dan bermartabat dan bersaing secara Nasional dan
            International.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HistoryPage;
