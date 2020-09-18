import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Root>
      {/* <ContactPanel>
        <p>Großjungig AI</p>
        <p>Bruchwitzstraße 13</p>
        <p>12247 Berlin</p>
      </ContactPanel> */}
      <MainPanel>
        <Row>
          <FooterLink> About </FooterLink>
          <FooterLink>How does it work </FooterLink>
          <FooterLink>Newsletter </FooterLink>
          <FooterLink>Community</FooterLink>
        </Row>
        <Row>
          <FooterLinkSmall>Privacy Policy</FooterLinkSmall>
          <FooterLinkSmall>Cookies</FooterLinkSmall>
          <FooterLinkSmall>Policy </FooterLinkSmall>
          <FooterLinkSmall>FAQ</FooterLinkSmall>
        </Row>
        <Row>
          <FooterBig>Großjungig AI</FooterBig>
        </Row>
        <Row>
          <FooterSmall>COPYRIGHT</FooterSmall>
          <img src="../image/copyright.png" alt="copyright" />
          <FooterSmall>2020 Grossjungig AI</FooterSmall>
        </Row>
      </MainPanel>
      <SocialPanel>
        <Row>
          <img src="../image/facebook.png" alt="facebook" />
          <img src="../image/instagram.png" alt="instagram" />
          <img src="../image/Twitter.png" alt="twitter" />
        </Row>
      </SocialPanel>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0.5rem;
  background-color: black;
  color: white;
  /*Media quries Destop*/
  @media (min-width: 1060px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 3rem;
    background-color: black;
    color: white;
    margin-left: auto;
    margin-right: auto;
  }
`;

// const ContactPanel = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   padding-right: 3rem;
//   padding-left: 3rem;
//   p {
//     text-align: left;
//     margin: 0;
//   }
// `;

const MainPanel = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  /*Media quries Destop*/
  @media (min-width: 1060px) {
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const SocialPanel = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 3rem;
  padding-left: 3rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #f9f8f8;
  padding: 0.25rem 0.2rem;
`;

const FooterLinkSmall = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #f9f8f8;
  padding: 0.25rem 0.2rem;
  text-transform: uppercase;
`;

const FooterBig = styled.p`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #f9f8f8;
  padding: 0.25rem 0.2rem;
`;

const FooterSmall = styled.p`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #f9f8f8;
  padding: 0.25rem 0.2rem;
`;
