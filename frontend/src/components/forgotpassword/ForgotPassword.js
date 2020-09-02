import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import loginLocales from "../../locales/locales.login.json";
import "./forgotpassword.css";
import forgotLocales from "../../locales/locales.forgotpasswrod.json";

const title = {
  pageTitle: "Forgot Password Screen",
};

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      showError: false,
      messageFromServer: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = (e) => {
    e.preventDefault();
    if (this.state.email === "") {
      this.setState({
        showError: false,
        messageFromServer: "",
      });
    } else {
      axios
        .post(`${process.env.REACT_APP_BACKENDURL}forgotPassword`, {
          email: this.state.email,
        })
        .then((response) => {
          console.log(response.data);
          if (
            response.data === "Error while authorizing" ||
            response.data === "Error while logging in"
          ) {
            this.setState({
              showError: true,
              messageFromServer: "",
            });
          } else if (response.data === "email sent") {
            this.setState({
              showError: false,
              messageFromServer: "email sent",
            });
          }
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  };

  render() {
    const { email, messageFromServer, showNullError } = this.state;
    const lang = localStorage.getItem("lang");
    return (
      <div className="full-block">
        <div className="side-view">
          <img src="../image/signup.png" alt="login-side-view" />
        </div>
        <div className="login">
          <h2>{forgotLocales.welcome[lang]}</h2>
          <h1>{forgotLocales.grossjungig[lang]}</h1>
          <h3>{forgotLocales.prompt[lang]}</h3>
          <div className="profile-form">
            <form onSubmit={this.sendEmail}>
              <label htmlFor="email">{loginLocales.email[lang]}</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
              <button type="submit">{forgotLocales.submit[lang]}</button>
            </form>
            {showNullError && (
              <div>
                <p>The email address cannot be null.</p>
              </div>
            )}
            {/* {showError && (
              <div>
                <p>
                  The email address isn't recognized. Please try again or
                  signup for a new account
                </p>
              </div>
            )} */}
            {messageFromServer === "email sent" && (
              <div>
                <h3>Password Reset Email Successfully Sent!</h3>
              </div>
            )}
            <Link to="/">
              <button type="">{forgotLocales.return[lang]}</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
