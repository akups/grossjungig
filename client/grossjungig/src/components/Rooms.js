import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Rooms extends Component {
  state = {
    rooms: [],
    search: "",
    select: "__",
    searchedRoom: [],
    photos: [], //[urls pointing to the images]
  };
  //1. from frontend, axios request a room data-> route rooms.js
  componentDidMount() {
    axios.get("/api/rooms").then((response) => {
      console.log(response.data.rooms);
      this.setState({
        rooms: response.data.rooms,
      });
    });
  }

  render() {
    return <div></div>;
  }
}
export default Rooms;
