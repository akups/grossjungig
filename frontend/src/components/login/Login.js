import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import "./login.css";
import loginLocales from "../../locales/locales.login.json";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
    message: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_BACKENDURL}api/auth/login`,
      {
        email: this.state.email,
        password: this.state.password,
      }
    );

    this.props.setUser(response.data);
    this.setState({
      redirect: true,
    });
  };

  setFormState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const lang = localStorage.getItem("lang");
    // TODO: local should be injected using the context api, reading localStorage is expensive
    if (this.state.redirect) {
      return <Redirect to="/userportal" />;
    }
    return (
      <div className="full-block">
        <div className="side-view">
          <img src="../image/signup.png" alt="login-side-view" />
        </div>
        <div className="login">
          <h2>{loginLocales.welcome[lang]}</h2>
          <h1>{loginLocales.grossjungig[lang]}</h1>
          <h3>{loginLocales.prompt[lang]}</h3>
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">{loginLocales.email[lang]}</label>
              <input
                type="text"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.setFormState}
              />
              <label htmlFor="password">{loginLocales.password[lang]}</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.setFormState}
              />
              <h5>
                Don’t remember your password?{" "}
                <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                  Click here
                </Link>
              </h5>
              <button id="login-submit-button" type="submit">
                {loginLocales.login[lang]}
              </button>
            </form>
          </div>
          {this.state.message && <p>{this.state.message}</p>}
        </div>
      </div>
    );
  }
}
export default Login;
