import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const RegisterContent = styled.section`
  padding: 20px;

  @media (min-width: 961px) {
    padding: 80px 40px;
  }
`;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      password: "",
      password2: "",
      Country: "",
      Skills: "",
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
    console.log("handleSubmit");
    console.log(this.state.username);
    console.log(this.state.password);

    axios
      .post("/api/register", {
        username: this.state.username,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dateOfBirth: this.state.dateOfBirth,
        password: this.state.password,
        password2: this.state.password2,
        Country: this.state.country,
        Skills: this.state.skills
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
            Country: res.data.country,
            Skills: res.data.skills
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("Reghister error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <RegisterContent>
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
              Email:
              <input
                name="email"
                type="text"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <label>
              First Name:
              <input
                name="firstName"
                type="text"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                name="lastName"
                type="text"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <label>
              Date of Birth:
              <input
                name="dateOfBirth"
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
            <label>
              Password once again:
              <input
                name="password2"
                type="password"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <label>
              Country:
              <input
                name="country"
                type="text"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <label>
              Skills:
              <input
                name="skills"
                type="text"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </RegisterContent>
      );
    }
  }
}

export default Register;
