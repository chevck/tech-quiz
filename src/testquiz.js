import React from "react";
import ReactDOM from "react-dom";
//import { Check } from "./components/Check";
import { Questions } from "./questions";
import { QuestionsRemains } from "./components/notFinishedAnswering";
import { QuestionsFinished } from "./components/FinishedAnswering";

import { Evaluation } from "./components/AssessmentResult";
import './quiz.css'

export class QuizQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      count: 0,
      points: 0,
      missedQuestions: [],
      finsihed: false,
      optionsButton: false,
      timer: null,
      startButton: true,
      nextButton: true,
      counttwo: 0,
      wrongOption: null,
      selectedId: null,
      colorButton: null,
      correctanswerId: null,
      begin: "",
      timeCount: null,
      pointsPercentage: null,
      totalPoints: 120,
      clickTimes: 0,
      end: "",
      timerState: true,
      timerCount: 0,
      timeWord: ""
    };
  }

  incrementCounter() {
    this.setState({ timeWord: "", timerState: true, timerCount: 0 });
    if (this.state.i < Questions.length - 1) {
      var counter = Questions[this.state.i + 1].time;
      var self = this;
      var newYearCountdown = setInterval(function() {
        console.log(counter);
        //alert(counter);
        const buttonTimer = self.state.timerState;
        if (buttonTimer === true) {
          self.setState({ timerCount: counter });
          counter--;
          if (counter < 0) {
            console.log("HAPPY NEW YEAR!!");
            clearInterval(newYearCountdown);
            self.setState({
              timeWord: "You ran out of time!",
              optionsButton: true,
              nextButton: false
            });
          }
          // return counter;
        } else {
          clearInterval(newYearCountdown);
        }
      }, 1000);
    }

    this.setState({
      colorButton: "",
      correctanswerId: null,
      selectedId: null,
      clickTimes: this.state.clickTimes + 1
    });
    const TimesClicked = this.state.clickTimes;

    //alert(this.state.clickTimes)
    if (this.state.i >= 1 && TimesClicked < 1) {
      //alert(true);
      let notanswered = this.state.missedQuestions;
      notanswered.push(Questions[this.state.i].id);
      this.setState(
        ({ missedQuestions: notanswered } = () =>
          console.log(this.state.missedQuestions))
      );
    }
    this.setState({
      begin: "",
      nextButton: true,
      startButton: true,
      end: "Points: " + this.state.points,
      optionsButton: ""
    });
    if (this.state.i < Questions.length - 1) {
      const j = this.state.i + 1;
      this.setState({ i: j, timer: Questions[this.state.i + 1].time });
    } else {
      alert("Quiz is finished");
      this.setState({ finished: true });
    }
    this.setState({ clickTimes: 0 });
  }

  restartQuiz = e => {
    //this.setState({optionsButton: false})
    this.setState({
      i: 0,
      finished: false,
      count: 0,
      points: 0,
      counttwo: 0,
      missedQuestions: [],
      timer: null,
      colorButton: "",
      begin: "Sample Question:",
      end: "This is a sample question, there is no point awarded",
      nextButton: true,
      startButton: true,
      timerCount: 0
    });
  };

  giveFeedback() {
    if (this.state.finished === true) {
      const percent = (this.state.points / this.state.totalPoints) * 100;

      return (
        <QuestionsFinished
          count={this.state.i}
          missedquestions={this.state.missedQuestions}
          points={this.state.points}
          restartquiz={this.restartQuiz.bind(this)}
          percent={percent}
        />
      );
    } else {
      return (
        <QuestionsRemains
          begin={this.state.begin}
          count={this.state.i}
          startbtn={this.state.startButton}
          increasecounter={this.incrementCounter.bind(this)}
          nextbtn={this.state.nextButton}
          end={this.state.end}
          timercount={this.state.timerCount}
          timeword={this.state.timeWord}
          correctbtn={this.state.correctanswerId}
          selectedbtn={this.state.selectedId}
          optionsbtn={this.state.optionsButton}
          answerfunc={this.displayAnswer.bind(this)}
        />
      );
    }
  }

  renderCheck() {
    if (this.check === 0) {
      this.setState({ optionsButton: true });
    }
  }

  displayAnswer(e) {
    this.setState({ timerState: false, clickTimes: this.state.clickTimes + 1 });
    const answer = e.target.value;
    const selectedAnswerID = e.target.id;
    //alert(selectedAnswerID);
    const correctAnswerID = Questions[this.state.i].correctID;
    console.log("first: " + selectedAnswerID);
    this.setState({
      selectedId: selectedAnswerID,
      correctanswerId: correctAnswerID
    });
    //alert(this.state.selectedId);
    const correctanswer = Questions[this.state.i].correct;
    if (this.state.count < 1) {
      this.setState({ startButton: false, nextButton: true });
      const newcount = this.state.count + 1;
      this.setState({ count: newcount });
    } else {
      this.setState({ nextButton: false });
    }
    this.setState({ optionsButton: true });
    if (answer === correctanswer) {
      const questionPoint = Questions[this.state.i].pointer;
      const newPoints = this.state.points + questionPoint;
      this.setState({ points: newPoints, colorButton: "green" });
    } else {
      // alert("wrong");
      this.setState({ colorButton: "red" });
      //const missedQuestion = Questions[this.state.i].id;
      if (this.state.counttwo < 1) {
        const newCountTwo = this.state.counttwo + 1;
        this.setState({ counttwo: newCountTwo });
      } else {
        let missed = this.state.missedQuestions;
        missed.push(Questions[this.state.i].id);
        this.setState(
          ({ missedQuestions: missed } = () =>
            console.log(this.state.missedQuestions))
        );
      }
    }
  }

  componentDidMount() {
    this.restartQuiz();
  }

  render() {
    return <div>{this.giveFeedback()}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<QuizQuestions />, rootElement);
