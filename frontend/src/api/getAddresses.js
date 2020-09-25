import axios from "axios";

export const roomsEndpoint = `${process.env.REACT_APP_BACKENDURL}api/rooms`;
export default async () => {
  let addresses = [];
  try {
    const {
      data: { rooms },
    } = await axios.get(roomsEndpoint);
    addresses = rooms.map(({ address, postcode }) => `${address} ${postcode}`);
  } catch (error) {
    console.log(error);
  }
  return addresses;
};
