import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-center sticky top-0 z-30 md:h-[60px] h-[110px] w-full shadow-md backdrop-blur-xl">
      <Navbar />
    </header>
  );
};
