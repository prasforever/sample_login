import React, { Component } from "react";
import * as style from "./styles";

class Profile extends Component {
  getTableData() {
    if (this.props.loggedIn) {
      return (
        <style.CardBody>
          <style.CardTable>
            <style.CardTableBody>
              {this.props.username ? (
                <style.CardRow>
                  <style.CardFieldLeft>Username:</style.CardFieldLeft>
                  <style.CardFieldRight>
                    {this.props.username}
                  </style.CardFieldRight>
                </style.CardRow>
              ) : (
                ""
              )}
              {this.props.email ? (
                <style.CardRow>
                  <style.CardFieldLeft>Email:</style.CardFieldLeft>
                  <style.CardFieldRight>
                    {this.props.email}
                  </style.CardFieldRight>
                </style.CardRow>
              ) : (
                ""
              )}
              {this.props.firstName ? (
                <style.CardRow>
                  <style.CardFieldLeft>First name:</style.CardFieldLeft>
                  <style.CardFieldRight>
                    {this.props.firstName}
                  </style.CardFieldRight>
                </style.CardRow>
              ) : (
                ""
              )}
              {this.props.lastName ? (
                <style.CardRow>
                  <style.CardFieldLeft>Last name:</style.CardFieldLeft>
                  <style.CardFieldRight>
                    {this.props.lastName}
                  </style.CardFieldRight>
                </style.CardRow>
              ) : (
                ""
              )}
              {this.props.dateOfBirth ? (
                <style.CardRow>
                  <style.CardFieldLeft>Date of Birth:</style.CardFieldLeft>
                  <style.CardFieldRight>
                    {this.props.dateOfBirth}
                  </style.CardFieldRight>
                </style.CardRow>
              ) : (
                ""
              )}
              {this.props.Country ? (
                <style.CardRow>
                  <style.CardFieldLeft>Country:</style.CardFieldLeft>
                  <style.CardFieldRight>
                    {this.props.Country}
                  </style.CardFieldRight>
                </style.CardRow>
              ) : (
                ""
              )}
              {this.props.Skills ? (
                <style.CardRow>
                  <style.CardFieldLeft>Skills:</style.CardFieldLeft>
                  <style.CardFieldRight>
                    {this.props.Skills}
                  </style.CardFieldRight>
                </style.CardRow>
              ) : (
                ""
              )}
            </style.CardTableBody>
          </style.CardTable>
        </style.CardBody>
      );
    } else {
      return <style.CardBody>Please login to view details</style.CardBody>;
    }
  }

  render() {
    return (
      <style.CardWrapper>
        <style.CardHeader>
          <style.CardHeading>User Profile</style.CardHeading>
        </style.CardHeader>
        {this.getTableData()}
      </style.CardWrapper>
    );
  }
}

export default Profile;
