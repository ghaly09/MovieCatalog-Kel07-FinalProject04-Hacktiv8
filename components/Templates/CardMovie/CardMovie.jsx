import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const CardMovie = ({ urlImage, year, title, rating }) => {
  const src = `${
    urlImage ??
    "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
  }`;

  return (
    <div className="w-full relative  ease-in-out duration-300 hover:scale-110 hover:cursor-pointer">
      <Image
        // className=" object-fill max-w-full h-[160px] rounded-t-lg"
        className="w-full h-96 flex-1 object-cover rounded-xl"
        loader={() => src}
        src={src}
        width={100}
        height={100}
        priority={true}
        alt="movie-picture"
      />
      <div className="absolute top-5 left-5 bg-gradient-to-r from-cyan-500 to-[#00A8A3] rounded-full">
        <div className="flex flex-row items-center py-1 px-[10px]">
          <span className="text-yellow-500 text-sm">
            <AiFillStar />
          </span>
          <span className="text-white text-sm ml-1">{rating}</span>
        </div>
      </div>
      <div className="flex flex-col py-4 ml-4 flex-1">
        <h4 className="font-semibold text-[20px]">{title}</h4>
        <p className="text-sm text-black">{year}</p>
      </div>
    </div>
  );
};

export default CardMovie;
