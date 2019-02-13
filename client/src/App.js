import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "./component/Header";
import Landing from "./component/Landing";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Register from "./component/Register";

const Wrapper = styled.section`
  margin: 0 auto;
`;

const MainContentBox = styled.header`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 961px) {
    width: 60%;
  }
`;

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      username: null,
      email: null,
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      Country: null,
      Skills: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null,
          email: null,
          firstName: null,
          lastName: null,
          dateOfBirth: null,
          Country: null,
          Skills: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Wrapper>
          <BrowserRouter>
            <div>
              <Header
                loggedIn={this.state.loggedIn}
                updateUser={this.updateUser}
              />

              <Switch>
                <MainContentBox>
                  <Route exact path="/" component={Landing} />
                  <PropsRoute
                    exact
                    path="/login"
                    component={Login}
                    loggedIn={this.state.loggedIn}
                    updateUser={this.updateUser}
                  />
                  <PropsRoute
                    exact
                    path="/register"
                    component={Register}
                    loggedIn={this.state.loggedIn}
                    updateUser={this.updateUser}
                  />

                  <PropsRoute
                    exact
                    path="/profile"
                    component={Profile}
                    loggedIn={this.state.loggedIn}
                    username={this.state.username}
                    email={this.state.email}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    dateOfBirth={this.state.dateOfBirth}
                    Country={this.state.Country}
                    Skills={this.state.Skills}
                  />
                </MainContentBox>
              </Switch>
            </div>
          </BrowserRouter>
        </Wrapper>
      </div>
    );
  }
}

export default App;
