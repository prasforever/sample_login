import React, { Component } from "react";
import styled from "styled-components";

const ProfileContent = styled.section`
  padding: 20px;

  @media (min-width: 961px) {
    padding: 80px 40px;
  }
`;

class Profile extends Component {
  render() {
    return <ProfileContent>Profile Page</ProfileContent>;
  }
}

export default Profile;
