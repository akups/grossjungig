import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import axios from "axios";

Geocode.setApiKey(process.env.REACT_APP_MY_MAP_API_KEY);

// set response region. Its optional.
// A Geocoding request with region=de (German) will return the Spanish city.
Geocode.setRegion("de");

let positions = [
  // {
  //   lat: 52.5540631,
  //   lng: 13.3487178,
  // },
  // { lat: 52.5219814, lng: 13.4111173 },
];
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 52.52008,
  lng: 13.40495,
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function MyComponent() {
  const [data, setData] = useState({ rooms: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_BACKENDURL}api/rooms`
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  if (data.rooms.length) {
    data.rooms.map((room) => {
      // Get latidude & longitude from address.
      Geocode.fromAddress(room.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          room.coordinates.push({ lat, lng });
          positions.push({ lat, lng });
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
  console.log(data, "these are our rooms");
  console.log(positions);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        {positions.map((position, index) => (
          <Marker key={index} onLoad={onLoad} position={position} />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
