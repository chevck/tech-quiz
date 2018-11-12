import React from "react";
import { Questions } from "../questions.js";

export class Evaluation extends React.Component {
  render() {
    return this.props.missedquestions.map(k => {
      //alert(k);
      return (
        <div>
          <center>
            <h4> {Questions[k].question} </h4>
            Correct Answer: {Questions[k].correct}
          </center>
        </div>
      );
    });
  }
}
