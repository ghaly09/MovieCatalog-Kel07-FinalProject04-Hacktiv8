import React from "react";

export default function FavButton() {
  return (
    <button className="flex items-center gap-1 font-bold mx-4 p-2 border-2 rounded-full text-white bg-gradient-to-r from-cyan-500 to-[#00A8A3] hover:from-red-600 hover:to-red-600 transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-100">
      <i className="fas fa-heart " aria-hidden="true"></i>
      <p>Favorites</p>
    </button>
  );
}
