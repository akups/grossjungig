import styled from "styled-components";

export const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    -4px -4px 8px rgba(255, 255, 255, 0.15);
  background-color: white;
  margin: 3rem;
  padding: 0.5rem;

  /* Media Queries: Tablet */
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
  /* Media Queries: Desktop */
  @media screen and (min-width: 1060px) {
    margin: 8rem;
    padding: 6rem;
  }
`;

export const SecPanel = styled.div`
  background-image: url("./image/learning.png");
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    /* height: 400px; */
    padding: 6rem;
  }

  @media (min-width: 1060px) {
    padding: 10rem;
  }
`;

export const RowChoose = styled.div`
  display: flex;
  padding: 0.15rem 0.5rem;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const RowSelect = styled.div`
  display: flex;
  padding: 0.15rem;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Mission = styled.div`
  text-align: center;
  padding: 1rem;
  font-style: normal;
  font-size: 1rem;
`;

export const Why = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0rem;

  /* Media Queries: Tablet Portrait */
  @media screen and (min-width: 768px) {
  }
  /* Media Queries: Desktop */
  @media screen and (min-width: 1060px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const HowGrid = styled.div`
  display: grid;
  grid-gap: 0.3rem;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 0rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-top: 1.5rem;
  /* Media Queries: Tablet Portrait */
  @media screen and (min-width: 768px) {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    grid-template-columns: auto auto auto;
  }
  /* Media Queries: Desktop */
  @media screen and (min-width: 1060px) {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: auto auto auto;
    justify-content: center;
    margin: 2rem;
    align-items: center;
    padding-right: 8rem;
    padding-left: 8rem;
  }
`;

export const CommunityPanel = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding-top: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  line-height: 26px;
  color: black;
  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
    padding-top: 1.5rem;
  }

  @media (min-width: 1060px) {
    margin-bottom: 0.5rem;
    margin-top: 11rem;
    padding-top: 1.5rem;
  }
`;

export const ContactPanel = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  line-height: 26px;
  color: black;
`;
