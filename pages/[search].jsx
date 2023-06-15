import SkeletonLoading from "@/components/Molecules/skeletonLoading";
import CardMovie from "@/components/Templates/Card/CardMovie";
import { poppins } from "@/lib/fonts";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import notFoundImg from "../assets/img/not-found.png";

export default function Search() {
  const { data, loading } = useSelector((state) => state.search);
  const router = useRouter();
  const { search } = router.query;

  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-between ${poppins.className}`}
    >
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2 mb-3">
          <h1 className="text-3xl capitalize font-extrabold leading-tight tracking-tighter md:text-4xl">
            {search}
          </h1>
          <h3>
            Search and discover hundreds of Movies, FIlms, and Series, Up to
            date and gow your imaginations.
          </h3>
        </div>

        {loading === true ? (
          <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5">
            {[0, 1, 2, 3, 4, 5, 6, 7].map(() => (
              <SkeletonLoading />
            ))}{" "}
          </div>
        ) : data.results.length === 0 ? (
          <div className="flex flex-col items-center">
            <Image
              src={notFoundImg}
              width={300}
              height={300}
              priority={true}
              alt="not-found"
            />
            <h3 className="font-bold text-xl">Oops! Your Movie not Found!</h3>
          </div>
        ) : (
          <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5">
            {data.results?.map((item) => (
              <CardMovie
                urlImage={
                  item?.poster_path == null
                    ? "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
                    : `https://image.tmdb.org/t/p/w500${item?.poster_path}`
                }
                title={item?.title}
                year={item?.release_date}
                rating={item?.vote_average}
                id={item?.id}
                key={item?.id}
                saved={item?.save}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
