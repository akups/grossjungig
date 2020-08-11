import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import axios from "axios";

import getGeocodes from "../api/getGeocodes";

const containerStyle = {
  width: "50vw",
  height: "60vh",
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
      const {
        data: { rooms },
      } = await axios(`${process.env.REACT_APP_BACKENDURL}api/rooms`);

      // Extract adresses
      const addresses = rooms.map(
        ({ address, postcode }) => `${address} ${postcode}`
      );
      getGeocodes(addresses).then((values) => setCoordinates(values));
    };

    fetchData();
  }, []);
  console.log(coordinates, coordinates.length);
  return coordinates.length ? (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        {coordinates.map(({ lat, lng, id }) => (
          <Marker key={id} onLoad={onLoad} position={{ lat, lng }} />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  ) : (
    <p>Loading..</p>
  );
}

export default React.memo(MyComponent);
