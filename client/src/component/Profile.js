import React, { Component } from "react";
import styled from "styled-components";

const ProfileContent = styled.section`
  padding: 20px;

  @media (min-width: 961px) {
    padding: 80px 40px;
  }
`;

class Profile extends Component {
  getTableData() {
    if (this.props.loggedIn) {
      return (
        <tbody>
          {this.props.username ? (
            <tr>
              <td>Username:</td>
              <td>{this.props.username}</td>
            </tr>
          ) : (
            ""
          )}
          {this.props.email ? (
            <tr>
              <td>Email:</td>
              <td>{this.props.email}</td>
            </tr>
          ) : (
            ""
          )}
          {this.props.firstName ? (
            <tr>
              <td>First name:</td>
              <td>{this.props.firstName}</td>
            </tr>
          ) : (
            ""
          )}
          {this.props.lastName ? (
            <tr>
              <td>Last name:</td>
              <td>{this.props.lastName}</td>
            </tr>
          ) : (
            ""
          )}
          {this.props.dateOfBirth ? (
            <tr>
              <td>Date of Birth:</td>
              <td>{this.props.dateOfBirth}</td>
            </tr>
          ) : (
            ""
          )}
          {this.props.Country ? (
            <tr>
              <td>Country:</td>
              <td>{this.props.Country}</td>
            </tr>
          ) : (
            ""
          )}
          {this.props.Skills ? (
            <tr>
              <td>Skills:</td>
              <td>{this.props.Skills}</td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      );
    } else {
      return (
        <tbody>
          <tr>
            <td>Please Login </td>
          </tr>
        </tbody>
      );
    }
  }

  render() {
    return (
      <ProfileContent>
        <table>
          <thead>
            <tr>
              <th>User Profile</th>
            </tr>
          </thead>
          {this.getTableData()}
        </table>
      </ProfileContent>
    );
  }
}

export default Profile;
