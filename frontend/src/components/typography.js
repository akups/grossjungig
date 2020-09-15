import styled, { css } from "styled-components";

export const h1CSS = css`
  font-family: "Poppins", sans-serif;
  font-style: medium;
  font-size: 2rem;
  /* height: 4.5rem; */
  color: #202020;
  @media screen and (min-width: 1060px) {
    font-size: 3rem;
  }
`;

export const H1 = styled.h1`
  ${h1CSS}
`;
