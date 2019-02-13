import React, { Component } from "react";
import styled from "styled-components";

const LandingContent = styled.section`
  padding: 20px;

  @media (min-width: 961px) {
    padding: 80px 40px;
  }
`;

class Landing extends Component {
  render() {
    return <LandingContent>Landing Page</LandingContent>;
  }
}

export default Landing;
