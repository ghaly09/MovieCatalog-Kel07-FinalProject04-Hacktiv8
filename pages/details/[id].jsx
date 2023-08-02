import { BadgeGenre } from "@/components/Atoms/badge-genre";
import CardMovie from "@/components/Templates/Card/CardMovie";
import Image from "next/image";
import { fontSans } from "@/lib/fonts";
import { useRouter } from "next/router";
import SkeletonDetail from "@/components/Molecules/skeletonDetail";
import React from "react";
import { useSelector } from "react-redux";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useSelector((state) => state.detail);

  const src = `${
    `https://image.tmdb.org/t/p/w500${data?.backdrop_path}` ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  const currentDate = new Date(data?.release_date ?? data?.first_air_date);
  const year = currentDate.getFullYear();

  return (
    <div className={`mt-8 mb-5 ${fontSans.className}`}>
      {loading === true ? (
        <SkeletonDetail />
      ) : (
        <div className="relative">
          <Image
            className="lg:w-full w-screen h-[1000px] md:h-[400px] lg:h-[500px] flex-1 object-cover md:rounded-xl"
            loader={() => src}
            src={src}
            width={100}
            height={100}
            priority={true}
            alt="movie-picture-not-found"
          />
          <div className="absolute top-0 lg:w-full md:w-60 md:h-[400px] lg:h-[500px] rounded-xl bg-black opacity-50"></div>
          <div className="flex flex-row justify-center w-screen md:w-[285px] absolute top-[50px] md:left-32">
            <div className="w-[250px] md:w-[285px]">
              <CardMovie
                urlImage={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                title={undefined}
                year={undefined}
                rating={data?.vote_average}
                id={data?.id}
                key={data?.id}
                saved={undefined}
              />
            </div>
          </div>
          <div className="absolute bottom-[100px] md:top-[50px] left-10 right-10 md:right-0 md:left-[460px] font-bold text-3xl text-white">
            {data?.title ?? data?.name}{" "}
            <span className="font-normal text-slate-200">({year})</span>
            <div className="flex flex-row gap-1 mt-3">
              <p className="text-lg font-light border-[1px] h-[28px] w-[29px] text-center ">
                18
              </p>
              {data?.genres.map((genre) => (
                <BadgeGenre text={genre?.name} />
              ))}
            </div>
            <div className="flex flex-row font-semibold items-center mt-10">
              <span className="text-yellow-400 text-2xl">
                <i className="fa-solid fa-star" aria-hidden="true"></i>
              </span>
              <span className="text-white text-2xl ml-1">
                {data?.vote_average.toFixed(1) == 0
                  ? "N/A"
                  : data?.vote_average.toFixed(1)}{" "}
                | Score
              </span>
            </div>
            <h3 className="text-xl font-normal opacity-80 italic mt-7 mb-2">
              {data?.tagline}
            </h3>
            <h3 className="text-xl sm:text-2xl font-semibold mt-3 mb-2">
              Overview
            </h3>
            <p className="text-[13px] sm:text-[16px] leading-5 font-normal pr-5">
              {data?.overview ?? "Haven't given overview yet."}
            </p>
          </div>
          <p className="absolute bottom-16 right-5 text-white">
            Production Companies:
          </p>
          <div className="flex flex-row gap-1 absolute bottom-5 right-3 md:right-5 px-3 md:px-0">
            {data?.production_companies.map((logo) => (
              <div className="flex justify-center bg-white p-1">
                <Image
                  className="max-w-[50px] h-[25px] rounded-sm"
                  loader={() =>
                    `https://image.tmdb.org/t/p/w500${logo?.logo_path}`
                  }
                  src={`https://image.tmdb.org/t/p/w500${logo?.logo_path}`}
                  width={40}
                  height={20}
                  priority={true}
                  alt="logo-companies"
                />{" "}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
