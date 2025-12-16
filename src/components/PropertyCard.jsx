

function PropertyCard({ property }) {
    
  return (
    <div className="property-card">
      <img src={property.picture} alt={property.type} />
      <h3>{property.type}</h3>
      <p>{property.location}</p>
      <p>£{property.price.toLocaleString()}</p>
    </div>
  );
}

export default PropertyCard;
