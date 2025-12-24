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
          <select
            value={bedrooms}
            onChange={e => setBedrooms(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        </label>

        <label className="searchLabel">
          Property Type:
          <select
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
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
