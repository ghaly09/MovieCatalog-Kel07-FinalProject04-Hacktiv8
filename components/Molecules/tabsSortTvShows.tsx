import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import CardMovie from "../Templates/Card/CardMovie";

interface Types {
  dataTvShows: [object];
  dataThisWeek: [object];
  type: string;
}

export function TabsSortTvShows({ dataTvShows, dataThisWeek, type }: Types) {
  const [data, setData] = React.useState(dataTvShows);
  const [colorTrend, setColorTrend] = React.useState("");
  const [colorFire, setColorFire] = React.useState("");

  return (
    <section>
      <Tabs defaultValue="This Day" className="max-w-[400px] mb-4 mt-16">
        <TabsList className="grid w-full grid-cols-2 h-[50px]">
          <TabsTrigger
            className="h-[38px]"
            value="This Day"
            onClick={() => {
              setData(dataTvShows);
              setColorTrend("text-[#D1512D]");
              setColorFire("");
            }}
          >
            <i
              className={`fa-solid fa-pizza-slice ${colorTrend} pr-2`}
              aria-hidden="true"
            ></i>{" "}
            This Day
          </TabsTrigger>
          <TabsTrigger
            className="h-[38px]"
            value="This Week"
            onClick={() => {
              setData(dataThisWeek);
              setColorFire("text-[#F5D97E]");
              setColorTrend("");
            }}
          >
            <i
              className={`fa-solid fa-bolt-lightning ${colorFire} pr-2`}
              aria-hidden="true"
            ></i>{" "}
            This Week
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-5">
        {data?.map((film: any) => (
          <CardMovie
            urlImage={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
            title={film?.name}
            year={film?.first_air_date}
            rating={film?.vote_average}
            id={film?.id}
            type={type}
            key={film?.id}
            saved={undefined}
          />
        ))}
      </div>
    </section>
  );
}
