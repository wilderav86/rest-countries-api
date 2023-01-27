import { useContext, useEffect } from "react";
import Link from "next/link";
import {
  AllCountryContext,
  AllCountryContextProvider,
} from "@/contexts/AllCountryContext";
import Card from "../card/Card";

const CardContainer = ({ data }) => {
  const [allCountryData, setAllCountryData] = useContext(AllCountryContext);

  useEffect(() => {
    setAllCountryData(data);
  }, []);

  console.log("cardcontainer", allCountryData);

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
