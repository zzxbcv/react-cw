

function SearchForm() {
  return (
    <div>
      <h1>Filters</h1>
      <form>
        <label>
          Property Type:
          <select>
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>

        <label>
          Minimum Price:
          <input type="number" />
        </label>

        <label>
          Maximum Price:
          <input type="number" />
        </label>

        <label>
          Number of Bedrooms:
          <select>
            <option value="">Any</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        </label>

        <label >
          Date added:
          <input type="date"></input>
        </label>

        <label>
          Postcode
          <input type="text"></input>
        </label>
      </form>
    </div>
  );
}

export default SearchForm;