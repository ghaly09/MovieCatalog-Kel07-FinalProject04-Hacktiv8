import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchDataSearch } from "@/redux/slices/slice-search";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function SearchHome() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(
      fetchDataSearch(
        `search/movie?query=${value.toLowerCase()}&include_adult=false&language=en-US&page=1`
      )
    );
    router.push(`/${value.toLowerCase()}`);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      dispatch(
        fetchDataSearch(
          `search/movie?query=${value.toLowerCase()}&include_adult=false&language=en-US&page=1`
        )
      );
      router.push(`/${value.toLowerCase()}`);
    }
  };

  return (
    <div className="flex w-full items-center space-x-2 mt-5">
      <Input
        type="text"
        placeholder="Search for Movie, Series, or more..."
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={(event) => {
          handleEnter(event, value);
        }}
      />
      <Button type="submit" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
