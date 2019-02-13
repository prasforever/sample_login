import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "./component/Header";
import Landing from "./component/Landing";
import Login from "./component/Login";
import NotFound from "./component/NotFound";
import Profile from "./component/Profile";
import Register from "./component/Register";

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 961px) {
    width: 75%;
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
                <Route exact path="/" component={Landing} />
                <PropsRoute
                  path="/login"
                  component={Login}
                  loggedIn={this.state.loggedIn}
                  updateUser={this.updateUser}
                />
                <PropsRoute
                  path="/register"
                  component={Register}
                  loggedIn={this.state.loggedIn}
                  updateUser={this.updateUser}
                />

                <PropsRoute
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
                <Route component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </Wrapper>
      </div>
    );
  }
}

export default App;
