import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import detailsLocales from "../locales/locales.details.json";

class Details extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const roomId = this.props.match.params.id;

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKENDURL}api/rooms/${roomId}`
    ); // passing roomId to the axios call

    this.setState({
      data, //same as data:data,shorthand notation for objects
    });

    console.log("This is the user", this.props.user);
  }

  //delete room
  deleteRoom = async (event) => {
    event.preventDefault();
    const deleteRoomId = this.props.match.params.id;
    //console.log("deleteRoom?", deleteRoomId);
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKENDURL}api/rooms/${deleteRoomId}/delete`
    );
    {
      this.props.history.push("/berlin");
      //console.log("DETAIL?", response);
    }
  };

  render() {
    const lang = localStorage.getItem("lang");
    const roomId = this.props.match.params.id;
    // this allows to verify if there is a user or not so ifyou are not logged in you can still browse the various rooms
    if (this.props.user && this.props.user._id === this.state.data.owner) {
      return (
        <div className="detail-container">
          <h2>{this.state.data.name}</h2>
          <div className="markus-container">
            <div className="detail-container-text">
              <div className="paragraphs">
                <h3>{detailsLocales.address[lang]}:</h3>
                <p>{this.state.data.address}</p>
              </div>
              <div className="paragraphs">
                <h3>{detailsLocales.postcode[lang]}:</h3>
                <p>{this.state.data.postcode}</p>
              </div>
              <div className="paragraphs">
                <h3>{detailsLocales.district[lang]}:</h3>
                <p>{this.state.data.district}</p>
              </div>
              <div className="paragraphs">
                <h3>{detailsLocales.describe[lang]}:</h3>
                <p>{this.state.data.description}</p>
              </div>
              {/* <div className="paragraphs">
                <h3>{detailsLocales.phone[lang]}:</h3>
                <p>
                  <a href={"tel:" + this.state.data.phoneNumber}>
                    {this.state.data.phoneNumber}
                  </a>
                </p>
              </div>
              <div className="paragraphs">
                <h3>{detailsLocales.email[lang]}:</h3>
                <p>
                  <a href={"mailto:" + this.state.data.email}>
                    {this.state.data.email}
                  </a>
                </p>
              </div> */}
            </div>
          </div>
          <div className="photo-container">
            {this.state.data.images.map((image) => {
              console.log(image.secureUrl);
              return (
                <img
                  alt="room"
                  width="300px"
                  height="auto"
                  src={image.secureUrl}
                ></img>
              );
            })}
          </div>
          <div className="buttons">
            <Link to={`/uploadphotos/${roomId}`}>
              <button>{detailsLocales.images[lang]}</button>
            </Link>
            <button onClick={this.deleteRoom}>
              {detailsLocales.delete[lang]}
            </button>
            <Link to="/berlin">
              <button>{detailsLocales.return[lang]}</button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="detail-container">
        <h2>{this.state.data.name}</h2>
        <div className="markus-container">
          <div className="detail-container-text">
            <div className="paragraphs">
              <h3>{detailsLocales.address[lang]}:</h3>
              <p>{this.state.data.address}</p>
            </div>
            <div className="paragraphs">
              <h3>{detailsLocales.postcode[lang]}:</h3>
              <p>{this.state.data.postcode}</p>
            </div>
            <div className="paragraphs">
              <h3>{detailsLocales.district[lang]}:</h3>
              <p>{this.state.data.district}</p>
            </div>
            <div className="paragraphs">
              <h3>{detailsLocales.describe[lang]}:</h3>
              <p>{this.state.data.description}</p>
            </div>
            {/* <div className="paragraphs">
              <h3>{detailsLocales.phone[lang]}:</h3>
              <p>
                <a href={"tel:" + this.state.data.phoneNumber}>
                  {this.state.data.phoneNumber}
                </a>
              </p>
            </div>
            <div className="paragraphs">
              <h3>{detailsLocales.email[lang]}:</h3>
              <p>
                <a href={"mailto:" + this.state.data.email}>
                  {this.state.data.email}
                </a>
              </p>
            </div> */}
          </div>
        </div>
        <div className="photo-container">
          {/* TODO: refactor markup */}
          {this.state.data.images &&
            this.state.data.images.map((image) => {
              console.log(image.secureUrl);
              return (
                <img
                  alt="room"
                  width="300px"
                  height="auto"
                  src={image.secureUrl}
                ></img>
              );
            })}
        </div>
        <Link to="/berlin">
          <button>{detailsLocales.return[lang]}</button>
        </Link>
      </div>
    );
  }
}

export default Details;
