import useFetch from "@/hooks/useFetch";
import useUrl from "@/hooks/useUrl";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../card/Card";

const CardContainer = () => {
  // const [loading, setLoading] = useState(true);
  // const [allCountriesData, setAllCountriesData] = useState(null);

  const baseUrl = "https://restcountries.com/v2/all";

  const url = useUrl(baseUrl, {
    fields: ["name", "population", "region", "capital", "flags"],
  });

  // const url = useUrl(baseUrl, ["name", "population"]);

  const { loading, apiData } = useFetch(url);
  console.log("loading", loading, "ap8idata", apiData);
  // setAllCountriesData(apiData);
  // setLoading(loading);

  const renderCards = apiData.map((cardData, key) => {
    return (
      <Link href={"/" + cardData.name} key={key}>
        <Card data={cardData} loading={loading} />
      </Link>
    );
  });

  return <>{!loading && renderCards}</>;
};

export default CardContainer;
