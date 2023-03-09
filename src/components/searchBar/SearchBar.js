const { useState, useContext } = require("react");
import { ThemeContext } from "@/contexts/themeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./searchBar.module.scss";

const SearchBar = ({ data }) => {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [autoCompleteTerms, setAutoCompleteTerms] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredCountry = data.filter((country) => {
      return country.name.toLowerCase() === input.toLowerCase();
    });

    if (data.some((country) => country.name.toLowerCase() === input)) {
      router.push("/" + filteredCountry.at(0).name);
    } else {
      router.push("/" + autoCompleteTerms.at(0).name);
    }
  };
  console.log(input, "input");
  const handleChange = (e) => {
    setInput(e.target.value);
    const autoCompleteArr = data.filter((country) => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setAutoCompleteTerms(autoCompleteArr);
  };

  const renderAutoCompleteLinks = autoCompleteTerms
    .slice([0], [9])
    .map((term, key) => {
      if (input !== "") {
        return (
          <li key={key}>
            <Link href={"/" + term.name}>{term.name}</Link>
          </li>
        );
      }
    });

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
        <div
          className={
            theme === "Light" ? "lightMode container" : "darkMode container"
          }
        >
          <ul className={styles.autoComplete}>{renderAutoCompleteLinks}</ul>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
