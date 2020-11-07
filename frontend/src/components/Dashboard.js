import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

import portalLocales from "../locales/locales.portal.json";
import UserCarousel from "../components/UserCarousel";

const Dashboard = (props) => {
  console.log("USER", props.user);

  const lang = localStorage.getItem("lang");
  const [isOpen, setIsOpen] = useState(false);

  const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:white;`;

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <div className="portal-container">
      <h1>
        {portalLocales.greeting[lang]} {props.user.name}!
      </h1>
      <article>{portalLocales.article[lang]}</article>
      <p></p>
      <Link to="/berlin">
        <button>{portalLocales.rooms[lang]}</button>
      </Link>
      <Link to="/map">
        <button>{portalLocales.map[lang]}</button>
      </Link>
      <Link to="/addroom">
        {props.user.role === "senior" ? (
          <button id="create-room-button" type="submit">
            {portalLocales.add[lang]}
          </button>
        ) : null}
      </Link>
      <button onClick={toggleModal}>Click me</button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <div>{/* leftimage */}</div>
        <div>
          <button onClick={toggleModal}>X</button>
          <UserCarousel></UserCarousel>
          <img src="" alt="gross mini logo" />
        </div>
      </StyledModal>
    </div>
  );
};

export default Dashboard;
