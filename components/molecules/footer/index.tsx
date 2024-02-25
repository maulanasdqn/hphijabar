import Link from "next/link";
import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="w-full bottom-0 h-[180px] bg-primary-2 lg:p-16 p-8 lg:px-40 text-white">
      <h1 className="font-bold text-2xl py-2">Sosial Media Kami</h1>
      <Link href="https://www.instagram.com/hphi_jabar/">
        <p>Instagram : hphi_jabar</p>
      </Link>

      <Link href="https://www.youtube.com/channel/UCkRrUMIiAxSig4Ea84kUNWw">
        <p>Youtube : @himpunanperawatholistikind4190</p>
      </Link>
    </footer>
  );
};
