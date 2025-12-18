

function PropertyCard({ property }) {
    
  return (
    <div className="propertycontainer">
      <div className="propertyCard">
        <img src={property.picture} alt={property.type} />
        <h2>{property.bedrooms} bedroom {property.type}</h2>
        <p>{property.description}</p>
        <h3>{property.location}</h3>
        <h3>£{property.price.toLocaleString()}</h3>
      </div>
    </div>
  );
}

export default PropertyCard;
