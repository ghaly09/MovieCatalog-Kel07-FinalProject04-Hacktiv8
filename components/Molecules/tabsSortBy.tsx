import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import CardMovie from "../Templates/Card/CardMovie";

export function TabsSortBy({ dataTrending, dataPopular, dataUpcoming }) {
  const [data, setData] = React.useState(dataTrending);
  const [colorTrend, setColorTrend] = React.useState("");
  const [colorFire, setColorFire] = React.useState("");
  const [colorRocket, setColorRocket] = React.useState("");

  return (
    <section>
      <Tabs defaultValue="trending" className="w-[400px] mb-4 mt-16">
        <TabsList className="grid w-full grid-cols-3 h-[50px]">
          <TabsTrigger
            className="h-[38px]"
            value="trending"
            onClick={() => {
              setData(dataTrending);
              setColorTrend("text-[#00A8A3]");
              setColorFire("");
              setColorRocket("");
            }}
          >
            <i
              className={`fa-solid fa-arrow-trend-up ${colorTrend} pr-2`}
              aria-hidden="true"
            ></i>{" "}
            Trending
          </TabsTrigger>
          <TabsTrigger
            className="h-[38px]"
            value="popular"
            onClick={() => {
              setData(dataPopular);
              setColorFire("text-red-500");
              setColorTrend("");
              setColorRocket("");
            }}
          >
            <i
              className={`fas fa-fire ${colorFire} pr-2`}
              aria-hidden="true"
            ></i>{" "}
            Popular
          </TabsTrigger>
          <TabsTrigger
            className="h-[38px]"
            value="upcoming"
            onClick={() => {
              setData(dataUpcoming);
              setColorRocket("text-blue-500");
              setColorTrend("");
              setColorFire("");
            }}
          >
            <i
              className={`fa-solid fa-rocket ${colorRocket} pr-2`}
              aria-hidden="true"
            ></i>{" "}
            Upcoming
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5">
        {data?.map((film: any) => (
          <CardMovie
            urlImage={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
            title={film?.title}
            year={film?.release_date}
            rating={film?.vote_average}
            id={film?.id}
            key={film?.id}
            saved={undefined}
          />
        ))}
      </div>
    </section>
  );
}
