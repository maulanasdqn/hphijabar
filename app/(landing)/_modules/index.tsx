import { FC, Fragment, ReactElement } from "react";
import { Banner } from "./banner";
import { About } from "./about";
import { News } from "./news";
import { Tesimoni } from "./testimoni";

export const LandingModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <Banner />
      <About />
      <Tesimoni />
      <News />
    </Fragment>
  );
};
