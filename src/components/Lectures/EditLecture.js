////////////////////////////////////////////////////////////////////////////////
// File:            EditLecture.js
// Authors:         Minh Nguyen
// Acknowledgments: None
// Contacts:        minhnguyen_2024@depauw.edu
////////////////////////////////////////////////////////////////////////////////
import React, {useState, useEffect} from 'react'
import { TextField } from '@mui/material'
import { Typography, Input } from '@mui/material';
import  Button  from 'react-bootstrap/Button';

const EditLecture =(props)=>{
    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8004/lectureCollection').then(res => res.json()).then(data => setLectures(data))
    }, [])

    const [editID, setEditID] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editContent, setEditContent] = useState('')
    
    const [wantedID, setWantedID] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const [wantedLectures, setWantedLectures] = useState([])
    const [wantedLecture, setWantedLecture] = useState({})

    const shouldDisplayButton = searchValue.length > 0;

    const handleWantedIDChange = (event) =>{
        setWantedID(event.target.value)
    }

    const handleWantedIDSubmit = (event) =>{
        event.preventDefault();
        console.log("wantedID ", wantedID)

        var temp = lectures.filter((lecture) =>{
            // console.log(lecture.lectureID)
            // console.log("wantedID ",wantedID)
            return lecture.lectureID.includes(wantedID)
        })
        setWantedLectures(temp)
        setWantedLecture(wantedLectures[0])
    }


    const handleClearClick = (event) =>{
        event.preventDefault();
        setWantedID("")
    }

    const handleEditIDChange = (event) =>{
        setEditID(event.target.value)
    }

    const handleEditContentChange = (event) =>{
        setEditContent(event.target.value)
    }

    const handleEditTitleChange = (event) =>{
        setEditTitle(event.target.value)
    }

    const handleEditSubmit = (event) =>{
        event.preventDefault()
        var id = wantedLectures[0].id
        let lectureToBeEditted = wantedLectures[0]
        var lectureID = lectureToBeEditted.lectureID
        var lectureTitle = editTitle
        var lectureContent = editContent
        var url = 'http://localhost:8004/lectureCollection/' + id

        fetch(url,{
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify({ 
                lectureID,
                lectureTitle,
                lectureContent,  
            })
          })
    }

    return (<div>
        <h1>Edit Lecture</h1>

        <form onSubmit={handleWantedIDSubmit} className='edit-lecture-search'>
            <Input type='text' onChange={handleWantedIDChange} placeholder="Search by ID" value={wantedID}></Input>
            <Button type='submit'>Submit</Button>
        </form>

        {shouldDisplayButton && <Button onClick={handleClearClick}>Clear</Button>}
        {
            wantedLectures.map((wantedLecture) =>{
                return (<div>
                    <Typography variant='subtitle1' align='center'>Lecture ID: {wantedLecture.lectureID}</Typography>
                    <Typography variant='h4' align='center' >{wantedLecture.lectureTitle}</Typography>
                    <Typography variant='body1' align='center' >{wantedLecture.lectureContent}</Typography>
                </div>)
            })
        }

        <form onSubmit={handleEditSubmit} className='edit-lecture-form'>
                <Input 
                    type='text' 
                    onChange={handleEditTitleChange} 
                    placeholder="Edit Title">
                </Input><br/>
                <TextField 
                    type='text' 
                    onChange={handleEditContentChange} 
                    placeholder="Edit Content" 
                    multiline
                    fullWidth 
                    rows={10}>
                </TextField><br/>
                <Button type='submit'>Save Edit</Button><br/>
        </form>
    </div>)
}


export default EditLecture

