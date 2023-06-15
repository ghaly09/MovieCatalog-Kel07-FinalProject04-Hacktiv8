import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

export default function Detail({ dataDetail }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useSelector((state) => state.detail);

  return (
    <div>
      <h3>Title {id}</h3>
      <h3>{data.imdb_id}</h3>
      <h3>Title</h3>
    </div>
  );
}
