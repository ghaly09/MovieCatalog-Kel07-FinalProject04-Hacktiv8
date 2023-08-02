import React from "react";

export default function NavSearch({ value, onChange, onKeyPress }) {
  return (
    <div className="border-2 sm:py-1 px-2 rounded-full bg-white text-sm">
      <i className="fas fa-search relative" aria-hidden="true"></i>
      <input
        className="py-1 px-2 focus:outline-none relative w-[90px] sm:w-40"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
