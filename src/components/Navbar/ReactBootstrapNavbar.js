import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import {Link} from 'react-router-dom'
export default function ReactBootstrapNavbar(){
    return(

        <Navbar>
            <Container>
                <Nav>
                    <Nav.Link href='/home'>Home</Nav.Link>


                    <NavDropdown title="Lecture">
                        <NavDropdown.Item href="/lectures-create">New Lecture</NavDropdown.Item>
                        <NavDropdown.Item href="/lectures-display">View Lectures</NavDropdown.Item>
                        <NavDropdown.Item href="/lectures-edit">Edit Lectures</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Quiz">
                        <NavDropdown.Item href='/quizzes-create'>New Quiz</NavDropdown.Item>
                        <NavDropdown.Item href='/quizzes-display'>View Quizzes</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
            </Container>
        </Navbar>
    )
}