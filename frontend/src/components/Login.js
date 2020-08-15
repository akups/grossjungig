import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import loginLocales from "../locales/locales.login.json";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
    message: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //1)

    axios
      .post(`${process.env.REACT_APP_BACKENDURL}api/auth/login`, {
        email: this.state.email,
        password: this.state.password,
      })
      //3)
      .then((response) => {
        console.log("loginuser", response.data);
        this.props.setUser(response.data);
        this.setState({
          redirect: true,
        });
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

  render() {
    const lang = localStorage.getItem("lang");
    // TODO: local should be injected using the context api, reading localStorage is expensive
    if (this.state.redirect) {
      return <Redirect to="/userportal" />;
    }
    return (
      <div className="login">
        <h1>{loginLocales.title[lang]}</h1>
        <h3>{loginLocales.prompt[lang]}</h3>
        <div className="login-form">
          <form>
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
            <button onClick={this.handleSubmit} type="submit">
              {loginLocales.login[lang]}
            </button>
          </form>
        </div>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}
export default Login;
