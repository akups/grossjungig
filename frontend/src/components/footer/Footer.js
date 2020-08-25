import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Root>
      <ContactPanel>
        <p>Großjungig AI</p>
        <p>Bruchwitzstraße 13</p>
        <p>12247 Berlin</p>
      </ContactPanel>
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
  padding: 3rem;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
`;

const ContactPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 3rem;
  padding-left: 3rem;
  p {
    text-align: left;
    margin: 0;
  }
`;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const SocialPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 3rem;
  padding-left: 3rem;
  margin-top: 0rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #f9f8f8;
  padding: 0.25rem 1rem;
`;

const FooterLinkSmall = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #f9f8f8;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
`;

const FooterBig = styled.p`
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #f9f8f8;
  padding: 0.25rem 1rem;
`;

const FooterSmall = styled.p`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #f9f8f8;
  padding: 0.25rem 1rem;
`;
