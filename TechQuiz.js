import React from "react";
import ReactDOM from "react-dom";
import Countdown from 'react-countdown-now';

import "./quiz.css";

const Completionist = () => <span><center><b>No Time!</b></center></span>;

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
      pauseTime: false,
wrongOption: null,
      selectedId: null,
      correctanswerId:null, 
      begin: ""
    };
  }

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      //this.setState({ optionsButton: true })
      const check = 0;
      this.renderCheck();

      return <Completionist />;
    } else {
      console.log("Seconds " + seconds);
      this.setButtonOptions();

      // Render a countdown
      return <span style ={{fontSize: '18px'}}><b>{seconds}</b></span>;
    }
  };

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
      time: 0
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
      time: 10
    },

    {
      id: 2,
      question: "Which HTML tag is used to define an internal style sheet?",
      answers: ["<style>", "<script>", "<headStyle>", "<css>"],
      correct: "<style>",
      pointer: 4,
      correctID: 0,
      time: 20
    }
  ];

  incrementCounter() {
  	this.setState({begin: ""});
  	this.setState({nextButton: true})
  	this.setState({startButton: true})
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
      begin: "Sample Question",
      nextButton: true, 
      startButton: true
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
     
      return (
      <div>
        <div class = 'col-md-8 normalize' style = {{marginTop: '10%'}}>
        <center>
         <span> You got {this.state.points} points </span>
          {this.returnFeedback()}
          <br/>
          <button class = 'btn btn-success' onClick={this.restartQuiz}> Back to Home </button>
          </center>
        </div>
        <div class = 'col-md-4 normalize'></div>
       </div>
      );
    } else {
      return (
        <div style = {{marginTop: '10%'}}>
        <div class = 'col-md-8 normalize'>
        <div class = 'col-md-1 normalize'></div>
        <div class = 'col-md-10 normalize'>
        <center><h2>TEST QUESTIONS </h2>
          {/* <p> {this.state.i} </p>*/}
          <p><h3 style = {{color: 'blue'}}> {this.state.begin} </h3></p>
          <p> {this.Questions[this.state.i].question} </p>
          {this.renderOption(this.state.i)}
          <div class = 'col-md-6 normalize'>
          <button disabled = {this.state.startButton} class = 'col-md-6 btn btn-block normalize' style = {{width: '97%'}} ref="btnstart" onClick={this.incrementCounter.bind(this)}>
            Start
          </button>
          </div>

         <div class = 'col-md-6 normalize'>
         <button disabled = {this.state.nextButton} class = 'btn btn-block normalize' style = {{width: '97%'}} ref="btnnext" onClick={this.incrementCounter.bind(this)}>
            Next{" "}
          </button>
         </div>

          <p> Points: {this.state.points} </p>
          </center>
          	</div>
          <div class = 'col-md-1 normalize'> </div> 
          	</div>


          	<div class = 'col-md-4 normalize' style = {{marginTop: '12%'}}>
          <center><Countdown style = {{fontWeight: 'bold', fontSize: '20px'}}
            date={Date.now() + this.state.timer * 1000}
            renderer={this.renderer}
          /></center>
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
    const answer = e.target.value;
    const selectedAnswerID = e.target.id;
    //alert("Selected Answer ID is " + selectedAnswerID);
    const correctAnswerID = this.Questions[this.state.i].correctID;
    //alert("correct answer is " + correctAnswerID);

    this.setState({ selectedId: selectedAnswerID })
    this.setState({ correctanswerId: correctAnswerID })

    



     

    //this.refs.selectedAnswerID.setAttribute("disabled", "disabled")

    //answer.setAttribute("disabled", "disabled")
    //alert(answer);
    // this.refs.answer.setAttribute('')
    //this.refs.btnnext.setAttribute("background", "yellow");
    // const setLastWords = this.state.endcomment + this.Question[this.state.i].question;
    //this.setState({ endcomment: setLastWords });

    const correctanswer = this.Questions[this.state.i].correct;
    if (this.state.count < 1) {
    	this.setState({startButton: false});
    	this.setState({nextButton: true})

      const newcount = this.state.count + 1;
      this.setState({ count: newcount });
    } else {
    	this.setState({nextButton: false})
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
      this.setState({});
    } else {
      //alert("wrong");
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
    return this.Questions[i].answers.map((option, index) => (
      <p>
        <button
        key = {index}
        class = 'btn btn-block'
          style={{ background: this.state.wrongButton }}
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
