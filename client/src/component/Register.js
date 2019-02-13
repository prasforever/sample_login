import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import * as style from "./styles";

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
      redirectTo: null,
      countries: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/getCountries", {})
      .then(res => {
        if (res.status === 200) {
          this.setState({
            countries: res.data
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDDChange = selected => {
    this.setState({
      Country: selected.label
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post("/api/register", {
        username: this.state.username,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dateOfBirth: this.state.dateOfBirth,
        password: this.state.password,
        password2: this.state.password2,
        Country: this.state.Country,
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
        console.log("Register error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <style.CardWrapper>
          <style.CardHeader>
            <style.CardHeading>Login</style.CardHeading>
          </style.CardHeader>

          <style.CardBody>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <style.CardFieldset>
                <style.CardInput
                  name="username"
                  placeholder="Username"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardInput
                  name="email"
                  placeholder="Email"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardInput
                  name="firstName"
                  placeholder="First name"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardInput
                  name="lastName"
                  placeholder="Last name"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardInput
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardInput
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>

              <style.CardFieldset>
                <style.CardInput
                  name="password2"
                  placeholder="Password Again"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardSelectInput
                  options={this.state.countries}
                  placeholder="Country"
                  type="text"
                  onChange={this.handleDDChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardInput
                  name="skills"
                  placeholder="Skills"
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset />
              <style.CardFieldset>
                <style.CardButton type="submit">Sign Up</style.CardButton>
              </style.CardFieldset>
            </form>
          </style.CardBody>
        </style.CardWrapper>
      );
    }
  }
}

export default Register;
