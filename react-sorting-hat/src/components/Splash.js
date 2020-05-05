import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Splash = (props) => {
  const {} = props;
  return (
    <StyledSplash>
      <h1>SPLASH</h1>
      <Link to="/quiz/">Begin Sorting</Link>
    </StyledSplash>
  );
};

const StyledSplash = styled.section``;

export default Splash;
