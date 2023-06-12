import React from "react";

export default function NavSearch({ value, onChange, onKeyPress }) {
  return (
    <div className="border-2 sm:py-1 sm:px-2 rounded-full bg-white text-sm">
      <i className="fas fa-search relative" aria-hidden="true"></i>
      <input
        className="py-1 px-2 focus:outline-none relative w-40 sm:full"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
