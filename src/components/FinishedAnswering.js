import React from "react";
import { Evaluation } from "./AssessmentResult";

export class QuestionsFinished extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-8 normalize">
          <center>
            <span>
              {" "}
              Your score is: {this.props.points} points <br />
              <br /> Which is {Math.round(this.props.percent)}% of points
              obtainable
            </span>
            <br />
            <h3> Questions you got wrong </h3>
            <Evaluation
              key={this.props.count}
              missedquestions={this.props.missedquestions}
            />
            <br />
            <button
              className="btn btn-success"
              onClick={this.props.restartquiz}
            >
              {" "}
              Back to Home{" "}
            </button>
          </center>
        </div>
        <div className="col-md-4 normalize" />
      </div>
    );
  }
}
