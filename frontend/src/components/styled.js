import styled, { css } from "styled-components";

export const basicButtonCSS = css`
  padding: 0.5rem 1.5rem;
  margin: 0.25rem;
  border-radius: 34px;
`;

export const Button = styled.button`
  ${basicButtonCSS};
`;

export const PrimaryButton = styled.button`
  ${basicButtonCSS};
  background-color: ${(props) => props.theme.main};
  border-style: none;
`;
