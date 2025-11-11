import { JSX } from "react";

import MainMenu from "./MainMenu";
import TopHeader from "./TopHeader";

export default function Header(): JSX.Element {
  return (
    <header>
      <TopHeader />
      <MainMenu />
    </header>
  );
}
