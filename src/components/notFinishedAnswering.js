import React from "react";
import { Questions } from "../questions.js";
import { Options } from "./Options";

export class QuestionsRemains extends React.Component {
  render() {
    //console.log(this.props);

    return (
      <div style={{ marginTop: "10%" }}>
        <div className="col-md-8 normalize">
          <div className="col-md-1 normalize" />
          <div className="col-md-10 normalize">
            <center>
              <h2>TEST QUESTIONS </h2>
              {/* <p> {this.state.i} </p>*/}
              <p>
                <h3 style={{ color: "blue" }}> {this.props.begin} </h3>
              </p>
              <p> {Questions[this.props.count].question} </p>

              <Options
                correctbtn={this.props.correctbtn}
                selectedbtn={this.props.selectedbtn}
                optionsbtn={this.props.optionsbtn}
                answerfunc={this.props.answerfunc}
                count={this.props.count}
              />

              <div className="col-md-6 normalize">
                <button
                  disabled={this.props.startbtn}
                  className="col-md-6 btn btn-block normalize"
                  style={{ width: "97%" }}
                  ref="btnstart"
                  onClick={this.props.increasecounter}
                >
                  Start
                </button>
              </div>

              <div className="col-md-6 normalize">
                <button
                  disabled={this.props.nextbtn}
                  className="btn btn-block normalize"
                  style={{ width: "97%" }}
                  ref="btnnext"
                  onClick={this.props.increasecounter}
                >
                  Next{" "}
                </button>
              </div>

              <br />
              <div style={{ marginTop: "5%" }}>
                <i>
                  <h4> {this.props.end} </h4>
                </i>
              </div>
            </center>
          </div>
          <div className="col-md-1 normalize"> </div>
        </div>

        <div className="col-md-4 normalize" style={{ marginTop: "8%" }}>
          <center>
            {" "}
            <b>
              <span style={{ fontSize: "100px" }}>{this.props.timercount}</span>
            </b>
            <h3> {this.props.timeword} </h3>
          </center>
        </div>
      </div>
    );
  }
}
