import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Question from "./Question";

import { questions, resultCalc } from "../assets/quizData";

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      curIndex: 0,
      answers: new Array(6).fill(null),
      finished: false,
      house: "slytherin"
    };
  }
  chooseAnswer = (ansIndex) => {
    this.setState({
      answers: Object.assign([...this.state.answers], {
        [this.state.curIndex]: ansIndex
      })
    });
    if (this.state.curIndex === 5) {
      //Final question complete
      this.setState({
        finished: true,
        curIndex: 6,
        house: resultCalc(this.state.answers)
      });
    } else {
      this.setState({
        curIndex: this.state.curIndex + 1
      });
    }
  };
  render() {
    return (
      <StyledQuiz>
        <h1>QUIZ</h1>
        <Link to="/">Go Home</Link>
        {this.state.curIndex != 6 && (
          <Question
            question={questions[this.state.curIndex]}
            chooseAnswer={this.chooseAnswer}
          />
        )}
        {this.state.finished && (
          <Link
            to={{
              pathname: "/results",
              state: {
                house: this.state.house
              }
            }}
          >
            View your Results!
          </Link>
        )}
      </StyledQuiz>
    );
  }
}

const StyledQuiz = styled.section``;

export default Quiz;
