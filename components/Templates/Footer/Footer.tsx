import React from "react";
import Logo from "@/components/Atoms/logo";
import FooterLink from "@/components/Atoms/footer-link";

export default function Footer() {
  return (
    <footer className="sm:pt-24 pb-12 mx-2 border-t-2 border-primary relative max-w-[1500px] lg:w-[1200px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 justify-between flex-wrap">
          <div className="h-[50px] w-[50px] lg:w-80 py-16 brightness-150 hover:animate-pulse">
            <Logo />
          </div>
          <div className="flex gap-14 lg:gap-0">
            <div className="mb-12 w-auto lg:mx-14 lg:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-primary">
                Resource
              </h3>
              <ul className="text-primary flex flex-col">
                <li>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mb-3 inline-block text-lg hover:text-[#00A8A3] transition duration-300 ease-in-out hover:before:mr-1"
                  >
                    Next.Js
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mb-3 inline-block text-lg hover:text-[#00A8A3] transition duration-300 ease-in-out hover:before:mr-1"
                  >
                    TailwindCSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.omdbapi.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mb-3 inline-block text-lg hover:text-[#00A8A3] transition duration-300 ease-in-out hover:before:mr-1"
                  >
                    OMDbAPI
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-auto lg:mx-14 lg:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-primary">
                Navigation
              </h3>
              <ul className="text-primary">
                <FooterLink text={"Home"} link={"/"} />
                <FooterLink text={"Movie"} link={"/movie"} />
                <FooterLink text={"Series"} link={"/series"} />
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-t pt-10 border-primary text-center">
          <h2 className={`text-lg font-semibold`}>
            Copyright by Kelompok 07{" "}
            <span className="text-orange-500 text-lg">Hacktiv8</span>
          </h2>
        </div>
      </div>
    </footer>
  );
}
