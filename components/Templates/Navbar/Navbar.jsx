import Logo from "@/components/Atoms/logo";
import NavLink from "@/components/Atoms/nav-link";
import FavButton from "@/components/Molecules/favorite-button";
import NavSearch from "@/components/Molecules/search-nav";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Navbar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handle = (event) => {
    if (event.key === "Enter") {
      router.push(`/${value.toLowerCase()}`);
    }
  };

  return (
    <nav
      className={`flex flex-col md:flex-row justify-between md:items-center max-w-[1500px] lg:w-[1200px] backdrop-blur-xl ${poppins.className}`}
    >
      <div className="flex md:flex-row items-center">
        {/* Logo */}
        <Logo />

        {/* Navbar Link */}
        <NavLink text={"Home"} link={"/"} />
        <NavLink text={"Movie"} link={"/movie"} />
        <NavLink text={"Series"} link={"/series"} />
      </div>

      <div className="flex flex-row items-center justify-center">
        <NavSearch
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          onKeyPress={(event) => {
            handle(event, value);
          }}
        />
        <Link href={"/favorite"}>
          <FavButton />
        </Link>
        <Link href={"/"}>
          <i className="far fa-user-circle text-3xl" aria-hidden="true"></i>
        </Link>
      </div>
    </nav>
  );
};
