import React from "react";
import ReactDOM from "react-dom";
import Countdown from 'react-countdown-now';

import "./antdesign.css";

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
      optionsButton: "",
      timer: null,
      startButton: "",
      counttwo: 0,
      pauseTime: false,
      wrongOption: null,
      selectedId: null,
      correctanswerId:null
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
