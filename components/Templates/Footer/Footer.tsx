import React from "react";

export default function Footer() {
  return (
    <footer className="mb-3 grid text-center">
      <a
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`text-lg font-semibold`}>
          Copyright by Kelompok 07{" "}
          <span className="text-orange-500 text-lg">Hacktiv8</span>{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>
    </footer>
  );
}
