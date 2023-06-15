import { SearchHome } from "@/components/Molecules/search-Home";
import { TabsSortBy } from "@/components/Molecules/tabsSortBy";
import baseAPI from "@/services/API/Base-API";
import axios from "axios";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home({ dataTrending, dataPopular, dataUpcoming }) {
  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-between ${poppins.className}`}
    >
      <div className="container grid items-center pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4">
            Welcome.
            <br className="hidden sm:inline" />
            Millions of movies, TV shows and people to discover. <br /> Explore
            now.
          </h1>
          <SearchHome />
        </div>

        <TabsSortBy
          dataTrending={dataTrending}
          dataPopular={dataPopular}
          dataUpcoming={dataUpcoming}
        />
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  try {
    const responseTrending = await axios.request(
      baseAPI(`movie/now_playing?language=en-US&page=1`)
    );
    const responsePopular = await axios.request(
      baseAPI(`movie/popular?language=en-US&page=1`)
    );
    const responseUpcoming = await axios.request(
      baseAPI(`movie/upcoming?language=en-US&page=1`)
    );
    const dataTrending = responseTrending.data.results;
    const dataPopular = responsePopular.data.results;
    const dataUpcoming = responseUpcoming.data.results;

    return {
      props: {
        dataTrending,
        dataPopular,
        dataUpcoming,
      },
    };
  } catch (error) {
    console.log("errorFetchingHomeAPI", error);
    return {
      props: {
        dataTrending: [],
        dataPopular: [],
        dataUpcoming: [],
      },
    };
  }
}
