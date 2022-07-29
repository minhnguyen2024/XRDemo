import React from 'react';
import Button from '@mui/material/Button';
import { FormControlLabel, Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';

import { TextField } from '@mui/material';

class NotesForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: '',
      details:'',
      titleError: false,
      detailsError: false,
      category: ""
    }
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDetailsChange = this.handleDetailsChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleRadioChange(event){
    this.setState(()=>{
      return{
        category: event.target.value
      }
    })
  }

  handleTitleChange(event){
    this.setState(()=>{
      return{
        title: event.target.value
      }
    })
  }

  handleDetailsChange(event){
    
    this.setState(()=>{
      return{
        details: event.target.value
      }
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState(()=>{
      return{
        titleError: true,
        detailsError: true
      }
    })

    if(!this.state.title){
      this.setState(()=>{
        return{
          titleError: true,
        }
      })
    }
    else{
      this.setState(()=>{
        return{
          titleError: false,
        }
      })
    }

    if(!this.state.details){
      this.setState(()=>{
        return{
          detailsError: true,
        }
      })
    }
    else{
      this.setState(()=>{
        return{
          detailsError: false,
        }
      })
    }

    if(this.state.title && this.state.details){
      this.setState(()=>{
        return{
          titleError: false,
          detailsError: false
        }
      })
      console.log(this.state.title)
      console.log(this.state.details)
      var title = this.state.title;
      var details = this.state.details
      var category = this.state.category
      fetch('http://localhost:8000/notes',{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body:JSON.stringify({ 
          title,
          details,
          category
        })
      })
    }
  }


  render(){

    return(<div>

      <form noValidate autoComplete='off' onSubmit={this.handleSubmit}>
        <TextField label='Note Title' fullWidth onChange={this.handleTitleChange} error={this.state.titleError}></TextField><br/>
        <TextField label='Details' multiline rows={4} fullWidth onChange={this.handleDetailsChange} error={this.state.detailsError}></TextField> 
        <RadioGroup value={this.state.category} onChange={this.handleRadioChange}>
          <FormControlLabel control={<Radio/>} label="Money" value="money"></FormControlLabel>
          <FormControlLabel control={<Radio/>} label="Reminders" value="reminders"></FormControlLabel>
        </RadioGroup>
        
        <Button type="submit">Submit Here</Button>

      </form>

      
    </div>)
  }
}

export default NotesForm