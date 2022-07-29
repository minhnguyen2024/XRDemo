import React ,  {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';


const LectureDisplay = (props) =>{
    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8003/lectureCollection').then(res => res.json()).then(data => setLectures(data))
    }, [])


    const [wantedID, setWantedID] = useState('')


    const [searchValue, setSearchValue] = useState('')

    const filteredLectures = lectures.filter((lecture) =>{
        return lecture.lectureID.includes(searchValue)
    })

    const shouldDisplayButton = searchValue.length > 0;

    const handleClearClick = () =>{
        setSearchValue("")
    }

    // const wantedID = 'day1'
    var wantedLecture = {}
    

    console.log(lectures)
    for(let i = 0; i < lectures.length; i++){
        if (lectures[i].lectureID == wantedID){
            wantedLecture = lectures[i]
        }
    }

    console.log(wantedLecture)
    console.log(wantedLecture.lectureTitle)

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
                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Subtitle>{lecture.lectureID}</Card.Subtitle>
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

     // <div>
            //     <h2>Title: {lecture.lectureTitle}</h2><br/>
            //     <h3>Lecture ID: {lecture.lectureID}</h3><br/>
            //     <p>Content: {lecture.lectureContent}</p><br/>
            // </div>
            // const handleButtonSubmit = (event) =>{
            //     event.preventDefault()
        
            // }
        
            // return <div>
            //     {props.lectures.map(lecture =>(
            //         <Card style={{ width: '18rem' }}>
            //         <Card.Body>
            //             <Card.Title>{lecture.lectureTitle}</Card.Title>
            //             <Card.Text>
            //                 {lecture.lectureContent}
            //             </Card.Text>
            //             <Card.Subtitle>{lecture.lectureID}</Card.Subtitle>
        
            //             <form onSubmit={handleButtonSubmit}>
            //                 <Nav.Link href='/single-lecture-display' wantedID={lecture.lectureID}>Go to Lecture</Nav.Link>
            //                 {/* <Button className='btn btn-primary'>Go to Lecture</Button> */}
            //             </form>
                        
            //         </Card.Body>
            //     </Card>)
            //     )}
            // </div>