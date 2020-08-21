import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import homeLocales from "../../locales/locales.home.json";
import styled from "styled-components";
import "./home.css";
import { H1 } from "../typography";
import { Button, SecButton, SearchField, PrimaryButton, Card } from "../styled";

const cards = [
  {
    title: "#1:COMMUNITY",
    image: "/image/community.png",
    text:
      "We provide a solution for two social problems: loneliness and lack of affordable housing in big cities. Senior citizens post pictures of the rooms they offer for lease, and young people live with them.",
  },
  {
    title: "#2:SAVINGS",
    image: "/image/savings.png",
    text:
      "Senior citizens support the young with advice and get paid for their rooms, young people save money on rent (up to 20% vs. market price) and support seniors with everyday help and company. ",
  },
  {
    title: "#3:CLARITY",
    image: "/image/clarity.png",
    text:
      "Flexible and bespoke terms allow to find the best solution for everyone. No more two-year contracts in huge WGs, no more living alone in a big family apartment!",
  },
];

class Home extends Component {
  render() {
    const lang = localStorage.getItem("lang");
    return (
      <>
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
        <Mission>
          <h2>
            Grossjungig AI is reinventing intergenerational co-living in big
            cities. By bringing seniors and young people together, we make the
            wolrd more connected and promote social cohersion
          </h2>
        </Mission>
        <Why>
          <h3>Why should You use Großjungig AI?</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {cards.map(({ title, text, image }) => (
              <Card title={title} text={text} image={image} />
            ))}
          </div>
        </Why>
      </>
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

const Mission = styled.div`
  text-align: center;
  padding: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Why = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
`;
