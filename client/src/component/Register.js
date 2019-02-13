import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as style from "./styles";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "#e5195f"
  }),
  valueContainer: base => ({
    ...base,
    padding: "0 !important"
  }),

  container: base => ({
    ...base,
    margin: "0 !important",
    padding: "0 !important"
  }),
  control: (provided, state) => ({
    ...provided,
    border: "0 !important",
    // This line disable the blue border
    boxShadow: "0 !important",
    "&:hover": {
      border: "0 !important"
    }
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};

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
      countriesDropdown: [],
      skillsDropdown: [],
      skillsInput: "",
      showPasswordMismatchIcon: false,
      showUsernameUnvailableIcon: false,
      showEmailUnvailableIcon: false
    };
  }

  componentDidMount() {
    axios
      .get("/api/getCountries", {})
      .then(res => {
        if (res.status === 200) {
          this.setState({
            countriesDropdown: res.data
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });

    axios
      .post("/api/getSkills", {
        value: this.state.skillsInput
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            skillsDropdown: res.data
          });
        }
      })
      .catch(error => {
        console.log("Fetching skills Errored out: ");
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSkillsChange = selected => {
    var selectedSkills = [];
    selected.forEach(element => {
      selectedSkills.push(element.label);
    });
    this.setState({
      Skills: selectedSkills.toString()
    });
  };

  handleCountryChange = selected => {
    this.setState({
      Country: selected.label
    });
  };

  handleDDInputChange = input => {
    axios
      .post("/api/getSkills", {
        value: input
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            skillsDropdown: res.data
          });
        }
      })
      .catch(error => {
        console.log("Fetching skills Errored out: ");
        console.log(error);
      });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      showPasswordMismatchIcon: false,
      showUsernameUnvailableIcon: false,
      showEmailUnvailableIcon: false
    });

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
        Skills: this.state.Skills
      })
      .then(res => {
        if (res.status === 204) {
          this.setState({
            showPasswordMismatchIcon: true
          });
        }
        if (res.status === 205) {
          this.setState({
            showUsernameUnvailableIcon: true
          });
        }
        if (res.status === 206) {
          this.setState({
            showEmailUnvailableIcon: true
          });
        }

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
                {this.state.showUsernameUnvailableIcon ? (
                  <style.CardInputIcon>
                    <FontAwesomeIcon icon="exclamation-circle" size="lg" />
                  </style.CardInputIcon>
                ) : (
                  ""
                )}
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardInput
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={this.handleChange.bind(this)}
                  required
                />
                {this.state.showEmailUnvailableIcon ? (
                  <style.CardInputIcon>
                    <FontAwesomeIcon icon="exclamation-circle" size="lg" />
                  </style.CardInputIcon>
                ) : (
                  ""
                )}
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
                {this.state.showPasswordMismatchIcon ? (
                  <style.CardInputIcon>
                    <FontAwesomeIcon icon="exclamation-circle" size="lg" />
                  </style.CardInputIcon>
                ) : (
                  ""
                )}
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardSelectInput
                  options={this.state.countriesDropdown}
                  placeholder="Country"
                  styles={customStyles}
                  onChange={this.handleCountryChange.bind(this)}
                  required
                />
              </style.CardFieldset>
              <style.CardFieldset>
                <style.CardSelectInput
                  options={this.state.skillsDropdown}
                  placeholder="Skills"
                  styles={customStyles}
                  onChange={this.handleSkillsChange.bind(this)}
                  onInputChange={this.handleDDInputChange.bind(this)}
                  required
                  isMulti
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
