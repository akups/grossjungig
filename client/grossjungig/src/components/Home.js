import React from "react";
import { Component } from "react";
import homeLocales from "../locales/locales.home.json";

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
        <img
          className="logo_nb"
          src="/image/grossjungig_logo_nb.png"
          alt="grossjungig logo with no background"
        />
        <div>
          <h1>{homeLocales.welcome[lang]}</h1>
        </div>
        <div className="benefits">
          <p>{homeLocales.seniors[lang]}</p>
          <p>{homeLocales.youth[lang]}</p>
        </div>
      </div>
    );
  }
}

export default Home;
