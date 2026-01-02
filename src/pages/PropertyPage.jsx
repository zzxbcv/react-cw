import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";

function PropertyPage() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    p => p.id === id
  );

  return (
    <div> 
      <title>Property page</title>
      <h1 className="propertyLocation">{property.location}</h1>

      <div className="propertyPageContainer">
       
        <img src={property.picture} alt={property.type } className="propertyImage"/>

        <h2 className="propertyInfo">{property.bedrooms} bedroom {property.type}</h2>
    
        <p className="propertyDes">{property.description}</p> 

        <h2 className="propertyInfo">£{property.price.toLocaleString()}</h2>

        <h2 className="propertyInfo">Added: {property.added.day}th of {property.added.month} {property.added.year}</h2>
        
      </div>
    </div>
  );
}

export default PropertyPage;
