import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const LoginContent = styled.section`
  padding: 20px;

  @media (min-width: 961px) {
    padding: 80px 40px;
  }
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post("/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: res.data.username,
            email: res.data.email,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            dateOfBirth: res.data.dateOfBirth,
            Country: res.data.Country,
            Skills: res.data.Skills
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <LoginContent>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Username:
              <input
                name="username"
                type="text"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                name="password"
                type="password"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </LoginContent>
      );
    }
  }
}

export default Login;
