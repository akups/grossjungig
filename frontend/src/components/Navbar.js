import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import navbarLocales from "../locales/locales.navbar.json";
import Logo from "./Logo";
import { PrimaryButton, Button } from "./styled";

const Navbar = (props) => {
  const [img, setImage] = useState("/image/germany.png");

  const imageChange = () => {
    //console.log("imagechange", localStorage.getItem("lang"));
    const lang = localStorage.getItem("lang");
    //console.log("LANG", lang);
    if (lang === "en") {
      setImage("/image/uk.png");
      localStorage.setItem("lang", "de");
    } else if (lang === "de") {
      setImage("/image/germany.png");
      localStorage.setItem("lang", "en");
    }
    props.updatePage();
    //This is coming from App.js
  };
  // TODO:refactor this and get rid of update page (we will refactor to global state)
  const logout = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKENDURL}api/auth/logout`)
      .then(() => {
        props.setUser(null);
      });
  };

  const lang = localStorage.getItem("lang");

  return (
    <nav className="navilink">
      <Link className="logo-link" to="/">
        <Logo />
      </Link>
      <div className="main-nav">
        <Link to="/berlin">
          <Button label={navbarLocales.berlin[lang]}></Button>
        </Link>
        <Link to="/maps">
          <PrimaryButton>{navbarLocales.maps[lang]}</PrimaryButton>
        </Link>
        <Link to="/munich">
          <Button label={navbarLocales.munich[lang]}></Button>
        </Link>
      </div>
      {props.user ? (
        <div className="login-nav">
          <Link onClick={logout} to="/">
            {navbarLocales.logout[lang]}
          </Link>
          <img onClick={imageChange} height="30px" src={img} alt="" />
          <Link to="/userportal">
            <img height="30px" src="/image/user.png" alt="User Portal" />
          </Link>
        </div>
      ) : (
        <div className="login-nav">
          <Link to="/login">
            <Button label={navbarLocales.login[lang]}></Button>
          </Link>
          <Link to="/signup">
            <PrimaryButton>{navbarLocales.signup[lang]}</PrimaryButton>
          </Link>
          <img
            onClick={imageChange}
            height="20px"
            src={img}
            alt="Language Switcher"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
