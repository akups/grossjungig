import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_MY_MAP_API_KEY);

// set response region. Its optional.
// A Geocoding request with region=de (German) will return the German city.
Geocode.setRegion("de");

// Find geocode for each address and add it to the coordinates array
export default (addresses) =>
  Promise.all(
    addresses.map(async (address, index) => {
      const { results } = await Geocode.fromAddress(address);

      const { lat, lng } = results[0].geometry.location;

      return { lat, lng, id: index };
    })
  );
