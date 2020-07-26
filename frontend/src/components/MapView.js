import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const positions = [
  {
    lat: 52.5540631,
    lng: 13.3487178,
  },
  { lat: 52.5219814, lng: 13.4111173 },
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
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        {positions.map((position) => (
          <Marker onLoad={onLoad} position={position} />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
