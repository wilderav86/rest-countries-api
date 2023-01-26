import Image from "next/image";

const Card = ({ data, loading }) => {
  const { name, capital, region, population } = data;
  const { png } = data.flags;

  return (
    <div className="container">
      <Image
        src={png}
        alt="flagImg"
        className="flagImg"
        width={300}
        height={150}
      />
      <div className="infoContainer">
        <h2 className="title">{name}</h2>
        <h4 className="population">Population: {population}</h4>
        <h4 className="region">Region: {region}</h4>
        <h4 className="capital">Capital: {capital}</h4>
      </div>
    </div>
  );
};

export default Card;
