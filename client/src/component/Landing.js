import React, { Component } from "react";
import * as style from "./styles";

class Landing extends Component {
  render() {
    return (
      <style.CardWrapper>
        <style.CardHeader>
          <style.CardHeading>Home Page</style.CardHeading>
        </style.CardHeader>
        <style.CardBody>Please choose a menu option</style.CardBody>
      </style.CardWrapper>
    );
  }
}

export default Landing;
