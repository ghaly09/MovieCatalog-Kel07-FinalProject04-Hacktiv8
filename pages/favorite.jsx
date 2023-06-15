import CardMovie from "@/components/Templates/Card/CardMovie";
import { poppins } from "@/lib/fonts";
import React from "react";
import { useSelector } from "react-redux";
import haveNoFavorite from "../assets/img/haveNoFavorite.png";
import Image from "next/image";

export default function Favorite() {
  const { saved, total } = useSelector((state) => state.favorite);

  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-between ${poppins.className}`}
    >
      {" "}
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Your Favorites
          </h1>
          <h3>Here what you love and interest</h3>
        </div>

        {saved.length === 0 ? (
          <div className="flex flex-col items-center py-4">
            <Image
              src={haveNoFavorite}
              width={300}
              height={300}
              priority={true}
              alt="not-found"
            />
            <h3 className="font-bold text-xl py-4">
              Oops! You have no favorite yet!
            </h3>
          </div>
        ) : (
          <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5">
            {saved?.map((item) => (
              <CardMovie
                urlImage={item.urlImage}
                title={item?.title}
                year={item?.year}
                rating={item?.rating}
                id={item?.id}
                saved={item?.save}
                key={item?.id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
