import styled, { css } from "styled-components";
import React from "react";

export const basicButtonCSS = css`
  padding: 0.5rem 1.5rem;
  margin: 0.25rem;
  border-radius: 34px;
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
  background-color: white;
`;

export const Card = ({ title, image, text, alt }) => (
  <CardRoot>
    <CardTitle>{title}</CardTitle>
    <img src={image} alt={alt} />
    <CardText>{text}</CardText>
  </CardRoot>
);

const CardRoot = styled.div`
  border: 1px solid ${({ theme: { main } }) => main};
  border-radius: 6px;
  width: 325px;
`;

const CardTitle = styled.div`
  color: ${({ theme: { main } }) => main};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding: 0.5rem 0rem;
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
