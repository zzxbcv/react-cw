import { useState } from "react";
import { DatePicker, DropdownList, NumberPicker, Combobox } from "react-widgets";

function SearchForm({
  setFilters,
  showFavouritesOnly,
  setShowFavouritesOnly,
  openSidebar,
  closeSidebar
}) {

  const [postcode, setPostcode] = useState("");
  const postcodeOptions = ["KT22", "NW9", "NW7", "SW11", "EN1", "SW4", "IG8"];
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

    if (closeSidebar) closeSidebar();
  }

  function handleReset() {
    setPostcode("");
    setMinPrice("");
    setMaxPrice("");
    setBedrooms("");
    setType("");
    setDateAdded("");

    setFilters({
      postcode: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      type: "",
      dateAdded: ""
    });

    setShowFavouritesOnly(false);
    closeSidebar();
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>

      <div className="filtersHeader">
        <h2 className="filtersTitle">Filters</h2>

        <button
          type="button"
          className="closeSidebar"
          onClick={closeSidebar}
          aria-label="Close filters"
        >
          ✕
        </button>
      </div>

      <label className="searchLabel">
        Postcode Area:
        <Combobox
          data={postcodeOptions}
          value={postcode}
          onChange={value => setPostcode(value)}
          placeholder="e.g. SW11"
        />
      </label>

      <label className="searchLabel">
        Maximum Price:
        <NumberPicker
          min={0}
          max={1000000}
          step={25000}
          value={maxPrice || 0}
          onChange={value => setMaxPrice(value ?? "")}
        />
      </label>

      <label className="searchLabel">
        Minimum Price:
        <NumberPicker
          min={0}
          max={1000000}
          step={25000}
          value={minPrice || 0}
          onChange={value => setMinPrice(value ?? "")}
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

      <div className="buttonRow">
        <button className="formButton" type="submit">Search</button>
        <button className="formButton" type="reset">Reset</button>

        <button
          type="button"
          className={`formButton ${showFavouritesOnly ? "active" : ""}`}
          onClick={() => setShowFavouritesOnly(prev => !prev)}
        >
          {showFavouritesOnly ? "Show all properties" : "Show favourites only"}
        </button>

      </div>

    </form>
    
  );
}

export default SearchForm;
