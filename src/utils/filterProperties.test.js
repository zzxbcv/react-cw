import { filterProperties } from "./filterProperties";

const properties = [
  {
    id: "prop1",
    type: "House",
    bedrooms: 3,
    price: 500000,
    location: "High Street BR1",
    added: { day: 1, month: "January", year: 2023 }
  },
  {
    id: "prop2",
    type: "Flat",
    bedrooms: 2,
    price: 300000,
    location: "Market Road BR2",
    added: { day: 15, month: "March", year: 2022 }
  }
];

describe("Property filtering", () => {

  test("filters by property type", () => {
    const filters = { type: "House" };
    const result = filterProperties(properties, filters);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("prop1");
  });

  test("filters by minimum price", () => {
    const filters = { minPrice: 400000 };
    const result = filterProperties(properties, filters);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("prop1");
  });

  test("filters by maximum price", () => {
    const filters = { maxPrice: 350000 };
    const result = filterProperties(properties, filters);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("prop2");
  });

  test("filters by bedrooms", () => {
    const filters = { bedrooms: 2 };
    const result = filterProperties(properties, filters);
    expect(result[0].id).toBe("prop2");
  });

  test("filters by postcode", () => {
    const filters = { postcode: "BR1" };
    const result = filterProperties(properties, filters);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("prop1");
  });

  test("filters by date added", () => {
    const filters = { dateAdded: new Date(2023, 0, 1) };
    const result = filterProperties(properties, filters);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("prop1");
  });

  test("shows only favourites", () => {
    const favourites = [{ id: "prop2" }];
    const result = filterProperties(properties, {}, favourites, true);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("prop2");
  });

});
