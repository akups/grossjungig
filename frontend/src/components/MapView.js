import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

import getGeocodes from "../api/getGeocodes";
import getAddresses from "../api/getAddresses";

const containerStyle = {
  width: "80vw",
  height: "60vh",
  marginLeft: "auto",
  marginRight: "auto",
};

const center = {
  lat: 52.52008,
  lng: 13.40495,
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function MyComponent() {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    // Fetch rooms from own backend
    const fetchData = async () => {
      // Extract adresses
      const addresses = await getAddresses();
      const coordinates = await getGeocodes(addresses);
      setCoordinates(coordinates);
    };

    fetchData();
  }, []);

  return (
    <div style={{ minHeight: "60vh" }}>
      {coordinates.length ? (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            {coordinates.map(({ lat, lng, id }) => (
              <Marker key={id} onLoad={onLoad} position={{ lat, lng }} />
            ))}
            <></>
          </GoogleMap>
        </LoadScript>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}

export default React.memo(MyComponent);
