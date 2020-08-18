import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import UserPortal from "./components/UserPortal.js";
import Berlin from "./components/Berlin.js";
import AddRoom from "./components/AddRoom.js";
import UploadPhotos from "./components/UploadPhotos";
import Details from "./components/Details";
import MapView from "./components/MapView";

const theme = {
  main: "#ed8707",
};

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (userObj) => {
    this.setState({
      user: userObj,
    });
  };

  updatePage = () => {
    this.forceUpdate();
  };

  render() {
    //console.log("APP", this.state.user);
    return (
      <div className="App">
        <Navbar
          setUser={this.setUser}
          user={this.state.user}
          updatePage={this.updatePage}
          //This means exporting "updatePage" to Navbar
        />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup
              history={props.history}
              user={this.state.user}
              setUser={this.setUser}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login history={props.history} setUser={this.setUser} />
          )}
        />
        <Route
          exact
          path="/userportal"
          render={(props) => <UserPortal {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/berlin"
          render={(props) => <Berlin {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/berlin/:id"
          render={(props) => <Details {...props} user={this.state.user} />}
        />
        <Route
          exact
          path="/addRoom"
          render={(props) => <AddRoom {...props} user={this.state.user} />}
        />
        <Route exact path="/uploadphotos/:roomId" component={UploadPhotos} />
        <Route exact path="/maps" component={MapView} />
        <Footer />
      </div>
    );
  }
}

export default (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
