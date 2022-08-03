import React, {useState, useEffect}from 'react'
import { FormControlLabel, Radio, FormControl, RadioGroup, Button } from '@mui/material';
import Card from 'react-bootstrap/Card';


const ReactDisplayQuiz = (props) =>{
    const [userAnswer, setUserAnswer] = useState('')
    const [helperText, setHelperText] = useState('Choose wisely');
    const [quizStart, setQuizStart] = useState(false)

    const [isCorrect, setIsCorrect] = useState(false)

    // if (isCorrect){
    //     setHelperText('Choose wisely')
    // } else{
    //     setHelperText('Choose wisely')

    // }
    useEffect(() => {
        // Anything in here is fired on component mount.
        console.log('useEffect')
        setHelperText('Choose wisely')

        return () => {
            // Anything in here is fired on component unmount.
            setHelperText('Choose wisely')
            console.log('useEffect')
        }
    }, [])
    

    const correctAnswer = props.quiz.correctAnswer

    const DisplayQuizStyle = {
        quizCard:{
            padding: "20px 350px"
        },
        submitButton:{
            padding:"10px 295px"
           
        },
        helperText:{
            textAlign: 'center'
        }
    }
   
    
    const handleRadioChange = (event) =>{
        setUserAnswer(event.target.value)
        setHelperText('Choose wisely')
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (userAnswer === correctAnswer){
            setHelperText("Correct!")
            setTimeout(()=>{
                setHelperText('Choose wisely')
            }, 3000)
        } else{
            setHelperText("Try Again")
            setTimeout(()=>{
                setHelperText('Choose wisely')
            }, 3000)
        }
    }

    return <div style={DisplayQuizStyle.quizCard}>
        <Card >
            <Card.Body>
                <Card.Title>{props.quiz.quizQuestion}</Card.Title>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <RadioGroup onChange={handleRadioChange}>
                            <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[0]} label={props.quiz.potentialAnswers[0]}></FormControlLabel>
                            <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[1]} label={props.quiz.potentialAnswers[1]}></FormControlLabel>
                            <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[2]} label={props.quiz.potentialAnswers[2]}></FormControlLabel>
                            <FormControlLabel control={<Radio/>} value={props.quiz.potentialAnswers[3]} label={props.quiz.potentialAnswers[3]}></FormControlLabel>
                        </RadioGroup>
                        <Button type='submit' style={DisplayQuizStyle.submitButton}>Submit</Button>
                    </FormControl>
                </form>
            <p style={DisplayQuizStyle.helperText}>{helperText}</p>
            </Card.Body>
        </Card>
        
    </div>
}
export default ReactDisplayQuiz

