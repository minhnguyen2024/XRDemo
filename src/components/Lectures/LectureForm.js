import React from 'react'
// import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
import Button from 'react-bootstrap/Button';

class LectureForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lectureID:'',
            lectureTitle: '',
            lectureContent:''

        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleLectureIDChange = this.handleLectureIDChange.bind(this)
    }

    handleLectureIDChange(event){
        this.setState(()=>{
            return{
                lectureID: event.target.value
            }
        })
    }

    handleTitleChange(event){
        this.setState(()=>{
            return{
                lectureTitle: event.target.value
            }
        })
    }

    handleContentChange(event){
        this.setState(()=>{
            return {
                lectureContent: event.target.value
            }
        })
    }

    handleSubmit(event){
        event.preventDefault()
        var lectureID = this.state.lectureID
        var lectureTitle = this.state.lectureTitle
        var lectureContent = this.state.lectureContent
        fetch('http://localhost:8004/lectureCollection',{
          method: "POST",
          headers: {"Content-type": "application/json"},
          body:JSON.stringify({ 
            lectureID,
            lectureTitle,
            lectureContent
          })
        })
    }
      
    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
            <TextField label='Lecture ID' onChange={this.handleLectureIDChange}></TextField><br/>
                <TextField label='Lecture Title' fullWidth onChange={this.handleTitleChange}></TextField><br/>
                <TextField label='Lecture Content' multiline fullWidth rows={10} onChange={this.handleContentChange}></TextField> 
                <Button className='btn btn-primary' type='submit'>Save Lecture</Button>
            </form>
        </div>)
    }
}

export default LectureForm;

