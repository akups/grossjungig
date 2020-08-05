import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import axios from "axios";

Geocode.setApiKey(process.env.REACT_APP_MY_MAP_API_KEY);

// set response region. Its optional.
// A Geocoding request with region=de (German) will return the German city.
Geocode.setRegion("de");

let positions = [
  {
    lat: 52.5540631,
    lng: 13.3487178,
  },
  { lat: 52.5219814, lng: 13.4111173 },
];
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

const getGeo = async (rooms) => {
  let coordinates = [];

  await rooms.map(async (room) => {
    const { results } = await Geocode.fromAddress(
      `${room.address} ${room.postcode}`
    );
    const { lat, lng } = results[0].geometry.location;
    coordinates.push({ lat, lng });
  });

  return coordinates;
};

function MyComponent() {
  const [rooms, setRooms] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_BACKENDURL}api/rooms`
      );
      setRooms(result.data.rooms);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const newCoordinates = await getGeo(rooms);

      setCoordinates(newCoordinates);
    };

    fetchCoordinates();
  }, [rooms]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        {coordinates.length &&
          coordinates.map(({ lat, lng }, index) => (
            <Marker key={index} onLoad={onLoad} position={{ lat, lng }} />
          ))}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
