import { useState, useEffect } from "react";
import propertiesData from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import FavouritesList from "../components/FavouritesList";

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

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function handleSetFilters(newFilters) {
    setFilters(newFilters);
    setShowFavouritesOnly(false);
  }

  const filteredProperties = allProperties.filter(property => {
    if (showFavouritesOnly) {
      return favourites.some(fav => fav.id === property.id);
    }

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
      if (propertyDate < filters.dateAdded) return false;
    }

    return true;
  });

  function toggleFavourite(property) {
    setFavourites(prev =>
      prev.find(p => p.id === property.id)
        ? prev.filter(p => p.id !== property.id)
        : [...prev, property]
    );
  }

  function removeFavourite(propertyId) {
    setFavourites(prev => prev.filter(p => p.id !== propertyId));
  }

  function handleDrop(e) {
    e.preventDefault();
    const property = JSON.parse(e.dataTransfer.getData("property"));
    setFavourites(prev =>
      prev.find(p => p.id === property.id) ? prev : [...prev, property]
    );
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div>
      <title>Search page</title>
      <link rel="icon" type="image/svg+xml" href="/searchIcon.svg" />

      <h1 className="titleBar">Property Search in Bromley</h1>

      <button
        className="hamburgerButton"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open filters"
      >
        ☰ Filters
      </button>

      <div className="pageLayout">
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <SearchForm setFilters={handleSetFilters} showFavouritesOnly={showFavouritesOnly} setShowFavouritesOnly={setShowFavouritesOnly} openSidebar={() => setSidebarOpen(true)} closeSidebar={() => setSidebarOpen(false)}/>
          <FavouritesList favourites={favourites} allowDrop={allowDrop} handleDrop={handleDrop} removeFavourite={removeFavourite}/>
        </aside>

        {sidebarOpen && (
          <div className="sidebarOverlay"onClick={() => setSidebarOpen(false)}/>
        )}

        <main className="resultsArea">
          <PropertyList properties={filteredProperties} favourites={favourites} toggleFavourite={toggleFavourite}/>
        </main>
      </div>
    </div>
  );
}

export default SearchPage;
