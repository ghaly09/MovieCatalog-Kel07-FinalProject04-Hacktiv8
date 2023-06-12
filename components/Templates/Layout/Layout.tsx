import React, { ReactNode } from "react";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="max-w-[1500px] w-[1200px]">
        <div>{children}</div>
      </div>
      <Footer />
    </main>
  );
};
