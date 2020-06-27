import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import detailsLocales from "../locales/locales.details.json";

class Details extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const roomId = this.props.match.params.id;

    axios
      .get(`${process.env.REACT_APP_BACKENDURL}api/rooms/${roomId}`) // passing roomId to the axios call
      .then(({ data }) => {
        // destructuring data from the response
        //console.log(data);
        this.setState({
          data, //same as data:data,shorthand notation for objects
        });
        //console.log(this.state.data.images);
      });
    console.log("This is the user", this.props.user);
  }

  //delete kita
  deleteRoom = (event) => {
    event.preventDefault();
    const deleteRoomId = this.props.match.params.id;
    //console.log("deleteRoom?", deleteRoomId);
    axios
      .delete(
        `${process.env.REACT_APP_BACKENDURL}api/rooms/${deleteRoomId}/delete`
      )
      .then((response) => {
        this.props.history.push("/berlin");
        //console.log("DETAIL?", response);
      });
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
            <div className="detail-image-container">
              <img
                height="200px"
                width="200px"
                src="/image/kitaimage.png"
                alt=""
              />
            </div>
            <div className="detail-container-text">
              <h3>{detailsLocales.address[lang]}</h3>
              <p>{this.state.data.address}</p>
              <h3>{detailsLocales.postcode[lang]}:</h3>
              <p>{this.state.data.postcode}</p>
              <h3>{detailsLocales.district[lang]}</h3>
              <p>{this.state.data.district}</p>
              <h3>{detailsLocales.phone[lang]}</h3>
              <p>
                <a href={"tel:" + this.state.data.phoneNumber}>
                  {this.state.data.phoneNumber}
                </a>
              </p>
              <h3>{detailsLocales.email[lang]}</h3>
              <p>
                <a href={"mailto:" + this.state.data.email}>
                  {this.state.data.email}
                </a>
              </p>
            </div>
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
          <div>
            {this.state.data.images.map((image) => {
              console.log(image.secureUrl);
              return (
                <img width="200px" height="auto" src={image.secureUrl}></img>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <div className="detail-container">
        <h1>{this.state.data.name}</h1>
        <div className="markus-container">
          <div className="detail-image-container">
            <img
              height="200px"
              width="200px"
              src="/image/kitaimage.png"
              alt=""
            />
          </div>
          <div className="detail-container-text">
            <h3>{detailsLocales.address[lang]}</h3>
            <p>{this.state.data.address}</p>
            <h3>{detailsLocales.postcode[lang]}:</h3>
            <p>{this.state.data.postcode}</p>
            <h3>{detailsLocales.district[lang]}</h3>
            <p>{this.state.data.district}</p>
            <h3>{detailsLocales.phone[lang]}</h3>
            <p>
              <a href={"tel:" + this.state.data.phoneNumber}>
                {this.state.data.phoneNumber}
              </a>
            </p>
            <h3>{detailsLocales.email[lang]}</h3>
            <p>
              <a href={"mailto:" + this.state.data.email}>
                {this.state.data.email}
              </a>
            </p>
          </div>
        </div>
        <Link to="/berlin">
          <button>{detailsLocales.return[lang]}</button>
        </Link>
        <div>
          {this.state.data.images &&
            this.state.data.images.map((image) => {
              console.log(image.secureUrl);
              return (
                <img width="200px" height="auto" src={image.secureUrl}></img>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Details;
