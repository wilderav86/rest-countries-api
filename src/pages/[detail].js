import Link from "next/link";

const { default: Image } = require("next/image");

export const getServerSideProps = async (context) => {
  const url = `https://restcountries.com/v2/name/${context.params.detail}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: { params: context.params, data: data.at(0) },
  };
};

const Detail = ({ params, data }) => {
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    flags: { png },
  } = data;

  const renderListItem = ({ name }, index, list) => {
    if (list.length - 1 === index) name += ", ";
    return <span key={name + index}>{name}</span>;
  };

  console.log("map", currencies.map(renderListItem));

  return (
    <div className="container">
      <Link href="/">
        <button>back</button>
      </Link>
      <Image src={png} alt="country flag" width={300} height={200} />
      <div className="info">
        <h1 className="title"></h1>
        <ul>
          <li>
            Native Name: <span>{nativeName}</span>
          </li>
          <li>
            Population: <span>{population}</span>
          </li>
          <li>
            Region: <span>{region}</span>
          </li>
          <li>
            Sub Region: <span>{subregion}</span>
          </li>
          <li>
            Capital: <span>{capital}</span>
          </li>
          <li>
            Top Level Domain: <span>{topLevelDomain}</span>
          </li>
          <li>Currencies: {currencies.map(renderListItem)}</li>
          <li>Languages: {languages.map(renderListItem)}</li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
