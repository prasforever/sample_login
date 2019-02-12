import React, { Component } from "react";

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
  render() {
    return (
      <MenuBar>
        <MenuItem to="/login">Login</MenuItem>
        <MenuItem to="/profile">Profile</MenuItem>
        <MenuItem to="/logout">Logout</MenuItem>
      </MenuBar>
    );
  }
}
export default NavBar;
