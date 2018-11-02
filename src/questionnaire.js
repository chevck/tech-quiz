import React from "react";
import './antdesign.css';

var Questions = [
  {
  	id: 1,
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    correct: "2"
  },

  {
  	id: 2,
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: [
      "In the <head> section",
      "In the <body> section",
      "At the end of the document",
      "You can't refer to an external style sheet"
    ],
    correct: 0
  },

  {
  	id: 3,
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<style>", "<script>", "<headStyle>", "<css>"],
    correct: 0
  }
];


export class QuizQuestions extends React.Component{
  render(){
    const i = 0; 

    displayQuestion(e){
      const getQuestionId = e.target.id; 
      if (getQuestionId == 1){
        i = i + 1;
      }
      /*const isEnabled =
          email.length > 0 &&
          password.length > 0; */
      NextButton.disabled();
    }
    return (
              <div>



              </div>
      )
  }
}