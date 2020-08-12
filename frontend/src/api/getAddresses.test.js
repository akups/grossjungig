import getAddresses, { roomsEndpoint } from "./getAddresses";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios.get;
const mockData = {
  name: "dummyName",
  district: "Friedrichshain-Kreuzberg",
  description: "large sunny room",
  price: "250",
  postcode: 10969,
  address: "Solmstr. 20",
  phoneNumber: 30334556,
  email: "testingme",
  neighbourhood: "Kreuzberg",
  owner: "davis",
};
describe("getApiData", () => {
  beforeEach(() => {
    mockedAxios.mockReset();
  });
  it("should getApiData", async () => {
    mockedAxios.mockResolvedValueOnce({ data: { rooms: [] } });
    const data = await getAddresses(roomsEndpoint);
    expect(mockedAxios).toBeCalledTimes(1);
  });
});
