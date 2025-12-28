import { useState } from "react";
import propertiesData from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";

function SearchPage() {

  const allProperties = propertiesData.properties;

  const [filters, setFilters] = useState({
    postcode: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    type: "",
    dateAdded: ""
  });

  const filteredProperties = allProperties.filter(property => {

    if (filters.type && property.type !== filters.type) return false;
    if (filters.minPrice && property.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
    if (filters.bedrooms && property.bedrooms !== Number(filters.bedrooms)) return false;

    if (filters.postcode) {
      const propertyPostcode = property.location.split(" ").pop();
      if (!propertyPostcode.startsWith(filters.postcode.toUpperCase())) return false;
    }

    if (filters.dateAdded) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );
      const filterDate = filters.dateAdded;
      if (propertyDate < filterDate) return false;
    }

    return true;
  });

  return (
    <div>
      <h1>Property Search in Bromley</h1>
      <SearchForm setFilters={setFilters} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
}

export default SearchPage;
