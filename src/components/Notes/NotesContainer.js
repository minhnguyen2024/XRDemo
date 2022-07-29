import React, {useEffect, useState} from 'react'
import SingleLectureDisplay from '../Lectures/SingleLectureDisplay'
import NotesDisplay from './NotesDisplay'
import NotesForm from './NotesForm'

export default function NotesContainer(){
    const[notes, setNotes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/notes').then(res => res.json()).then(data => setNotes(data))
    }, [])

    return(
        <div>
            <NotesForm/>
            <NotesDisplay notes={notes}></NotesDisplay>
            <SingleLectureDisplay notes={notes}></SingleLectureDisplay>
        </div>)
}

