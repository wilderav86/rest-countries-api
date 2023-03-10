import Link from "next/link";

const { default: Image } = require("next/image");

export const getServerSideProps = async (context) => {
  //initial country data
  const url = `https://restcountries.com/v2/name/${context.params.detail}`;

  const response = await fetch(url);
  const data = await response.json();

  //bordering countries data
  let borderingCountryCodes = "";
  if (data.at(0).borders) {
    borderingCountryCodes = data.at(0).borders.join(",");
  }
  const borderCountryUrl = `https://restcountries.com/v2/alpha?codes=${borderingCountryCodes}`;
  const borderCountryResponse = await fetch(borderCountryUrl);
  const borderCountryData = await borderCountryResponse.json();

  return {
    props: { params: context.params, data: data.at(0), borderCountryData },
  };
};

const Detail = ({ params, data, borderCountryData }) => {
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

  console.log("borders", borderCountryData);

  const renderListItem = ({ name }, index, list) => {
    if (list.length - 1 !== index) name += ", ";

    return <span key={name + index}>{name}</span>;
  };

  const renderBorderCountryLinks = borderCountryData.length ? (
    borderCountryData.map((borderCountry, index) => {
      return (
        <li key={index}>
          <Link href={"/" + borderCountry.name}>{borderCountry.name}</Link>
        </li>
      );
    })
  ) : (
    <li>None</li>
  );

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
            Population: <span>{population.toLocaleString("en-US")}</span>
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
          <li>
            Currencies:{" "}
            {currencies ? currencies.map(renderListItem) : <span>None</span>}
          </li>
          <li>
            Languages:{" "}
            {languages ? languages.map(renderListItem) : <span>None</span>}
          </li>
        </ul>
        <div className="borderCountriesContainer">
          <ul>
            Bordering Countries:
            {renderBorderCountryLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
