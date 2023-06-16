import { fetchDataDetail } from "@/redux/slices/slice-detail";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "@/redux/slices/slice-favorite";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardMovie = ({ urlImage, year, title, rating, id, type, saved }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const savedID = useSelector((state) => state.favorite.saved);
  const [save, setSave] = useState("fa-regular");

  const existingMovie = savedID.find((movie) => movie.id === id);

  const src = `${
    urlImage ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  const payload = { urlImage, year, title, rating, id };
  const date = new Date(year);
  const dateFormat = { month: "long", day: "numeric", year: "numeric" };
  const releaseDate = date.toLocaleDateString("en-US", dateFormat);

  const handleFavorite = () => {
    if (save == "fa-regular" && !existingMovie) {
      setSave("fa-solid");
      dispatch(ADD_FAVORITE({ ...payload, save: "fa-solid" }));
    } else if (saved === "fa-solid" || existingMovie?.save) {
      setSave("fa-regular");
      dispatch(REMOVE_FAVORITE(id));
    }
  };

  const handleDetail = () => {
    type == "tv" || type == "series"
      ? dispatch(fetchDataDetail(`tv/${id}?language=en-US`))
      : dispatch(fetchDataDetail(`movie/${id}?language=en-US`));

    router.push(`/details/${id}`);
  };

  return (
    <div className="relative ease-in-out duration-300 hover:scale-110 hover:cursor-pointer">
      <div className="flex justify-center" onClick={handleDetail}>
        <Image
          className="lg:w-full w-60 md:h-[400px] lg:h-96 flex-1 object-cover rounded-xl"
          loader={() => src}
          src={src}
          width={100}
          height={100}
          priority={true}
          alt="movie-picture-not-found"
        />
      </div>
      <div className="absolute top-5 left-5 bg-gradient-to-r from-cyan-500 to-[#00A8A3] rounded-full">
        <div className="flex flex-row items-center py-1 px-[10px]">
          <span className="text-yellow-500 text-sm">
            <i className="fa-solid fa-star" aria-hidden="true"></i>
          </span>
          <span className="text-white text-sm ml-1">
            {rating.toFixed(1) == 0 ? "N/A" : rating.toFixed(1)}
          </span>
        </div>
      </div>
      <button
        className="absolute top-5 right-5 bg-white hover:scale-150 duration-200 rounded-full"
        onClick={handleFavorite}
      >
        <i
          className={`${
            existingMovie ? existingMovie?.save : save
          } fa-heart text-red-500 hover:scale-150 duration-200 p-2`}
          aria-hidden="true"
        ></i>
      </button>
      <div className="flex flex-col py-4 ml-4 flex-1">
        <h4 className="font-semibold text-[20px]">{title}</h4>
        <p className="text-sm text-black">
          {year === undefined ? " " : releaseDate}
        </p>
      </div>
    </div>
  );
};

export default CardMovie;
