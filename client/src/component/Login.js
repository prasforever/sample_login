import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import * as style from "./styles";

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
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset />
              <style.CardFieldset>
                <style.CardButton type="submit">Sign In</style.CardButton>
              </style.CardFieldset>
            </form>
          </style.CardBody>
        </style.CardWrapper>
      );
    }
  }
}

export default Login;
