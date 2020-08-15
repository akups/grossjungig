import React from "react";
import { Component } from "react";
import homeLocales from "../../locales/locales.home.json";
import "./home.css";

class Home extends Component {
  /* select = () => {
    obj = document.test.linkselect;

    index = obj.selectedIndex;
    if (index != 0) {
      href = obj.options[index].value;
      location.href = href;
    }
  }; */

  render() {
    const lang = localStorage.getItem("lang");
    return (
      <div className="home-component">
        <div>
          <h1>Find your dream home</h1>
        </div>
      </div>
    );
  }
}

export default Home;
