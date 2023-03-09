const Dropdown = ({ data, setFilteredRegion }) => {
  const regions = [];
  data.forEach((country) => {
    if (!regions.includes(country.region)) regions.push(country.region);
  });

  const handleChange = (e) => {
    e.target.value === "all"
      ? setFilteredRegion(null)
      : setFilteredRegion(e.target.value);
  };

  const renderOptions = regions.map((region, index) => {
    return (
      <option key={region + index} value={region}>
        {region}
      </option>
    );
  });

  return (
    <>
      <form>
        <select onChange={handleChange} id="regions" name="regions" size="1">
          <option value="filter by region" disabled>
            Filter by region
          </option>
          <option value="all">All Regions</option>
          {renderOptions}
        </select>
      </form>
    </>
  );
};

export default Dropdown;
