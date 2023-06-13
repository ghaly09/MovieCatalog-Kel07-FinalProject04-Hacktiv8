import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  const { search } = router.query;
  return <div className="font-bold text-center mt-20">{search}</div>;
}
