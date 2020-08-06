import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import axios from "axios";

Geocode.setApiKey(process.env.REACT_APP_MY_MAP_API_KEY);

// set response region. Its optional.
// A Geocoding request with region=de (German) will return the German city.
Geocode.setRegion("de");

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
      const adresses = rooms.map(
        ({ address, postcode }) => `${address} ${postcode}`
      );
      // Empty coordinates array
      let coordinates = [];
      // Find geocode for each adress and add it to the coordinates array
      await adresses.reduce(async (acc, adress) => {
        const { results } = await Geocode.fromAddress(adress);

        const { lat, lng } = results[0].geometry.location;

        coordinates.push({ lat, lng });
      }, []);

      // once all coordinates ready, push them to the state
      setCoordinates(coordinates);
    };

    fetchData();
  }, []);
  console.log(coordinates, coordinates.length);
  return coordinates.length ? (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        {coordinates.map(({ lat, lng }) => (
          <Marker onLoad={onLoad} position={{ lat, lng }} />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  ) : (
    <p>Loading..</p>
  );
}

export default React.memo(MyComponent);
