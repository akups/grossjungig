import axios from "axios";

export const roomsEndpoint = `${process.env.REACT_APP_BACKENDURL}api/rooms`;
export default async () => {
  const {
    data: { rooms },
  } = await axios.get(roomsEndpoint);
  return rooms.map(({ address, postcode }) => `${address} ${postcode}`);
};
