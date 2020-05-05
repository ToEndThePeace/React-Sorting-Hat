import React from "react";
import styled from "styled-components";

const Question = (props) => {
  const { chooseAnswer } = props;
  const { question, responses } = props.question;
  return (
    <StyledQuestion>
      <h2>{question}</h2>
      <ul>
        {responses.map((x, index) => (
          <li
            onClick={() => {
              chooseAnswer(index);
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </StyledQuestion>
  );
};

const StyledQuestion = styled.div``;

export default Question;
