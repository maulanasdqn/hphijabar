export const Dummy_News: Array<TNews> = [
  {
    src: "/news1.png",
    title: "Kunjungan ke Labschool, Menpora Coba Kipin ATM",
    slug: "news1",
    detail:
      "Infrastruktur digital menjadi bagian penting untuk mendukung terciptanya sekolah digital. Sebagai salah satu sekolah yang sadar akan pentingnya peran teknologi untuk menunjang pembelajaran,Labschool menggunakan Kipin sebagai pendamping siswa maupun guru untuk proses belajar-mengajar. Hal tersebut juga menjadi perhatian Zainul Amali, Menteri Pemuda dan Olahraga (Menpora), yang pada 16 Maret 2022 berkunjung ke Labschool dalam agenda",
    href: "https://hphijabar.com/hello-world-copy/",
  },
  {
    src: "/news2.png",
    title:
      "Sosialisasi Bahaya Berkendara Bagi Anak Remaja Melalui Komik Literasi di Majalah Dinding Sekolah",
    slug: "news2",
    detail:
      "Pelanggaran lalu lintas yang dilakukan oleh anak di bawah umur marak terjadi. Bahkan berdasarkan hasil Operasi Zebra serentak tahun 2018, pengendara sepeda motor di bawah umur mendominasi pelanggaran (beritagar.id). Rata-rata adalah pelajar SMP dan SMA yang tertangkap saat pulang-pergi sekolah. Menyikapi hal ini, Pendidikan.id adakan sosialisasi peraturan berkendara bagi pelajar SMP Muhammadiyah 4 Surabaya pada",
    href: "https://hphijabar.com/hello-world-copy-2-copy/",
  },
  {
    src: "/news3.png",
    title: "Darurat Buku di Indonesia? Ini Solusinya!",
    slug: "news3",
    detail:
      "Sumber: Jawa Pos – Selasa, 17 Mei 2022Judul “Darurat Buku di Indonesia” tersebut muncul di sebuah media cetak koran harian nasional pada 17 Mei 2022 sebagai refleksi Hari Perpustakaan dan Buku Nasional. Diluncurkannya Hari Buku Nasional Indonesia dimaksudkan agar ekosistem perbukuan di Indonesia bisa melaju pesat. Namun tantangan dunia perbukuan di Indonesia ini akan semakin",
    href: "https://hphijabar.com/darurat-buku-di-indonesia-ini-solusinya/",
  },
];

export const fetchNewsBySlug = (slug: string) => {
  return Dummy_News.find((news) => news.slug === slug) || null;
};
