import React ,  {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../Lectures/Lectures.css'


const LectureDisplay = (props) =>{
    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8004/lectureCollection').then(res => res.json()).then(data => setLectures(data))
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
     
        <input type='text' onChange={handleSearchValueChange} value={searchValue}></input>
        {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
       
        {
            filteredLectures.map((lecture)=>{
                return (
                    <Card style={{ width: '40rem' }} className="card">
                        <Card.Body>
                            <Card.Subtitle>
                                <p>{lecture.lectureID}</p>
                                <p className='editID'>EditID: {lecture.id}</p>
                                <p style="text-align:left;">
                                    This text is left aligned
                                    <span style="float:right;">
                                        This text is right aligned
                                    </span>
                                </p>
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