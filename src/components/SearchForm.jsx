

function SearchForm({ setFilters}) {
  return (
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
        Min Price:
        <input type="number" />
      </label>

      <label>
        Max Price:
        <input type="number" />
      </label>
    </form>
  );
}

export default SearchForm;