import getAddresses, { roomsEndpoint } from "./getAddresses";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios.get;
const mockedConsole = jest.spyOn(global.console, "error");
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
    mockedConsole.mockReset();
  });
  it("should getApiData", async () => {
    mockedAxios.mockResolvedValueOnce({ data: { rooms: [] } });
    await getAddresses(roomsEndpoint);
    expect(mockedAxios).toBeCalledTimes(1);
  });
  it("should getApiData the specified room", async () => {
    mockedAxios.mockResolvedValueOnce({ data: { rooms: [mockData] } });
    const data = await getAddresses(roomsEndpoint);
    expect(mockedAxios).toBeCalledTimes(1);
    expect(data).toEqual([`${mockData.address} ${mockData.postcode}`]);
  });
  it("should return an empty array if no data was received", async () => {
    mockedAxios.mockResolvedValueOnce({ data: { rooms: [] } });
    const data = await getAddresses(roomsEndpoint);
    expect(mockedAxios).toBeCalledTimes(1);
    expect(Array.isArray(data)).toBeTruthy();
  });
  it("should return an error if the request fails", async () => {
    const error = new Error("unable to fetch data");
    mockedAxios.mockRejectedValue(error);
    await getAddresses(roomsEndpoint);
    expect(mockedAxios).toBeCalledTimes(1);
    expect(mockedConsole).toBeCalledTimes(1);
  });
});
