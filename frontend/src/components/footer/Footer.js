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
      </MainPanel>
      <SocialPanel></SocialPanel>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  display: flex;
  padding: 3rem;
  background-color: black;
  color: white;
`;

const ContactPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const SocialPanel = styled.div`
  display: flex;
  flex-direction: column;
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
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #f9f8f8;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
`;
