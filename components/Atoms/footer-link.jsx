import Link from "next/link";
import React from "react";

export default function FooterLink({ text, link }) {
  return (
    <div className="text-primary flex flex-col">
      <Link
        className={`mb-3 inline-block text-lg hover:text-[#00A8A3] transition duration-300 ease-in-out hover:before:mr-1`}
        href={link}
      >
        {text}
      </Link>
    </div>
  );
}
