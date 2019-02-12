import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./component/Header";
import Landing from "./component/Landing";
import Login from "./component/Login";
import Profile from "./component/Profile";
import NotFound from "./component/NotFound";

import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 961px) {
    width: 75%;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
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
