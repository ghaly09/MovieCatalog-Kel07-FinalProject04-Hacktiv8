import Image from "next/image";
import { Poppins } from "next/font/google";
import { useDispatch } from "react-redux";
import { fetchDataMovie } from "@/redux/slices/slice-search";
import { SearchHome } from "@/components/Molecules/search-Home";
import CardMovie from "@/components/Templates/CardMovie/CardMovie";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const dispatch = useDispatch();

  const handleGetData = () => {
    dispatch(fetchDataMovie("s=movie&page=2"));
  };

  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-between ${poppins.className}`}
    >
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Welcome.
            <br className="hidden sm:inline" />
            Millions of movies, TV shows and people to discover. <br /> Explore
            now.
          </h1>
          <SearchHome />
        </div>
        <button
          className="border-2 bg-green-700 text-white rounded-lg"
          onClick={handleGetData}
        >
          Get Data
        </button>
        <div className="flex flex-row justify-between">
          <div className="font-semibold text-[22px] text-black mb-4">
            Movies
          </div>
          <div className="font-semibold text-lg text-black mb-4">See all</div>
        </div>
        <div className="grid grid-rows-1 grid-cols-4 gap-5">
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
          <CardMovie/>
        </div>
      </div>
    </section>
  );
}