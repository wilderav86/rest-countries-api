const { AllCountryContext } = require("@/contexts/AllCountryContext");
const { useContext, useState } = require("react");
import { useRouter } from "next/router";

// TODO: Error handling

const SearchBar = ({ data }) => {
  const router = useRouter();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredCountry = data.filter((country) => {
      return country.name.toLowerCase() === input.toLowerCase();
    });

    router.push("/" + filteredCountry.at(0).name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="country"
        autoComplete="country"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
