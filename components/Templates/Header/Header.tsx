import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-center sticky top-0 z-30 pb-2 md:pb-0 md:h-[60px] w-full shadow-md backdrop-blur-xl">
      <Navbar />
    </header>
  );
};
