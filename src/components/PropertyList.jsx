import PropertyCard from "./PropertyCard";

function PropertyList({ properties, favourites, toggleFavourite }) {
  return (
    <div className="propertyContainer">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} favourites={favourites} toggleFavourite={toggleFavourite}/>
      ))}
    </div>
  );
}

export default PropertyList;
