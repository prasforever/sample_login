import React, { Component } from "react";
import styled from "styled-components";

const LoginContent = styled.section`
  padding: 20px;

  @media (min-width: 961px) {
    padding: 80px 40px;
  }
`;

class Login extends Component {
  render() {
    return <LoginContent>Login Page</LoginContent>;
  }
}

export default Login;
