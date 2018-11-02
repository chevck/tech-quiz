import React from "react";
import ReactDOM from "react-dom";
import Countdown from 'react-countdown-now';

import "./quiz.css";


export class QuizQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      count: 0,
      points: 0,
      missedQuestions: [],
      finsihed: false,
      background: "",
      optionsButton: false,
      timer: null,
      startButton: true,
      nextButton: true,
      counttwo: 0,
      colorButton: "",
      pauseTime: false,
      wrongOption: null,
      selectedId: null,
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

  setButtonOptions() {
    // this.setState({ optionsButton: true })
  }
  // console.log({seconds})
  Questions = [
    {
      id: 0,
      question: "What does CSS stand for?",
      answers: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      correct: "Cascading Style Sheets",
      correctID: 2,
      pointer: 0,
      time: null
    },

    {
      id: 1,
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      answers: [
        "In the <head> section",
        "In the <body> section",
        "At the end of the document",
        "You can't refer to an external style sheet"
      ],
      correct: "In the <head> section",
      correctID: 0,
      pointer: 5,
      time: 5
    },

    {
      id: 2,
      question: "Which HTML tag is used to define an internal style sheet?",
      answers: ["<style>", "<script>", "<headStyle>", "<css>"],
      correct: "<style>",
      pointer: 4,
      correctID: 0,
      time: 4
    },

    {
      id: 3,
      question: "Which company developed JavaScript?",
      answers: ["Netscape", "Mozilla", "Andela", "Microsoft"],
      correct: "Netscape",
      pointer: 12,
      correctID: 0,
      time: 7
    },

    {
      id: 4,
      question: "The expression ('2' + 2) evaluates to: ",
      answers: ["22", "4", "NaN", "undefined"],
      correct: "22",
      pointer: 10,
      correctID: 0,
      time: 15
    },

    {
      id: 5,
      question:
        "Which loop construct loops at least once, before checking the loop condition?",
      answers: ["for loop", "switch", "while loop", "do-while loop"],
      correct: "do-while loop",
      pointer: 29,
      correctID: 3,
      time: 10
    },

    {
      id: 6,
      question:
        "Which of the following is correct in JavaScript",
      answers: ['GETelementBYid', 'getElementById', 'getElementByID', 'GetElementById'],
      correct: "getElementById",
      pointer: 5,
      correctID: 1,
      time: 19
    },

    {
      id: 7,
      question:
        "JavaScript runs on the ___________ side.",
      answers: ['server', 'client', 'embeded', 'mobile'],
      correct: "client",
      pointer: 29,
      correctID: 1,
      time: 20
    },

    {
      id: 8,
      question:
        "console.log(typeof [5, 'name', 87]) prints",
      answers: ['number', 'mixed type', 'array', 'object'],
      correct: "object",
      pointer: 40,
      correctID: 3,
      time: 20
    },

    {
      id: 9,
      question:
        "Choose the client-side JavaScript object:",
      answers: ['Database', 'Cursor', 'Client', 'FileUpLoad'],
      correct: "FileUpLoad",
      pointer: 38,
      correctID: 3,
      time: 15
    },

    {
      id: 10,
      question:
        "RAD stands for",
      answers: ['Relative Application Development', 'Rapid Application Development', 'Rapid Application Document', 'Relative Application Document'],
      correct: "Rapid Application Development",
      pointer: 20,
      correctID: 1,
      time: 25
  }
  ];

  incrementCounter() {
  	this.setState({timeWord: ""})
    this.setState({ timerState: true });
    this.setState({timerCount: 0})
    if (this.state.i < this.Questions.length - 1) {
      var counter = this.Questions[this.state.i + 1].time;
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
            self.setState({timeWord: 'You ran out of time!'})
            self.setState({ optionsButton: true });
            self.setState({ nextButton: false });
          }
          // return counter;
        } else {
          clearInterval(newYearCountdown);
        }
      }, 1000);
    }

    this.setState({ colorButton: "" });
    this.setState({ correctanswerId: null });
    this.setState({ selectedId: null });
    this.setState({ clickTimes: this.state.clickTimes + 1 });
    const TimesClicked = this.state.clickTimes;

    //alert(this.state.clickTimes)
    if (this.state.i >= 1 && TimesClicked < 1) {
      //alert(true);
      let notanswered = this.state.missedQuestions;
      notanswered.push(this.Questions[this.state.i].id);
      this.setState(
        ({ missedQuestions: notanswered } = () =>
          console.log(this.state.missedQuestions))
      );
    }
    //alert(this.state.i)
    //this.setState({missedQuestions: this.state.i})
    this.setState({ begin: "" });
    this.setState({ nextButton: true });
    this.setState({ startButton: true });
    this.setState({ end: "Points: " + this.state.points });
    //this.refs.btnnext.setAttribute("disabled", "disabled");
    //this.refs.btnstart.setAttribute("disabled", "disabled");
    //this.refs.btnoptions.removeAttribute("disabled");
    this.setState({ optionsButton: "" });
    if (this.state.i < this.Questions.length - 1) {
      const j = this.state.i + 1;
      this.setState({ i: j });
      //console.log(this.state.i);
      this.setState({ timer: this.Questions[this.state.i + 1].time });
      //console.log(this.state.timer);
      //alert(this.state.i);
    } else {
      // return this.state
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

    //alert("i want to go!");
    //this.setState({ i: 0});
  };

  returnFeedback() {
    return this.state.missedQuestions.map(k => {
      //alert(k);
      return (
        <div>
          <center>
            <h4> {this.Questions[k].question} </h4>
            Correct Answer: {this.Questions[k].correct}
          </center>
        </div>
      );
    });
  }

  giveFeedback() {
    if (this.state.finished === true) {
      const percent = (this.state.points / this.state.totalPoints) * 100;

      return (
        <div>
          <div class="col-md-8 normalize" style={{ marginTop: "10%" }}>
            <center>
              <span>
                {" "}
                Your score is: {this.state.points} points <br />
                <br /> Which is {Math.round(percent)}% of points obtainable
              </span>
              <br />
              <h3> Questions you got wrong </h3>
              {this.returnFeedback()}
              <br />
              <button class="btn btn-success" onClick={this.restartQuiz}>
                {" "}
                Back to Home{" "}
              </button>
            </center>
          </div>
          <div class="col-md-4 normalize" />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10%" }}>
          <div class="col-md-8 normalize">
            <div class="col-md-1 normalize" />
            <div class="col-md-10 normalize">
              <center>
                <h2>TEST QUESTIONS </h2>
                {/* <p> {this.state.i} </p>*/}
                <p>
                  <h3 style={{ color: "blue" }}> {this.state.begin} </h3>
                </p>
                <p> {this.Questions[this.state.i].question} </p>
                {this.renderOption(this.state.i)}
                <div class="col-md-6 normalize">
                  <button
                    disabled={this.state.startButton}
                    class="col-md-6 btn btn-block normalize"
                    style={{ width: "97%" }}
                    ref="btnstart"
                    onClick={this.incrementCounter.bind(this)}
                  >
                    Start
                  </button>
                </div>

                <div class="col-md-6 normalize">
                  <button
                    disabled={this.state.nextButton}
                    class="btn btn-block normalize"
                    style={{ width: "97%" }}
                    ref="btnnext"
                    onClick={this.incrementCounter.bind(this)}
                  >
                    Next{" "}
                  </button>
                </div>

                <br />
                <div style={{ marginTop: "5%" }}>
                  <i>
                    <h4> {this.state.end} </h4>
                  </i>
                </div>
              </center>
            </div>
            <div class="col-md-1 normalize"> </div>
          </div>

          <div class="col-md-4 normalize" style={{ marginTop: "8%" }}>
            <center>
              {" "}
              <b><span style = {{fontSize: '100px'}}>{this.state.timerCount}</span></b>
              <h3> {this.state.timeWord} </h3>
            </center>
          </div>
        </div>
      );
    }
    //this.setState({ timer: null })
  }

  renderCheck() {
    if (this.check === 0) {
      this.setState({ optionsButton: true });
    }
  }

  displayAnswer(e) {
    this.setState({ timerState: false });
    this.setState({ clickTimes: this.state.clickTimes + 1 });
    const answer = e.target.value;
    const selectedAnswerID = e.target.id;
    //alert("Selected Answer ID is " + selectedAnswerID);
    const correctAnswerID = this.Questions[this.state.i].correctID;
    //alert("correct answer is " + correctAnswerID);

    this.setState({ selectedId: selectedAnswerID });
    this.setState({ correctanswerId: correctAnswerID });

    //this.refs.selectedAnswerID.setAttribute("disabled", "disabled")

    //answer.setAttribute("disabled", "disabled")
    //alert(answer);
    // this.refs.answer.setAttribute('')
    //this.refs.btnnext.setAttribute("background", "yellow");
    // const setLastWords = this.state.endcomment + this.Question[this.state.i].question;
    //this.setState({ endcomment: setLastWords });

    const correctanswer = this.Questions[this.state.i].correct;
    if (this.state.count < 1) {
      this.setState({ startButton: false });
      this.setState({ nextButton: true });

      const newcount = this.state.count + 1;
      this.setState({ count: newcount });
    } else {
      this.setState({ nextButton: false });
      //this.refs.btnnext.removeAttribute("disabled");
    }
    //this.refs.btnoptions.setAttribute("disabled", "disabled");
    this.setState({ optionsButton: true });
    //const setLastWords = this.state.endcomment + answer;

    //const tracker = {this.state.i: answer}

    //setLastWords = this.state.endcomment + correctanswer;
    //this.setState({ endcomment: setLastWords });

    //alert(correctanswer);
    if (answer === correctanswer) {
      //alert("Right");
      const questionPoint = this.Questions[this.state.i].pointer;
      const newPoints = this.state.points + questionPoint;
      this.setState({ points: newPoints });
      this.setState({ colorButton: "green" });
      this.setState({});
    } else {
      // alert("wrong");
      this.setState({ colorButton: "red" });
      //const missedQuestion = this.Questions[this.state.i].id;
      if (this.state.counttwo < 1) {
        const newCountTwo = this.state.counttwo + 1;
        this.setState({ counttwo: newCountTwo });
      } else {
        let missed = this.state.missedQuestions;
        missed.push(this.Questions[this.state.i].id);
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

  renderOption(i) {
    const correctBtn = this.state.correctanswerId;
    const selectedBtn = this.state.selectedId;

    //alert ("Correct: " + correctBtn);
    //alert ("Select:" + selectedBtn);
    return this.Questions[i].answers.map((option, index) => (
      <p>
        <button
          key={index}
          class="btn btn-block"
          style={{
            background:
              selectedBtn && selectedBtn == index
                ? index == correctBtn
                  ? "green"
                  : "red"
                : selectedBtn && correctBtn == index && "green"
          }}
          disabled={this.state.optionsButton}
          id={index}
          value={option}
          onClick={this.displayAnswer.bind(this)}
        >
          {option}
        </button>
      </p>
    ));
  }

  render() {
    return this.giveFeedback();
  }
}


//ReactDOM.render(
  //<Countdown date={Date.now() + 25000} />,
  //document.getElementById('time')
//);