import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// Language Switcher Setup
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "de");
}

axios.get("/api/auth/loggedin").then((response) => {
  ReactDOM.render(
    <BrowserRouter>
      <App user={response.data} />
    </BrowserRouter>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
