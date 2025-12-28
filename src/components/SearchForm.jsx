import { useState } from "react";
import { DatePicker, DropdownList } from "react-widgets";

function SearchForm({ setFilters }) {

  const [postcode, setPostcode] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [type, setType] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setFilters({
      postcode,
      minPrice,
      maxPrice,
      bedrooms,
      type,
      dateAdded
    });
  }

  return (
    <div className="searchContainer">
      <h2>Filters:</h2>

      <form onSubmit={handleSubmit}>

        <label className="searchLabel">
          Postcode:
          <input
            type="text"
            value={postcode}
            onChange={e => setPostcode(e.target.value)}
          />
        </label>

        <label className="searchLabel">
          Minimum Price:
          <input
            type="number"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />
        </label>

        <label className="searchLabel">
          Maximum Price:
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
        </label>

        <label className="searchLabel">
          Number of Bedrooms:
          <DropdownList
            data={["Any", 1, 2, 3, 4]}
            value={bedrooms || "Any"}
            onChange={value => setBedrooms(value === "Any" ? "" : value)}
          />
        </label>


        <label className="searchLabel">
  Property Type:
  <DropdownList
    data={["Any", "House", "Flat", "Bungalow", "Apartment", "Studio"]}
    value={type || "Any"}
    onChange={value => setType(value === "Any" ? "" : value)}
  />
</label>


        <label className="searchLabel">
          Date added:
          <DatePicker
            value={dateAdded}
            onChange={value => setDateAdded(value)}
            placeholder="Select date"
          />

        </label>

        <button type="submit">Search</button>

      </form>
    </div>
  );
}

export default SearchForm;
