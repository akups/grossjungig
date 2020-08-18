import styled, { css } from "styled-components";

export const basicButtonCSS = css`
  padding: 0.5rem 1.5rem;
  margin: 0.25rem;
  border-radius: 34px;
`;

export const Button = styled.button`
  ${basicButtonCSS};
  border: 1px solid grey;
  background-color: white;
`;

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
