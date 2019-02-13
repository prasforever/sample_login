import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./NavBar";

const MainContentBox = styled.header`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 961px) {
    width: 60%;
  }
`;

const HeaderBar = styled.header`
  background-color: #292c2f;
  box-shadow: 0 1px 1px #ccc;
  padding: 20px;
  height: 80px;
  color: #ffffff;
  box-sizing: border-box;
  top: -100px;

  @media (min-width: 961px) {
    padding: 20px 40px;
  }
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
      <HeaderBar>
        <MainContentBox>
          <LogoContent to="/">MyApp</LogoContent>
          <NavBar
            updateUser={this.props.updateUser}
            loggedIn={this.props.loggedIn}
          />
        </MainContentBox>
      </HeaderBar>
    );
  }
}

export default Header;
