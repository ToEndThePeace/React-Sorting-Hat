import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Splash from "./components/Splash";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <StyledApp className="App">
        <Switch>
          <Route path="/"><Splash /></Route>
          <Route path="/quiz"><Quiz /></Route>
          <Route path="/results"><Results /></Route>
        </Switch>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
