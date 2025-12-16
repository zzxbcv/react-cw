import { useState } from "react";
import propertiesData from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";

function SearchPage() {

  const allProperties = propertiesData.properties;

  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: ""
  });

  const filteredProperties = allProperties.filter(property => {

    if (filters.type && property.type !== filters.type) return false;
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;

    return true;
  });

  return (
    <div>
      <h1>Property Search</h1>
      <SearchForm setFilters={setFilters} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
}

export default SearchPage;
