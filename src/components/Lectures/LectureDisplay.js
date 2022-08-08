////////////////////////////////////////////////////////////////////////////////
// File:            LectureDisplay.js
// Authors:         Minh Nguyen
// Acknowledgments: None
// Contacts:        minhnguyen_2024@depauw.edu
////////////////////////////////////////////////////////////////////////////////
import React ,  {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../Lectures/Lectures.css'
import { Input } from '@mui/material';


const LectureDisplay = (props) =>{
    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8004/lectureCollection/').then(res => res.json()).then(data => setLectures(data))
    }, [])

    console.log("lectures", lectures)

    const [wantedID, setWantedID] = useState('')


    const [searchValue, setSearchValue] = useState('')

    const filteredLectures = lectures.filter((lecture) =>{
        return lecture.lectureID.includes(searchValue)
    })

    const shouldDisplayButton = searchValue.length > 0;

    const handleClearClick = () =>{
        setSearchValue("")
    }

    const handleSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }

    return (<div>
        <h1>View Lecture</h1>
     
        <Input type='text'  fullWidth className='searchBar' onChange={handleSearchValueChange} value={searchValue} placeholder="Search by ID"></Input>
        {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
       
        {
            filteredLectures.map((lecture)=>{
                return (
                    <Card className="card" key={lecture.id}>
                        <Card.Body>
                            <Card.Subtitle>
                                <p>{lecture.lectureID}</p>
                                <p className='editID'>EditID: {lecture.id}</p>
                    
                            </Card.Subtitle>
                            <Accordion> 
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{lecture.lectureTitle}</Accordion.Header>
                                    <Accordion.Body>
                                        {lecture.lectureContent}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>        
                        </Card.Body>
                    </Card>
                )
            })
        }
    </div>)

}
export default LectureDisplay