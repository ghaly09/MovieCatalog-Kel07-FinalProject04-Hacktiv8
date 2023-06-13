import Image from "next/image";
import { Poppins } from "next/font/google";
import { useDispatch } from "react-redux";
// import { fetchDataMovie } from "@/redux/slices/slice-search";
import { SearchHome } from "@/components/Molecules/search-Home";
import axios from "axios";
import Data from "@/utils/API/Base-API";
import dataHomePage from "@/utils/Data/homepage";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home({ dataMovies }) {
  const dispatch = useDispatch();

  const handleGetData = () => {
    // dispatch(fetchDataMovie("t=spiderman&plot=full"));
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
        <p>{JSON.stringify(dataMovies)}</p>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  try {
    const dataMovies = await Promise.all(
      dataHomePage.map(async (movie) => {
        const res = await axios.get(Data(`t=${movie}&plot=full`));
        return res.data;
      })
    );

    // console.log(dataMovies);

    return {
      props: {
        dataMovies,
      },
    };
  } catch (error) {
    console.log("errorFetchingAPI", error);
    return {
      props: {
        dataMovies: [],
      },
    };
  }
}
