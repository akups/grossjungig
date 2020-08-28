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
      "Flexible and bespoke terms - the best solution for everyone. No more huge 'Weges', no more living alone in big family apartments!",
  },
];

const howR1Cards = [
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
];

const howR2Cards = [
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
      "Young person: payment is secure and fast — pay with your cards or PayPal. You only pay for the room, and the deposit is returned within one week of moving out.",
  },
  {
    title: "#6",
    image: "/image/save.png",
    text:
      "Senior citizens get paid securely at the end of each period. We will never charge you, money flows only in one direction — payment to the seniors.",
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
            <H1>Find your second grand family</H1>
            <Row>
              {homeLocales.choose[lang]}:
              <Link to="/berlin">
                <Button label={homeLocales.offers[lang]}></Button>
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
        <Mission id="about">
          <h2 style={{ color: "#202020" }}>
            Grossjungig is reinventing intergenerational co-living in big cities
            by bringing seniors and youth together. <br /> We make the world
            more connected and promote social cohesion.
          </h2>
        </Mission>
        <Why>
          <h3 style={{ fontSize: "25px", color: "black" }}>
            Why should You use Großjungig?
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {cards.map(({ title, text, image }, index) => (
              <Card key={index} title={title} text={text} image={image} />
            ))}
          </div>
        </Why>
        <h3
          id="how-it-works"
          style={{
            marginTop: "2rem",
            paddingTop: "9rem",
            fontSize: "25px",
            color: "black",
          }}
        >
          How does it work?
        </h3>
        <HowFirstRow>
          {howR1Cards.map(({ title, image, text }, index) => (
            <Card2 key={index} title={title} text={text} image={image} />
          ))}
        </HowFirstRow>
        <HowSecRow>
          {howR2Cards.map(({ title, image, text }, index) => (
            <Card2 key={index} title={title} text={text} image={image} />
          ))}
        </HowSecRow>
        <SecPanel>
          <Card3 text={card3[0].text} source={card3[0].source} />
        </SecPanel>
        <CommunityPanel id="community">
          <p>Community</p>
          <img src="/image/community-group.png" alt="community" />
        </CommunityPanel>
        <ContactPanel>
          <p>Contact</p>
          <img src="/image/contact.png" alt="contact" />
        </ContactPanel>
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

const SecPanel = styled.div`
  background-image: url("./image/learning.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  margin-top: 3rem;
  margin-bottom: 8rem;
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
  padding-top: 7rem;
  padding-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.2rem;
  font-style: normal;
  font-size: 20px;
`;

const Why = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0rem;
`;

const HowFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;
const HowSecRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

const CommunityPanel = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding-top: 7rem;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  line-height: 26px;
  color: black;
`;

const ContactPanel = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding-top: 7rem;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  line-height: 26px;
  color: black;
`;
