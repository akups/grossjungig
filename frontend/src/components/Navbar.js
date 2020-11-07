import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import navbarLocales from "../locales/locales.navbar.json";
import Logo from "./Logo";
import { PrimaryButton, Button, NavbarLink } from "./styled";

const imageChange = (updatePage, setImage) => {
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
  updatePage();
  //This is coming from App.js
};

const Navbar = (props) => {
  const [img, setImage] = useState("/image/germany.png");

  // TODO:refactor this and get rid of update page (we will refactor to global state)
  const logout = (e) => {
    console.log(e);
    axios
      .delete(`${process.env.REACT_APP_BACKENDURL}api/auth/logout`)
      .then(() => {
        props.setUser(null);
      });
  };

  const lang = localStorage.getItem("lang");

  return (
    <div
      style={{
        width: "100%",
        position: "sticky",
        top: "0px",
        background: "white",
      }}
    >
      <nav>
        <Link class="logo-box" to="/">
          <img src="/image/new_logo.png" alt="logo_image" />
        </Link>
        <div className="main-nav">
          <Link to="/berlin">
            <Button label={navbarLocales.berlin[lang]}></Button>
          </Link>
          <Link to="/maps">
            <PrimaryButton>{navbarLocales.maps[lang]}</PrimaryButton>
          </Link>
          {/* <Link to="/munich">
            <Button label={navbarLocales.munich[lang]}></Button>
          </Link> */}
          <div className="navbarlink">
            <NavbarLink href="/#about"> About </NavbarLink>
            <NavbarLink href="/#how-it-works">How does it work? </NavbarLink>
            <NavbarLink href="/#community">Community</NavbarLink>
          </div>
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
              onClick={(e) => imageChange(props.updatePage, setImage)}
              height="20px"
              src={img}
              alt="Language Switcher"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
