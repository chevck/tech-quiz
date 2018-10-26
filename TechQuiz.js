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
