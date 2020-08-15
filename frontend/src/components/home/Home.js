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
  background-color: white;
  padding: 6rem;
  margin: 6rem;
`;
