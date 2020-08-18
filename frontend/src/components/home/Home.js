import React from "react";
import { Component } from "react";
import homeLocales from "../../locales/locales.home.json";
import styled from "styled-components";
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
        <MainPanel>
          <h1>Find your second grand family</h1>
        </MainPanel>
      </div>
    );
  }
}

export default Home;

const MainPanel = styled.div`
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    -4px -4px 8px rgba(255, 255, 255, 0.15);
  background-color: white;
  padding: 3.5rem 4rem;
  margin: 6rem;
  width: 870px;
  height: 220px;
  left: 285px;
  top: 200px;
`;
