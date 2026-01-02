export function filterProperties(properties, filters, favourites = [], showFavouritesOnly = false) {
  return properties.filter(property => {
    if (showFavouritesOnly) {
      return favourites.some(fav => fav.id === property.id);
    }

    if (filters.type && property.type !== filters.type) return false;
    if (filters.minPrice && property.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
    if (filters.bedrooms && property.bedrooms !== Number(filters.bedrooms)) return false;

    if (filters.postcode) {
      const postcode = property.location.split(" ").pop();
      if (!postcode.startsWith(filters.postcode.toUpperCase())) return false;
    }

    if (filters.dateAdded) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );
      if (propertyDate < filters.dateAdded) return false;
    }

    return true;
  });
}