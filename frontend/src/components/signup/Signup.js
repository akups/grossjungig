import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import signupLocales from "../../locales/locales.signup.json";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    role: "senior",
    redirect: false,
    message: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKENDURL}api/auth/signup`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
      })
      .then((response) => {
        console.log("RSPONSE", response);
        this.props.setUser(response.data);
        this.props.history.push("/userportal");
      })
      .catch((err) => {
        this.setState({
          message: err.response.data.message,
        });
      });
  };

  setFormState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChange = (event) => {
    this.setState({ role: event.target.value });
  };

  render() {
    const lang = localStorage.getItem("lang");

    if (this.state.redirect) {
      return <Redirect to="/userportal" />;
    }
    return (
      <div className="full-block">
        <div className="side-view">
          <img src="../image/signup.png" alt="singup-side-view" />
        </div>
        <div className="signup-component">
          <h2>{signupLocales.welcome[lang]}</h2>
          <h1>{signupLocales.grossjungig[lang]}</h1>
          <h3>{signupLocales.title[lang]}</h3>
          <div className="signup-container">
            <form>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.setFormState}
                type="text"
              />
              <label htmlFor="email">{signupLocales.email[lang]}</label>
              <input
                name="email"
                id="email"
                type="text"
                value={this.state.email}
                onChange={this.setFormState}
              />
              <label htmlFor="password">{signupLocales.password[lang]}</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.setFormState}
              />
              <label htmlFor="role">{signupLocales.role[lang]}</label>
              <select
                name="role"
                id="role"
                value={this.state.role}
                onChange={this.onChange}
              >
                <option value={"senior"}>{signupLocales.senior[lang]}</option>
                <option value={"youth"}>{signupLocales.youth[lang]}</option>
              </select>
              <br />
              <button onClick={this.handleSubmit} type="submit">
                {signupLocales.submit[lang]}
              </button>
            </form>
          </div>
          {this.state.message && <p>{this.state.message}</p>}
        </div>
      </div>
    );
  }
}

export default Signup;
