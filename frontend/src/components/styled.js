import styled, { css } from "styled-components";
import React from "react";

export const basicButtonCSS = css`
  padding: 0.5rem 1.5rem;
  margin: 0.25rem;
  border-radius: 0.9375rem;
`;

export const submitButtons = css`
  margin-top: 3vh;
  border: none;
  padding: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
  background: #baafa1;
  border-radius: 1rem;
  color: #ffffff;
`;

export const SimpleButton = styled.button`
  ${basicButtonCSS};
  border: 1px solid grey;
  background-color: white;
`;
export const Button = ({ onClick, label }) => (
  <SimpleButton onClick={onClick}>{label}</SimpleButton>
);

export const PrimaryButton = styled.button`
  ${basicButtonCSS};
  background-color: ${(props) => props.theme.main};
  border-style: none;
`;

export const SecButton = styled.button`
  ${basicButtonCSS};
  border: 1px solid grey;
  background-color: black;
  color: white;
`;

export const SearchField = styled.input`
  ${basicButtonCSS};
  border: 1px solid grey;
  background-color: #f2f0f0;
`;

export const Card = ({ title, image, text, alt }) => (
  <CardRoot>
    <CardTitle>{title}</CardTitle>
    <img src={image} alt={alt} />
    <CardText>{text}</CardText>
  </CardRoot>
);
export const Card2 = ({ title, image, text, alt }) => (
  <Card2Root>
    <Card2Title>{title}</Card2Title>
    <img src={image} alt={alt} width="150px" />
    <Card2Text>{text}</Card2Text>
  </Card2Root>
);

export const Card3 = ({ text, source }) => (
  <Card3Root>
    <Card3Text>{text}</Card3Text>
    <Card3Source>{source}</Card3Source>
  </Card3Root>
);

export const NavbarLink = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: black;
  margin: auto;
  padding: 0rem 1rem;
`;

const CardRoot = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2px solid lightgray;
  border-radius: 6px;
  margin: 1.5rem;
  /*Media queries Desktop*/
  @media screen and (min-width: 1060px) {
    .why-use {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;

const CardTitle = styled.div`
  color: ${({ theme: { main } }) => main};
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.625rem;
  text-align: center;
  padding: 0.5rem 0rem;
  /* Media Queries: Tabled Portrait */
  /* @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1060px) {
    font-size: 1.5rem;
  } */
`;

const CardText = styled.div`
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: 1rem;
`;

const Card2Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  /* non-active */
  border: 0.5px solid #baafa1;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0.5rem;
`;

const Card2Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 2px solid;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  /* white */
  color: #f9f8f8;
  /* neun */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15),
    -2px -2px 8px rgba(255, 255, 255, 0.15);
  margin-left: auto;
  margin-right: auto;
`;

const Card2Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 0.5rem;

  /* #202020 */

  color: #202020;
`;

const Card3Root = styled.div`
  position: relative;
  background: #ffffff;
  /* non-active */
  border: 0.2px solid #baafa1;
  box-sizing: border-box;
  width: 50%;
  height: 60%;
  /* neun */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15),
    -2px -2px 8px rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  top: 75%;
  left: 50%;
  padding: 0.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
    margin-top: 4rem;
  }
  @media (min-width: 1060px) {
    padding: 2rem 3rem;
    margin: 9rem;
  }
`;

const Card3Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-align: justify;
  /* #202020 */
  color: #202020;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1060px) {
    font-size: 20px;
  }
`;

const Card3Source = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* identical to box height */
  text-align: center;
  /* #202020 */
  color: #202020;
  position: absolute;
  right: 1rem;
  @media (min-width: 768px) {
    font-size: 16px;
    right: 2rem;
  }
  @media (min-width: 1060px) {
    font-size: 18px;
    right: 3rem;
  }
`;
