import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./NavBar";

const HeaderContent = styled.header`
  background-color: #292c2f;
  box-shadow: 0 1px 1px #ccc;
  padding: 20px 40px;
  height: 80px;
  color: #ffffff;
  box-sizing: border-box;
  top: -100px;
`;

const LogoContent = styled(NavLink)`
  float: left;
  font: normal 28px Cookie, Arial, Helvetica, sans-serif;
  line-height: 40px;
  margin: 0;
  color: #ffffff;
  text-decoration: none;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContent>
        <LogoContent to="/">MyApp</LogoContent>
        <NavBar />
      </HeaderContent>
    );
  }
}

export default Header;
