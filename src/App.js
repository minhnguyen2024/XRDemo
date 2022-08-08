////////////////////////////////////////////////////////////////////////////////
// File:            App.js
// Authors:         Minh Nguyen
// Acknowledgments: None
// Contacts:        minhnguyen_2024@depauw.edu
////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Lectures from './pages/Lectures';
import Quizzes from './pages/Quizzes';
import ReactQuizForm from './components/QuizForm/ReactQuizForm';
import LectureForm from './components/Lectures/LectureForm';
import Home from './pages/Home';
import ReactBootstrapNavbar from './components/Navbar/ReactBootstrapNavbar';
import SingleLectureDisplay from './components/Lectures/SingleLectureDisplay';
import EditLecture from './components/Lectures/EditLecture';
import AllQuizzes from './components/QuizForm/AllQuizzes';

function App() {

    return (
   <>
    <div className="App">
      <ReactBootstrapNavbar/> 
    </div>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/lectures-create' element={<LectureForm/>}></Route>
        <Route path='/lectures-display' element={<Lectures/>}></Route>
        <Route path='/lectures-edit' element={<EditLecture/>}></Route>
        <Route path='/quizzes-create' element={<ReactQuizForm/>}></Route>
        <Route path='/quizzes-display' element={<Quizzes/>}></Route>
        <Route path='/quizzes-all-display' element={<AllQuizzes/>}></Route>
        <Route path='/single-lecture-display' element={<SingleLectureDisplay/>}> </Route>
      </Routes>
   </>    
  );
}

export default App;
