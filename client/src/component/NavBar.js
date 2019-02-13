import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuItem = styled(NavLink)`
  font: 16px Arial, Helvetica, sans-serif;
  line-height: 40px;
  color: #ffffff;
  text-decoration: none;
  padding: 0 4px;
  text-align: center;

  @media (min-width: 961px) {
    padding: 0 15px;
  }
`;

const MenuBar = styled.nav`
  float: right;
`;

class NavBar extends Component {
  handleLogout(event) {
    event.preventDefault();
    axios
      .get("/api/logout")
      .then(res => {
        if (res.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: false,
            username: null,
            email: null,
            firstName: null,
            lastName: null,
            dateOfBirth: null,
            Country: null,
            Skills: null
          });
        }
      })
      .catch(error => {
        console.log("logout error: ");
        console.log(error);
      });
  }

  render() {
    switch (this.props.loggedIn) {
      case null:
        return;
      case false:
        return (
          <MenuBar>
            <MenuItem to="/register">Register</MenuItem>
            <MenuItem to="/login">Login</MenuItem>
          </MenuBar>
        );
      default:
        return (
          <MenuBar>
            <MenuItem to="/profile">Profile</MenuItem>
            <MenuItem to="#" onClick={this.handleLogout.bind(this)}>
              Logout
            </MenuItem>
          </MenuBar>
        );
    }
  }
}

export default NavBar;
