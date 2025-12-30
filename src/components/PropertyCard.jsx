

function PropertyCard({ property, favourites = [], toggleFavourite }) {
  return (
    <div
      className="propertycontainer"
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
          ${property.location}<br/>£i${property.price.toLocaleString()}
        `;

        document.body.appendChild(preview);

        e.dataTransfer.setDragImage(preview, 100, 20);

        setTimeout(() => {
          document.body.removeChild(preview);
        }, 0);
      }}
    >
      <div className="propertyCard">
        <img src={property.picture} alt={property.type} />

        <h2>
          {property.bedrooms} bedroom {property.type}
        </h2>

        <p>{property.description}</p>

        <h3>
          {property.added.day}th of {property.added.month}{" "}
          {property.added.year}
        </h3>

        <h3>{property.location}</h3>

        <h3>£{property.price.toLocaleString()}</h3>

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


