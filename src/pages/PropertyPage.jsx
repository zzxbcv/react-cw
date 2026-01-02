import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";


function PropertyPage() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    p => p.id === id
  );

  const [mainImage, setMainImage] = useState(property.pictures[0]);

  const encodedAddress = encodeURIComponent(property.location);

  return (
    <div> 
      <title>Property page</title>
      <link rel="icon" type="image/svg+xml" href="/propertyIcon.svg" />
      <h1 className="propertyLocation">{property.location}</h1>

      <div className="propertyPageContainer">
       
        <div className="gallery">
          <img src={mainImage} alt={property.type} className="propertyImage" />

          <div className="thumbnails">
            {property.pictures.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <p className="propertyDes">{property.description}</p>
          </TabPanel>

          <TabPanel>
            <img
              src={property.floorPlan}
              alt="Floor plan"
              className="floorPlanImage"
            />
          </TabPanel>

          <TabPanel>
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              className="mapBorder"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
            />
          </TabPanel>
        </Tabs>

        <h2 className="propertyInfo">{property.bedrooms} bedroom {property.type}</h2>

        <h2 className="propertyInfo">£{property.price.toLocaleString()}</h2>

        <h2 className="propertyInfo">Added: {property.added.day}th of {property.added.month} {property.added.year}</h2>
        
      </div>
    </div>
  );
}

export default PropertyPage;
