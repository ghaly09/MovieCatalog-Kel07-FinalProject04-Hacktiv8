// const Data = (query) => {
//   return `https://www.omdbapi.com/?${query}&apikey=759cc89e`;
// };

// export default Data;
import baseURL from "./Base-URL";

const baseAPI = (query) => {
  return {
    method: "GET",
    url: baseURL(query),
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzgxZTk0ZjgwMzFmMTkyMTRjMWZiOTAzOWFkNjJlNSIsInN1YiI6IjY0OGFlMjM2MjYzNDYyMDBjYTE4OTkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VsnuYVFa-ADbIZwMRNtnlWvXWkuo67b7zuwhjYYeFfY",
    },
  };
};

export default baseAPI;
