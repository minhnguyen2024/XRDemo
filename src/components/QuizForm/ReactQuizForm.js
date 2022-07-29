import React from "react";
import Button from '@mui/material/Button';
import { FormControlLabel, Radio, TextField } from '@mui/material';
import { RadioGroup } from '@mui/material';

class ReactQuizForm extends React.Component{
  constructor(props){
    super(props)
  
    this.state = {
        quizID: '',
        quizQuestion: "",
        potentialAnswers: [],
        correctAnswer: "",
        indexOfCorrectAnswer: 0,
        ans0:"",
        ans1:"",
        ans2:"",
        ans3:"",
    }
     
    this.handleQuizIDChange = this.handleQuizIDChange.bind(this)
    this.handleQuizQuestionChange = this.handleQuizQuestionChange.bind(this)
    this.handlePotentialAnswer0Change = this.handlePotentialAnswer0Change.bind(this)
    this.handlePotentialAnswer1Change = this.handlePotentialAnswer1Change.bind(this)
    this.handlePotentialAnswer2Change = this.handlePotentialAnswer2Change.bind(this)
    this.handlePotentialAnswer3Change = this.handlePotentialAnswer3Change.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
        
  }

  handleQuizIDChange(event){
    this.setState(()=>{
      return {
          quizID: event.target.value
      }
    })
  }

  handleQuizQuestionChange(event){
      this.setState(()=>{
          return {
              quizQuestion: event.target.value
          }
      })
  }

  handlePotentialAnswer0Change(event){
    this.setState(()=>{
      return{
        ans0: event.target.value
      }
    })

  }

  handlePotentialAnswer1Change(event){
    this.setState(()=>{
      return{
        ans1: event.target.value
      }
    })
  }

  handlePotentialAnswer2Change(event){
    this.setState(()=>{
      return{
        ans2: event.target.value
      }
    })
  }
  handlePotentialAnswer3Change(event){
    this.setState(()=>{
      return{
        ans3: event.target.value
      }
    })
  }

  handleRadioChange(event){
    this.setState(()=>{
      return{
        correctAnswer: event.target.value
      }
    })
    console.log(this.state.correctAnswer)
  }

  handleSubmit(event){
      event.preventDefault()

      this.state.potentialAnswers.push(this.state.ans0)
      this.state.potentialAnswers.push(this.state.ans1)
      this.state.potentialAnswers.push(this.state.ans2)
      this.state.potentialAnswers.push(this.state.ans3)

      var quizID = this.state.quizID
      var quizQuestion = this.state.quizQuestion
      var potentialAnswers = this.state.potentialAnswers
      var correctAnswer = this.state.correctAnswer
      var indexOfCorrectanswer = this.state.indexOfCorrectAnswer
      fetch('http://localhost:8001/quizColection',{
      method: "POST",
      headers: {"Content-type": "application/json"},
      body:JSON.stringify({ 
        quizID,
        quizQuestion,
        potentialAnswers,
        correctAnswer,
        indexOfCorrectanswer
      })
    })
  }


  render(){
    return (<div>
         <form noValidate autoComplete='off' onSubmit={this.handleSubmit}>
            <TextField label='Quiz ID'  onChange={this.handleQuizIDChange} ></TextField> 
            <TextField label='Quiz Question' multiline rows={4} fullWidth onChange={this.handleQuizQuestionChange} ></TextField> 
            <TextField placeholder="Answer0" onChange={this.handlePotentialAnswer0Change} ></TextField><br/>
            <TextField placeholder="Answer1" onChange={this.handlePotentialAnswer1Change} ></TextField><br/>
            <TextField placeholder="Answer2" onChange={this.handlePotentialAnswer2Change} ></TextField><br/>
            <TextField placeholder="Answer3" onChange={this.handlePotentialAnswer3Change} ></TextField><br/>
            <RadioGroup onChange={this.handleRadioChange}>
              <FormControlLabel control={<Radio/>} value={this.state.ans0} label={this.state.ans0}></FormControlLabel>
              <FormControlLabel control={<Radio/>} value={this.state.ans1} label={this.state.ans1}></FormControlLabel>
              <FormControlLabel control={<Radio/>} value={this.state.ans2} label={this.state.ans2}></FormControlLabel>
              <FormControlLabel control={<Radio/>} value={this.state.ans3} label={this.state.ans3}></FormControlLabel>
            </RadioGroup>
            <Button type="submit">Save</Button>
        </form>
      </div>)
    }
    
}

export default ReactQuizForm