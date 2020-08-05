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
  const [rooms, setRooms] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { rooms },
      } = await axios(`${process.env.REACT_APP_BACKENDURL}api/rooms`);
      const { results } = await Geocode.fromAddress(
        `${rooms[0].address} ${rooms[0].postcode}`
      );
      const { lat, lng } = results[0].geometry.location;

      setRooms({ lat, lng });
    };

    fetchData();
  }, []);

  const { lat, lng } = rooms;

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        {rooms.lat && <Marker onLoad={onLoad} position={{ lat, lng }} />}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
