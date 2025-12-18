

function SearchForm() {
  return (
    <div>
      
      <div className="searchContainer">
        <h2>Filters:</h2>
        <form>
          
          <label className="searchLabel">
            Postcode
            <input type="text"></input>
          </label>

          <label className="searchLabel">
            Minimum Price:
            <input type="number" />
          </label>

          <label className="searchLabel">
            Maximum Price:
            <input type="number" />
          </label>

          <label className="searchLabel">
            Number of Bedrooms:
            <select>
              <option value="">Any</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </label>

          <label className="searchLabel">
            Property Type:
            <select>
              <option value="">Any</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </label>

          <label className="searchLabel">
            Date added:
            <input type="date"></input>
          </label>

        </form>
      </div>
    </div>
  );
}

export default SearchForm;