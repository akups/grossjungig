import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeLocales from "../../locales/locales.home.json";
import styled from "styled-components";
import "./home.css";
import { H1 } from "../typography";
import { Button, SecButton, SearchField, PrimaryButton } from "../styled";

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
          <H1>Find your second grand family</H1>
          <Row>
            {homeLocales.choose[lang]}:
            <Link to="/berlin">
              <Button>{homeLocales.offers[lang]}</Button>
            </Link>
            <SecButton>{homeLocales.requests[lang]}</SecButton>
          </Row>
          <Row>
            <SearchField
              placeholder={homeLocales.city[lang]}
              input=""
            ></SearchField>
            <PrimaryButton>{homeLocales.search[lang]}</PrimaryButton>
          </Row>
        </MainPanel>
      </div>
    );
  }
}

export default Home;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    -4px -4px 8px rgba(255, 255, 255, 0.15);
  background-color: white;
  padding: 3.5rem 4rem;
  margin: 6rem;
  margin-bottom: 20rem;
  margin-top: 8rem;
  width: 870px;
  height: 220px;
  left: 285px;
  top: 200px;
`;

const Row = styled.div`
  display: flex;
  padding: 0.15rem;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
