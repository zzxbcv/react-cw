function FavouritesList({ favourites, allowDrop, handleDrop, removeFavourite }) {

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    e.currentTarget.classList.add("draggingFavourite");
  };

  const handleDragEnd = (e, id) => {
    e.currentTarget.classList.remove("draggingFavourite");

    if (!e.dataTransfer.dropEffect || e.dataTransfer.dropEffect === "none") {
      removeFavourite(id);
    }
  };

  return (
    <div
      className="favouritesContainer"
      onDragOver={allowDrop}
      onDrop={handleDrop}
    >
      <h3 className="favouriteTitle">Favourites</h3>

      {favourites.length === 0 && (
        <p className="dropHint">Drag properties here</p>
      )}

      {favourites.map(property => (
        <div
          key={property.id}
          className="favouriteItem"
          draggable
          onDragStart={e => handleDragStart(e, property.id)}
          onDragEnd={e => handleDragEnd(e, property.id)}
        >
          <div>
            <strong>{property.bedrooms} bed {property.type}</strong><br />
            {property.location}<br />
            £{property.price.toLocaleString()}
          </div>

          <button
            className="removeFavouriteButton"
            onClick={() => removeFavourite(property.id)}
            aria-label="Remove from favourites"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavouritesList;
