import { Link } from "react-router-dom";

function PropertyCard({ property, favourites = [], toggleFavourite }) {
  return (
    <div
      className="propertyContainer"
      draggable
      onDragStart={e => {
        e.dataTransfer.setData(
          "property",
          JSON.stringify(property)
        );

        const preview = document.createElement("div");
        preview.className = "dragPreview";

        preview.innerHTML = `
          <strong>${property.bedrooms} bed ${property.type}</strong><br/>
          ${property.location}<br/>
          £${property.price.toLocaleString()}
        `;

        document.body.appendChild(preview);
        
        e.dataTransfer.setDragImage(preview, 100, 20);

        setTimeout(() => {
          document.body.removeChild(preview);
        }, 0);
      }}
    >
      <div className="propertyCard">

        <Link to={`/property/${property.id}`} className="propertyLink">
          <h3>{property.location}</h3>

          <img src={property.picture} alt={property.type} className="propertyImage" />

          <h2>{property.bedrooms} bedroom {property.type}</h2>

          <p>{property.description}</p>

          <h3>{property.added.day}th of {property.added.month} {property.added.year}</h3>

          

          <h3>£{property.price.toLocaleString()}</h3>
        </Link>

        <button
          className={`formButton favouriteButton ${
            favourites.find(p => p.id === property.id) ? "active" : ""
          }`}
          onClick={() => toggleFavourite(property)}
        >
          {favourites.find(p => p.id === property.id)
            ? "★ Favourite"
            : "☆ Add to Favourites"}
        </button>

      </div>
    </div>
  );
}

export default PropertyCard;


