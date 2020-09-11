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
            <H1>Find your second grand family</H1>
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
          <h2 style={{ color: "#202020" }}>
            Grossjungig is reinventing intergenerational co-living in big cities
            by bringing seniors and youth together. <br /> We make the world
            more connected and promote social cohesion.
          </h2>
        </Mission>
        <Why>
          <h3 style={{ fontSize: "25px", color: "black", textAlign: "center" }}>
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
            textAlign: "center",
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
          <img
            src="/image/community-group.png"
            alt="community"
            style={{ maxWidth: "100%", height: "auto" }}
          />
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
  align-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    -4px -4px 8px rgba(255, 255, 255, 0.15);
  background-color: white;
  padding: 3.5rem 4rem;
  margin: 6rem;
  margin-bottom: 20rem;
  margin-top: 8rem;
  width: 54.375rem;
  height: 20rem;
  /* Media Queries: Tablet Landscape */
  @media screen and (max-width: 1060px) {
    width: 69%;
    margin-left: 15%;
    padding: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    border: none;
  }
`;

const SecPanel = styled.div`
  background-image: url("./image/learning.png");
  background-repeat: no-repeat;
  background-size: auto;
  height: 50rem;
  margin-top: 3rem;
  margin-bottom: 8rem;
  @media (min-device-width: 600px) {
    img[data-src-600px] {
      content: attr(data-src-600px, "./image/learning.png");
    }
  }

  @media (min-device-width: 800px) {
    img[data-src-800px] {
      content: attr(data-src-800px, "./image/learning.png");
    }
  }
`;

const RowChoose = styled.div`
  display: flex;
  padding: 0.15rem 0.5rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 2.25rem;
  width: 20.625rem;
`;

const RowSelect = styled.div`
  display: flex;
  padding: 0.15rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 3rem;
  width: 27.625rem;
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
  font-size: 1.25rem;
  /* Media Queries: Tablet Landscape */
  @media screen and (max-width: 1060px) {
    width: 65%;
    margin-left: 3%;
  }
  /* Media Queries: Tabled Portrait */
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    border: none;
  }
  /* Media Queries: Mobile */
  @media screen and (max-width: 360px) {
    width: 250%;
    text-align: center;
  }
`;

const Why = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0rem;
  /* Media Queries: Tablet Landscape */
  @media screen and (max-width: 1060px) {
    width: 30%;
    margin-left: 5%;
  }
  /* Media Queries: Tablet Portrait */
  @media screen and (max-width: 768px) {
    width: 50%;
    margin: 0;
    border: none;
  }
  /* Media Queries: Mobile */
  @media screen and (max-width: 360px) {
    width: 120%;
  }
`;

const HowFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  @media screen and (max-width: 1060px) {
    width: 30%;
    margin-left: 5%;
  }
`;
const HowSecRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  @media screen and (max-width: 1060px) {
    width: 30%;
    margin-left: 5%;
  }
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
