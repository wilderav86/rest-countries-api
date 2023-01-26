import { createUrl } from "@/functions/createUrl";
import { fetchApiData } from "@/functions/fetchApiData";
import useFetch from "@/hooks/useFetch";
import useUrl from "@/hooks/useUrl";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../card/Card";

const CardContainer = ({ data }) => {
  console.log(data);
  // const [loading, setLoading] = useState(true);
  // const [allCountriesData, setAllCountriesData] = useState(null);

  const baseUrl = "https://restcountries.com/v2/all";

  const url = useUrl(baseUrl, {
    fields: ["name", "population", "region", "capital", "flags"],
  });
  console.log(url);

  // const { loading, apiData } = useFetch(url);
  // console.log("loading", loading, "ap8idata", apiData);

  const renderCards = data.map((cardData, key) => {
    return (
      <Link href={"/" + cardData.name} key={key}>
        <Card data={cardData} />
      </Link>
    );
  });

  return <>{renderCards}</>;
};

export default CardContainer;
