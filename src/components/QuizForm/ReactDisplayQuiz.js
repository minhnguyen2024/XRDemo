import React, {useState}from 'react'
import { FormControlLabel, Radio, FormControl, RadioGroup, Button } from '@mui/material';

const ReactDisplayQuiz = (props) =>{
    const [userAnswer, setUserAnswer] = useState('')
    const [helperText, setHelperText] = useState('Choose wisely');

    const correctAnswer = props.quiz.correctAnswer
    
    const handleRadioChange = (event) =>{
        setUserAnswer(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (userAnswer === correctAnswer){
            // setIsCorrect(true)
            setHelperText("Correct!")
        } else{
            // setIsCorrect(false)
            setHelperText("Try Again")
        }
    }

    return <div>
        <p>{props.quiz.quizQuestion}</p>
        <form onSubmit={handleSubmit}>
            <FormControl>
                <RadioGroup row onChange={handleRadioChange}>
                    <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[0]} label={props.quiz.potentialAnswers[0]}></FormControlLabel>
                    <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[1]} label={props.quiz.potentialAnswers[1]}></FormControlLabel>
                    <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[2]} label={props.quiz.potentialAnswers[2]}></FormControlLabel>
                    <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[3]} label={props.quiz.potentialAnswers[3]}></FormControlLabel>
                </RadioGroup>
                <Button type='submit'>Submit</Button>
            </FormControl>

        </form>
        <h2>{helperText}</h2>
    </div>
}
export default ReactDisplayQuiz

