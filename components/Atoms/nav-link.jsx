import Link from "next/link";
import React from "react";

export default function NavLink({ text, link }) {
  return (
    <Link
      className={`font-semibold text hover:text-[#00A8A3] hover:border-b-4 hover:border-[#00A8A3] px-3 py-4 
          ActiveNav`}
      href={link}
    >
      {text}
    </Link>
  );
}
