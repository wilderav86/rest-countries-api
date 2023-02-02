import Image from "next/image";
import styles from "./card.module.scss";

const Card = ({ data }) => {
  const { name, capital, region, population } = data;
  const { png } = data.flags;

  return (
    <div className={styles.container}>
      <Image
        src={png}
        alt="flagImg"
        className="flagImg"
        width={300}
        height={150}
      />
      <div className="infoContainer">
        <h2 className="title">{name}</h2>
        <h4 className="population">
          Population: {population.toLocaleString("en-US")}
        </h4>
        <h4 className="region">Region: {region}</h4>
        <h4 className="capital">Capital: {capital}</h4>
      </div>
    </div>
  );
};

export default Card;
