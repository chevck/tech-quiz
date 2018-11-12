import React from "react";
import { Questions } from "../questions.js";

export class Options extends React.Component {
  render() {
    //alert("hey");

    const correctBtn = this.props.correctbtn;
    const selectedBtn = this.props.selectedbtn;
    //alert ("Correct: " + correctBtn);
    //alert ("Select:" + selectedBtn);
    return Questions[this.props.count].answers.map((option, index) => (
      <p>
        <button
          key={index}
          className="btn btn-block"
          style={{
            background:
              selectedBtn && selectedBtn == index
                ? index == correctBtn
                  ? "green"
                  : "red"
                : selectedBtn && correctBtn == index && "green"
          }}
          disabled={this.props.optionsbtn}
          id={index}
          value={option}
          onClick={this.props.answerfunc}
        >
          {option}
        </button>
      </p>
    ));
  }
}
