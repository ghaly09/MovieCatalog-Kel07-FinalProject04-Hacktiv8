import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { fontMono } from "@/lib/fonts";

export default function Logo() {
  return (
    <Link href="/" className={`flex items-center space-x-2 mr-5`}>
      <div className="relative hover:text-[#00A8A3] duration-100">
        <Icons.clip className="absolute bottom-0 h-[35px] w-[35px]" />
        <Icons.cat className="h-[35px] w-[35px]" />
      </div>
      <div className="flex flex-col justify-center">
        <span className={`font-bold leading-3`}>MovieCat</span>
        <span className={`font-light text-xs ${fontMono.className}`}>
          Movie<span className="pl-[2px]">Catalog</span>
        </span>
      </div>
    </Link>
  );
}
