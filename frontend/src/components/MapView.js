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

function MyComponent() {
  const [
    data /*data acts like a getter it can also be called getData*/,
    setData /*this is the steer*/,
  ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_BACKENDURL}api/rooms`
      );

      setData(result.data.rooms);
    };

    fetchData();
  }, []);

  if (data.length) {
    let newRooms = [];
    data.map((room, index) => {
      // Get latidude & longitude from address.
      Geocode.fromAddress(room.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          newRooms[index] = { ...room, coordinates: { lat, lng } };
        },
        (error) => {
          console.error(error);
        }
      );
    });
    setData(newRooms);
  }
  console.log(data, "these are our rooms");
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        {data.map((room, index) => {
          console.log(room);
          return (
            <Marker key={index} onLoad={onLoad} position={room.coordinates} />
          );
        })}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
