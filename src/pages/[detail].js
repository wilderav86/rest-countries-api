const { default: Image } = require("next/image");

export const getServerSideProps = async (context) => {
  const url = `https://restcountries.com/v2/name/${context.params.detail}`;

  const response = await fetch(url);
  const data = await response.json();
  return {
    props: { params: context.params, data },
  };
};

const Detail = ({ params, data }) => {
  console.log("params", params, "data", data);

  // how to destructure without use of data index
  const { nativeName, population, region, subregion, capital, topLevelDomain } =
    data[0];
  const { png } = data[0].flags;
  const [...currencies] = data[0].currencies;
  const [...languages] = data[0].languages;

  //how to call this function inside jsx
  const renderList = (list) => {
    list.map((item, key) => {
      console.log(item.name.toString());
      return <p>'hiu'</p>;
    });
  };

  console.log(languages);
  return (
    <div className="container">
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
          <li>
            Currencies:{" "}
            {currencies.map((currency) =>
              currencies.length - 1 === currencies.lastIndexOf(currency) ? (
                <span>{currency.name}</span>
              ) : (
                <span>{currency.name}, </span>
              )
            )}
          </li>
          <li>
            Languages:{" "}
            {languages.map((language) =>
              languages.length - 1 === languages.lastIndexOf(language) ? (
                <span>{language.name}</span>
              ) : (
                <span>{language.name}, </span>
              )
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
