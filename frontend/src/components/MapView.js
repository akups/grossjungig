import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  Lat: 53.57,
  Lng: 10.01,
};

function MapView() {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={`AIzaSyDpZiSsvYRIupycMa8C_DXWaylhPiPoKNs`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        map={map}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;
