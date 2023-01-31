import Link from "next/link";
import Card from "../card/Card";

const CardContainer = ({ data, filteredRegion }) => {
  const filteredByRegion = data.filter(
    (country) => country.region === filteredRegion
  );

  const renderCards = (cardData, index) => {
    return (
      <Link href={"/" + cardData.name} key={index}>
        <Card data={cardData} />
      </Link>
    );
  };

  const checkFilteredRegion = !filteredRegion
    ? data.map(renderCards)
    : filteredByRegion.map(renderCards);

  return <div>{checkFilteredRegion}</div>;
};

export default CardContainer;
