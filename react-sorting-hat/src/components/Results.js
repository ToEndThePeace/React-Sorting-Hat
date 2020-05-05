import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Results = (props) => {
  const { house } = props.location.state;
  return (
    <StyledResults>
      <h1>RESULTS</h1>
      <Link to="/">Go Home</Link>
      <div>{house}</div>
    </StyledResults>
  );
};

const StyledResults = styled.section``;

export default Results;
