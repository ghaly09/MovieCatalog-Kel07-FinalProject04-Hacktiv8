import { SearchHome } from "@/components/Molecules/search-Home";
import { poppins } from "@/lib/fonts";
import baseAPI from "@/services/API/Base-API";
import axios from "axios";
import React from "react";
import { TabsSortTvShows } from "@/components/Molecules/tabsSortTvShows";

export default function Series({ dataTvShows, dataThisWeek }) {
  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-between ${poppins.className}`}
    >
      <div className="container grid items-center pb-8 pt-6 md:py-10 mb-">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4">
            Series
            <br className="hidden sm:inline" />
            Watch and feel the souls <br /> Explore now.
          </h1>
          <SearchHome />
        </div>

        <TabsSortTvShows
          dataTvShows={dataTvShows}
          dataThisWeek={dataThisWeek}
          type={"series"}
        />
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  try {
    const responseTvShows = await axios.request(
      baseAPI(`tv/airing_today?language=en-US&page=1`)
    );
    const responseThisWeek = await axios.request(
      baseAPI(`tv/top_rated?language=en-US&page=1`)
    );

    const dataTvShows = responseTvShows.data.results;
    const dataThisWeek = responseThisWeek.data.results;

    // console.log(dataTvShows);

    return {
      props: {
        dataTvShows,
        dataThisWeek,
      },
    };
  } catch (error) {
    console.log("errorFetchingHomeAPI", error);
    return {
      props: {
        dataTvShows: [],
        dataThisWeek: [],
      },
    };
  }
}
