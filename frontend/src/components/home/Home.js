import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeLocales from "../../locales/locales.home.json";
import styled from "styled-components";
import "./home.css";
import { H1 } from "../typography";
import {
  Button,
  SecButton,
  SearchField,
  PrimaryButton,
  Card,
  Card2,
  Card3,
} from "../styled";

const cards = [
  {
    title: "#1:COMMUNITY",
    image: "/image/community.png",
    text:
      "We provide a solution for two social problems: loneliness and lack of affordable housing in big cities.",
  },
  {
    title: "#2:SAVINGS",
    image: "/image/savings.png",
    text:
      "Seniors support youth with advice and get rent. Youth save, up to 20% vs. market price, on rent and support seniors by helping with chores and keeping them company.",
  },
  {
    title: "#3:CLARITY",
    image: "/image/clarity.png",
    text:
      "Flexible and bespoke terms - the best solution for everyone. No more huge shared apartments, no more living alone in big family apartments!",
  },
];

const howCards = [
  {
    title: "#1",
    image: "/image/senior.png",
    text:
      "Seniors — create a profile with 5 clicks, select your roommate preferences, tell us about your room and post pictures.",
  },
  {
    title: "#2",
    image: "/image/youth.png",
    text:
      "Youth —  create a profile with 5 clicks, select your roommate preferences, look for a room on the map.",
  },
  {
    title: "#3",
    image: "/image/connect.png",
    text:
      "Connect with each other via Großjungig AI platform and agree on the test period, sign a contract, and pay for the room.",
  },

  {
    title: "#4",
    image: "/image/test.png",
    text:
      "After the test period, your contract is prolonged every month unless you cancel it with one month notice.",
  },
  {
    title: "#5",
    image: "/image/pay.png",
    text:
      "Young person: payment is secure and fast. You only pay for the room, and the deposit is returned within one week of moving out.",
  },
  {
    title: "#6",
    image: "/image/save.png",
    text:
      "Senior citizens: get secure payment. Everything is transparent. Money goes directly to your bank account.",
  },
];

const card3 = [
  {
    text:
      "We’ve learnt so much from each other. It’s nice to have someone to talk to.",
    source: "Ulrich, 64",
  },
];

class Home extends Component {
  render() {
    const lang = localStorage.getItem("lang");
    return (
      <>
        <div className="home-component">
          <MainPanel>
            <H1 style={{ textAlign: "center" }}>
              Find your second grand family
            </H1>
            <RowChoose>
              {homeLocales.choose[lang]}:
              <Link to="/berlin">
                <Button label={homeLocales.offers[lang]}></Button>
              </Link>
              <SecButton>{homeLocales.requests[lang]}</SecButton>
            </RowChoose>
            <RowSelect>
              <SearchField
                placeholder={homeLocales.city[lang]}
                input=""
              ></SearchField>
              <PrimaryButton>{homeLocales.search[lang]}</PrimaryButton>
            </RowSelect>
          </MainPanel>
        </div>
        <Mission id="about">
          <h2 style={{ color: "#202020", fontWeight: "500" }}>
            Grossjungig is reinventing intergenerational co-living in big cities
            by bringing seniors and youth together. <br /> We make the world
            more connected and promote social cohesion.
          </h2>
        </Mission>
        <Why>
          <h3 style={{ fontSize: "25px", color: "black", textAlign: "center" }}>
            Why should You use Großjungig?
          </h3>
          <div className="why-use">
            {cards.map(({ title, text, image }, index) => (
              <Card key={index} title={title} text={text} image={image} />
            ))}
          </div>
        </Why>
        <h3
          id="how-it-works"
          style={{
            margin: "1.5rem",

            fontSize: "25px",
            color: "black",
            textAlign: "center",
          }}
        >
          How does it work?
        </h3>
        <HowGrid>
          {howCards.map(({ title, image, text }, index) => (
            <Card2 key={index} title={title} text={text} image={image} />
          ))}
        </HowGrid>
        <SecPanel>
          <Card3 text={card3[0].text} source={card3[0].source} />
        </SecPanel>
        <CommunityPanel id="community">
          <p>Community</p>
          <img
            src="/image/community-group.png"
            alt="community"
            style={{ width: "100%", height: "auto" }}
          />
        </CommunityPanel>
        <ContactPanel>
          <p>Contact</p>
          <img
            src="/image/contact.png"
            alt="contact"
            style={{ width: "100%", height: "auto" }}
          />
        </ContactPanel>
      </>
    );
  }
}

export default Home;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    -4px -4px 8px rgba(255, 255, 255, 0.15);
  background-color: white;
  margin: 3rem;
  padding: 0.5rem;

  /* Media Queries: Tablet */
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
  /* Media Queries: Desktop */
  @media screen and (min-width: 1060px) {
    margin: 8rem;
    padding: 8rem;
  }
`;

const SecPanel = styled.div`
  background-image: url("./image/learning.png");
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    /* height: 400px; */
    padding: 6rem;
  }

  @media (min-width: 1060px) {
    padding: 10rem;
  }
`;

const RowChoose = styled.div`
  display: flex;
  padding: 0.15rem 0.5rem;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const RowSelect = styled.div`
  display: flex;
  padding: 0.15rem;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Mission = styled.div`
  text-align: center;
  padding: 1rem;
  font-style: normal;
  font-size: 1rem;
`;

const Why = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0rem;

  /* Media Queries: Tablet Portrait */
  @media screen and (min-width: 768px) {
    padding: 1rem 10rem;
  }
  /* Media Queries: Desktop */
  @media screen and (min-width: 1060px) {
    padding: 1.5rem 10rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const HowGrid = styled.div`
  display: grid;
  grid-gap: 0.3rem;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 0rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-top: 1.5rem;
  /* Media Queries: Tablet Portrait */
  @media screen and (min-width: 768px) {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
  /* Media Queries: Desktop */
  @media screen and (min-width: 1060px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const CommunityPanel = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding-top: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  line-height: 26px;
  color: black;
  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
    padding-top: 1.5rem;
  }

  @media (min-width: 1060px) {
    margin-bottom: 0.5rem;
    padding-top: 1.5rem;
  }
`;

const ContactPanel = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  line-height: 26px;
  color: black;
`;
