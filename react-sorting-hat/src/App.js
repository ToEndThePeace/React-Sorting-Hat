import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Splash from "./components/Splash";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

class App extends React.Component {
  render() {
    return (
      <StyledApp className="App">
        <Switch>
          <Route path="/quiz" component={Quiz} />
          <Route path="/results" component={Results} />
          <Route path="/" component={Splash} />
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
