import React, { Component } from "react";
import styled from "styled-components";

const NotFoundContent = styled.section`
  padding: 20px;

  @media (min-width: 961px) {
    padding: 80px 40px;
  }
`;

class NotFound extends Component {
  render() {
    return <NotFoundContent>NotFound Page</NotFoundContent>;
  }
}

export default NotFound;
